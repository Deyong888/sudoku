import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Sudoku Game. {t('footer.allRightsReserved')}</p>
        <nav>
          <Link to="/about">{t('footer.about')}</Link>
          <Link to="/policy">{t('footer.policy')}</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
