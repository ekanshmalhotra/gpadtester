'use client';
import { useEffect, useState, useCallback } from 'react';
import { GrGamepad } from 'react-icons/gr';
import { FaGamepad, FaTools, FaQuestionCircle, FaTimes, FaHome } from 'react-icons/fa';
import styles from './Navbar.module.css';
import Link from 'next/link';

// Throttle function for performance optimization
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

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items configuration
  const navItems = [
    { id: 'home', icon: FaHome, label: 'Home' },
    { id: 'tester', icon: FaGamepad, label: 'Tester' },
    { id: 'info', icon: FaTools, label: 'Guide' },
    { id: 'faq', icon: FaQuestionCircle, label: 'FAQ' }
  ];

  const handleScroll = useCallback(() => {
    const sections = ['home', 'tester', 'info', 'faq'];
    const scrollPosition = window.scrollY + 100;
    
    // Update scrolled state for navbar styling
    setIsScrolled(window.scrollY > 20);
    
    // Find active section
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  // Throttled scroll handler for better performance
  const throttledHandleScroll = useCallback(
    throttle(handleScroll, 16), // ~60fps
    [handleScroll]
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Set initial state
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [throttledHandleScroll, handleScroll]);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && 
          !event.target.closest(`.${styles.navbar}`) && 
          !event.target.closest(`.${styles.mobileSidebar}`)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className={styles.mobileOverlay}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Navbar */}
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          {/* Logo Section */}
          <div className={styles.logoSection}>
            <div className={styles.logoIconWrapper}>
              <GrGamepad className={styles.logoIcon} />
            </div>
            <Link href="/">
            <button
              className={styles.logoText}
            >
              <span className={styles.logoMain}>GamePad</span>
              <span className={styles.logoSub}>Tester</span>
            </button>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className={styles.desktopNav}>
            {navItems.map(({ id, icon: Icon, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`${styles.navLink} ${activeSection === id ? styles.active : ''}`}
                >
                  <Icon className={styles.navIcon} />
                  <span className={styles.navLabel}>{label}</span>
                  <div className={styles.navIndicator} />
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`${styles.mobileSidebar} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarLogo}>
            <GrGamepad className={styles.sidebarLogoIcon} />
            <div className={styles.sidebarLogoText}>
              <span className={styles.sidebarLogoMain}>GamePad</span>
              <span className={styles.sidebarLogoSub}>Tester</span>
            </div>
          </div>
          <button
            className={styles.sidebarCloseBtn}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <FaTimes />
          </button>
        </div>

        <nav className={styles.sidebarNav}>
          {navItems.map(({ id, icon: Icon, label }, index) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`${styles.sidebarLink} ${activeSection === id ? styles.active : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.sidebarLinkContent}>
                <Icon className={styles.sidebarIcon} />
                <span className={styles.sidebarLabel}>{label}</span>
              </div>
              <div className={styles.sidebarLinkArrow}>→</div>
            </button>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.sidebarFooterText}>
            Test your gamepad with ease
          </div>
        </div>
      </div>
    </>
  );
}