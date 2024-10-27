import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Header } from './components/layout/Header';
import { GameSection } from './components/layout/GameSection';
import { StatusSection } from './components/layout/StatusSection';
import { Footer } from './components/layout/Footer';
import { getUniqueSudoku } from './solver/UniqueSudoku';
import { useSudokuContext } from './context/SudokuContext';
import { IntroduceSudoku } from './IntroduceSudoku';
import { useTranslation } from 'react-i18next';
import { 
  FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton,
  FacebookIcon, TwitterIcon, WhatsappIcon, LinkedinIcon
} from 'react-share';
import SocialShare from './components/Socialshare'; // 导入 SocialShare 组件

/**
 * Game is the main React component.
 */
export const Game: React.FC<{}> = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = ['ar', 'ur'].includes(lng) ? 'rtl' : 'ltr';
  };

  const getLanguageName = (lang: string) => {
    const languageNames: {[key: string]: string} = {
      en: 'English',
      zh: '中文',
      ja: '日本語',
      es: 'Español',
      hi: 'हिन्दी',
      ar: 'العربية',
      pt: 'Português',
      bn: 'বাংলা',
      ru: 'Русский',
      fr: 'Français',
      ur: 'اردو',
      id: 'Bahasa Indonesia',
      de: 'Deutsch'
    };
    return languageNames[lang] || lang;
  };

  /**
   * All the variables for holding state:
   * gameArray: Holds the current state of the game.
   * initArray: Holds the initial state of the game.
   * solvedArray: Holds the solved position of the game.
   * difficulty: Difficulty level - 'Easy', 'Medium' or 'Hard'
   * numberSelected: The Number selected in the Status section.
   * timeGameStarted: Time the current game was started.
   * mistakesMode: Is Mistakes allowed or not?
   * fastMode: Is Fast Mode enabled?
   * cellSelected: If a game cell is selected by the user, holds the index.
   * history: history of the current game, for 'Undo' purposes.
   * overlay: Is the 'Game Solved' overlay enabled?
   * won: Is the game 'won'?
   */
  let { numberSelected, setNumberSelected,
        gameArray, setGameArray,
        difficulty, setDifficulty,
        timeGameStarted, setTimeGameStarted,
        fastMode, setFastMode,
        cellSelected, setCellSelected,
        initArray, setInitArray,
        setWon } = useSudokuContext();
  let [ mistakesMode, setMistakesMode ] = useState<boolean>(false);
  let [ history, setHistory ] = useState<string[][]>([]);
  let [ solvedArray, setSolvedArray ] = useState<string[]>([]);
  let [ overlay, setOverlay ] = useState<boolean>(false);
  let [ showShareButtons, setShowShareButtons ] = useState(false);

  /**
   * Creates a new game and initializes the state variables.
   */
  function _createNewGame(e?: React.ChangeEvent<HTMLSelectElement>) {
    let [ temporaryInitArray, temporarySolvedArray ] = getUniqueSudoku(difficulty, e);

    setInitArray(temporaryInitArray);
    setGameArray(temporaryInitArray);
    setSolvedArray(temporarySolvedArray);
    setNumberSelected('0');
    setTimeGameStarted(moment());
    setCellSelected(-1);
    setHistory([]);
    setWon(false);
  }

  /**
   * Checks if the game is solved.
   */
  function _isSolved(index: number, value: string) {
    if (gameArray.every((cell: string, cellIndex: number) => {
          if (cellIndex === index)
            return value === solvedArray[cellIndex];
          else
            return cell === solvedArray[cellIndex];
        })) {
      setShowShareButtons(true);
      return true;
    }
    return false;
  }

  /**
   * Fills the cell with the given 'value'
   * Used to Fill / Erase as required.
   */
  function _fillCell(index: number, value: string) {
    if (initArray[index] === '0') {
      // Direct copy results in interesting set of problems, investigate more!
      let tempArray = gameArray.slice();
      let tempHistory = history.slice();

      // Can't use tempArray here, due to Side effect below!!
      tempHistory.push(gameArray.slice());
      setHistory(tempHistory);

      tempArray[index] = value;
      setGameArray(tempArray);

      if (_isSolved(index, value)) {
        setOverlay(true);
        setWon(true);
      }
    }
  }

  /**
   * A 'user fill' will be passed on to the
   * _fillCell function above.
   */
  function _userFillCell(index: number, value: string) {
    if (mistakesMode) {
      if (value === solvedArray[index]) {
        _fillCell(index, value);
      }
      else {
        // TODO: Flash - Mistakes not allowed in Mistakes Mode
      }
    } else {
      _fillCell(index, value);
    }
  }

  /**
   * On Click of 'New Game' link,
   * create a new game.
   */
  function onClickNewGame() {
    _createNewGame();
  }

  /**
   * On Click of a Game cell.
   */
  function onClickCell(indexOfArray: number) {
    if (fastMode && numberSelected !== '0') {
      _userFillCell(indexOfArray, numberSelected);
    }
    setCellSelected(indexOfArray);
  }

  /**
   * On Change Difficulty,
   * 1. Update 'Difficulty' level
   * 2. Create New Game
   */
  function onChangeDifficulty(e: React.ChangeEvent<HTMLSelectElement>) {
    setDifficulty(e.target.value);
    _createNewGame(e);
  }

  /**
   * On Click of Number in Status section,
   * either fill cell or set the number.
   */
  function onClickNumber(number: string) {
    if (fastMode) {
      setNumberSelected(number)
    } else if (cellSelected !== -1) {
      _userFillCell(cellSelected,number);
    }
  }

  /**
   * On Click Undo,
   * try to Undo the latest change.
   */
  function onClickUndo() {
    if(history.length) {
      let tempHistory = history.slice();
      let tempArray = tempHistory.pop();
      setHistory(tempHistory);
      if (tempArray !== undefined)
        setGameArray(tempArray);
    }
  }

  /**
   * On Click Erase,
   * try to delete the cell.
   */
  function onClickErase() {
    if(cellSelected !== -1 && gameArray[cellSelected] !== '0') {
      _fillCell(cellSelected, '0');
    }
  }

  /**
   * On Click Hint,
   * fill the selected cell if its empty or wrong number is filled.
   */
  function onClickHint() {
    if (cellSelected !== -1) {
      _fillCell(cellSelected, solvedArray[cellSelected]);
    }
  }

  /**
   * Toggle Mistakes Mode
   */
  function  onClickMistakesMode() {
    setMistakesMode(!mistakesMode);
  }

  /**
   * Toggle Fast Mode
   */
  function onClickFastMode() {
    if (fastMode) {
      setNumberSelected('0');
    }
    setCellSelected(-1);
    setFastMode(!fastMode);
  }

  /**
   * Close the overlay on Click.
   */
  function onClickOverlay() {
    setOverlay(false);
    _createNewGame();
  }

  /**
   * On load, create a New Game.
   */
  useEffect(() => {
    _createNewGame();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shareUrl = window.location.href;
  const shareTitle = t('shareMessage', { time: moment().diff(timeGameStarted, 'seconds') });

  return (
    <div dir={['ar', 'ur'].includes(i18n.language) ? 'rtl' : 'ltr'}>
      <div className={overlay ? "container blur" : "container"}>
        <Header onClick={onClickNewGame} />
        <div className="innercontainer">
          <GameSection
            onClick={(indexOfArray: number) => onClickCell(indexOfArray)}
          />
          <StatusSection
            onClickNumber={(number: string) => onClickNumber(number)}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChangeDifficulty(e)}
            onClickUndo={onClickUndo}
            onClickErase={onClickErase}
            onClickHint={onClickHint}
            onClickMistakesMode={onClickMistakesMode}
            onClickFastMode={onClickFastMode}
          />
        </div>
        <div className="language-selector">
          {['en', 'zh', 'ja', 'es', 'hi', 'ar', 'pt', 'bn', 'ru', 'fr', 'ur', 'id', 'de'].map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={i18n.language === lang ? 'active' : ''}
            >
              {getLanguageName(lang)}
            </button>
          ))}
        </div>
        <SocialShare /> {/* 使用 SocialShare 组件 */}
        <IntroduceSudoku />
        <Footer />

      </div>
      <div className={overlay ? "overlay overlay--visible" : "overlay"} onClick={onClickOverlay}>
        <h2 className="overlay__text">
          You <span className="overlay__textspan1">solved</span> <span className="overlay__textspan2">it!</span>
        </h2>
      </div>
      {showShareButtons && (
        <div className="share-buttons">
          <h3>{t('shareYourSuccess')}</h3>
          {/* 现有的 react-share 组件 */}
          <FacebookShareButton url={shareUrl} quote={shareTitle}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={shareTitle}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton url={shareUrl} title={shareTitle}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <LinkedinShareButton url={shareUrl} title={shareTitle}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
      )}
    </div>
  );
}
