'use client';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 300);
    };

    const throttledToggleVisibility = throttle(toggleVisibility, 100);
    window.addEventListener('scroll', throttledToggleVisibility);
    
    return () => window.removeEventListener('scroll', throttledToggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  };

  return (
    <div 
      className={`${styles.scrollToTop} ${isVisible ? styles.visible : styles.hidden}`}
      onClick={scrollToTop}
      role="button"
      tabIndex={0}
      aria-label="Scroll to top"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          scrollToTop();
        }
      }}
    >
      <div className={styles.buttonContainer}>
        <div 
          className={styles.progressRing}
          style={{ '--progress': `${scrollProgress}%` }}
        >
          <svg className={styles.progressSvg} viewBox="0 0 36 36">
            <path
              className={styles.progressBackground}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className={styles.progressBar}
              strokeDasharray={`${scrollProgress}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
        <div className={styles.iconContainer}>
          <FaArrowUp className={styles.icon} />
        </div>
      </div>
      <div className={styles.tooltip}>
        Scroll to top
      </div>
    </div>
  );
}