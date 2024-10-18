import React, { createContext, useContext, useState, ReactNode } from 'react';
import moment from 'moment';

// 定义上下文类型
type SudokuContextType = {
  numberSelected: string,
  setNumberSelected: React.Dispatch<React.SetStateAction<string>>,
  gameArray: string[],
  setGameArray: React.Dispatch<React.SetStateAction<string[]>>,
  difficulty: string,
  setDifficulty: React.Dispatch<React.SetStateAction<string>>,
  timeGameStarted: moment.Moment,
  setTimeGameStarted: React.Dispatch<React.SetStateAction<moment.Moment>>,
  fastMode: boolean,
  setFastMode: React.Dispatch<React.SetStateAction<boolean>>,
  cellSelected: number,
  setCellSelected: React.Dispatch<React.SetStateAction<number>>,
  initArray: string[],
  setInitArray: React.Dispatch<React.SetStateAction<string[]>>,
  won: boolean,
  setWon: React.Dispatch<React.SetStateAction<boolean>>
};

const SudokuContext = createContext<SudokuContextType | undefined>(undefined);

type SudokuProviderProps = {
  children: ReactNode;
};

export const SudokuProvider: React.FC<SudokuProviderProps> = ({ children }) => {
  let [ numberSelected, setNumberSelected ] = useState<string>('0');
  let [ gameArray, setGameArray ] = useState<string[]>([]);
  let [ difficulty,setDifficulty ] = useState<string>('Easy');
  let [ timeGameStarted, setTimeGameStarted ] = useState<moment.Moment>(moment());
  let [ fastMode, setFastMode ] = useState<boolean>(false);
  let [ cellSelected, setCellSelected ] = useState<number>(-1);
  let [ initArray, setInitArray ] = useState<string[]>([]);
  let [ won, setWon ] = useState<boolean>(false);

  return (
    <SudokuContext.Provider value={
      {
        numberSelected, setNumberSelected,
        gameArray, setGameArray,
        difficulty,setDifficulty,
        timeGameStarted, setTimeGameStarted,
        fastMode, setFastMode,
        cellSelected, setCellSelected,
        initArray, setInitArray,
        won, setWon
      }
    }>
      {children}
    </SudokuContext.Provider>
  );
};

export const useSudokuContext = () => {
  const context = useContext(SudokuContext);
  if (context === undefined) {
    throw new Error('useSudokuContext must be used within a SudokuProvider');
  }
  return context;
};

// Usage
// const { numberSelected, setNumberSelected } = useNumberValue();
