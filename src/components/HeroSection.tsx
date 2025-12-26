import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { downloadReportSimple } from '../utils/downloadReport';
import { GorgiasLogo } from './GorgiasLogo';
import './HeroSection.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const navVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1],
      delay: 0.1
    }
  }
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

const pulseVariants = {
  initial: { scale: 1, opacity: 0.6 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.6, 0.8, 0.6],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

const shimmerVariants = {
  initial: { backgroundPosition: '200% 0' },
  animate: {
    backgroundPosition: ['-200% 0', '200% 0'],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

export function HeroSection() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  
  const handleDownload = () => {
    downloadReportSimple(language);
  };
  
  return (
    <section className="hero">
      <div className="hero__bg" />
      
      {/* Animated background elements */}
      <div className="hero__bg-shapes">
        <motion.div 
          className="hero__shape hero__shape--1"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div 
          className="hero__shape hero__shape--2"
          variants={pulseVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div 
          className="hero__shape hero__shape--3"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 1.5
          }}
        />
        {/* Additional floating orb */}
        <motion.div 
          className="hero__shape hero__shape--4"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 2
          }}
        />
      </div>
      
      <div className="container">
        <motion.nav 
          className="hero__nav"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a 
            href="https://gorgias.com"
            className="hero__logo-link"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <GorgiasLogo size="md" showText={true} animated={true} />
          </motion.a>
          
          <div className="hero__controls">
            {/* Language Toggle */}
            <div className="hero__lang-toggle">
              <motion.button
                className={`hero__lang-btn ${language === 'en' ? 'hero__lang-btn--active' : ''}`}
                onClick={() => setLanguage('en')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EN
              </motion.button>
              <motion.button
                className={`hero__lang-btn ${language === 'fr' ? 'hero__lang-btn--active' : ''}`}
                onClick={() => setLanguage('fr')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                FR
              </motion.button>
            </div>
            
            {/* Theme Toggle */}
            <motion.button
              className="hero__theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </motion.span>
            </motion.button>
            
            <motion.a 
              href="#methodology" 
              className="hero__nav-link"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {t('nav.methodology')}
            </motion.a>
          </div>
        </motion.nav>
        
        <motion.div 
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="hero__title-wrapper"
            variants={itemVariants}
          >
            <motion.h1 
              className="hero__title"
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.div 
              className="hero__title-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
          
          <motion.p 
            className="hero__subtitle"
            variants={itemVariants}
          >
            {t('hero.subtitle1')}<br />
            {t('hero.subtitle2')}
          </motion.p>
          
          <motion.p
            className="hero__lead"
            variants={itemVariants}
          >
            {t('hero.lead')}
          </motion.p>
          
          <motion.div 
            className="hero__actions"
            variants={itemVariants}
          >
            <motion.button
              className="hero__download-btn"
              onClick={handleDownload}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: '0 20px 40px -10px rgba(232, 130, 110, 0.4)'
              }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <motion.svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                whileHover={{ y: 2 }}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.3 }}
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </motion.svg>
              {t('hero.downloadReport')}
            </motion.button>
            
            <motion.a
              href="#insights"
              className="hero__explore-btn"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                backgroundColor: 'var(--bg-subtle)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              {t('hero.exploreResearch')}
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="hero__scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="hero__scroll-mouse"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="hero__scroll-wheel"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
        <motion.span 
          className="hero__scroll-text"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {t('hero.scrollToExplore')}
        </motion.span>
      </motion.div>
    </section>
  );
}
