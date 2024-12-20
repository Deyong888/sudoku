import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 为 window.dataLayer 添加类型定义
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// 声明全局 dataLayer 类型
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

const GoogleAnalytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (GA_TRACKING_ID) {
      // 加载 Google Analytics 脚本
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // 初始化 Google Analytics
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(...args: any[]) {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_TRACKING_ID);
    }

    if (typeof window.gtag === 'function') {
      window.gtag('config', process.env.REACT_APP_GA_TRACKING_ID as string, {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
