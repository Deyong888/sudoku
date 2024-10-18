import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <h1>{t('about.title')}</h1>
      <p>{t('about.description')}</p>
    </div>
  );
};

export default About;
