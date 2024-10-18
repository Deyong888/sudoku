import React from 'react';
import { useTranslation } from 'react-i18next';

const Policy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="policy-page">
      <h1>{t('policy.title')}</h1>
      <p>{t('policy.description')}</p>
    </div>
  );
};

export default Policy;
