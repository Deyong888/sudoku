import React from 'react';
import { useTranslation } from 'react-i18next';

export const IntroduceSudoku: React.FC = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="introduce" dir={['ar', 'ur'].includes(i18n.language) ? 'rtl' : 'ltr'}>
            <h1>{t('introduceSudoku.title')}</h1>
            <h2>{t('introduceSudoku.whatIsSudoku')}</h2>
            <p>{t('introduceSudoku.answer')}</p>
            <h2>{t('introduceSudoku.ruleOfSudoku')}</h2>
            <ul>
                <li>{t('introduceSudoku.rule1')}</li>
                <li>{t('introduceSudoku.rule2')}</li>
                <li>{t('introduceSudoku.rule3')}</li>
                <li>{t('introduceSudoku.rule4')}</li>
                <li>{t('introduceSudoku.rule5')}</li>
            </ul>
            <h2>{t('introduceSudoku.howToPlay')}</h2>
            <p>{t('introduceSudoku.howToPlayAnswer1')}</p>
            <p>{t('introduceSudoku.howToPlayAnswer2')}</p>
            <p>{t('introduceSudoku.howToPlayAnswer3')}</p>
            <p>{t('introduceSudoku.howToPlayAnswer4')}</p>
            <p>{t('introduceSudoku.howToPlayAnswer4.1')}</p>
            <p>{t('introduceSudoku.howToPlayAnswer4.2')}</p>
            <p>{t('introduceSudoku.howToPlayAnswer4.3')}</p>
            <p>{t('introduceSudoku.howToPlayAnswer5')}</p>
            <h2>{t('introduceSudoku.additionalInfo')}</h2>
            <p>{t('introduceSudoku.additionalInfoAnswer1')}</p>
            <p>{t('introduceSudoku.additionalInfoAnswer2')}</p>
            <p>{t('introduceSudoku.additionalInfoAnswer3')}</p>
            <p>{t('introduceSudoku.additionalInfoAnswer4')}</p>
            <p>{t('introduceSudoku.additionalInfoAnswer5')}</p>
        </div>
    );
};
