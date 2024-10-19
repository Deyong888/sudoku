import React, { useEffect } from 'react';

const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

const GoogleAnalytics: React.FC = () => {
  useEffect(() => {
    if (GA_TRACKING_ID) {
      // 加载 Google Analytics 脚本
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // 初始化 Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID);
    }
  }, []);

  return null; // 这个组件不渲染任何内容
};

export default GoogleAnalytics;