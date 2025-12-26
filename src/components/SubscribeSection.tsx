import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './SubscribeSection.css';

export function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <motion.section 
      className="subscribe"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div 
          className="subscribe__card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div 
            className="subscribe__content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="subscribe__title">{t('subscribe.title')}</h2>
            <p className="subscribe__text">
              {t('subscribe.subtitle')}
            </p>
          </motion.div>
          
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div 
                className="subscribe__success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <motion.span 
                  className="subscribe__success-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                >
                  ✓
                </motion.span>
                <span>{t('subscribe.success')}</span>
              </motion.div>
            ) : (
              <motion.form 
                className="subscribe__form" 
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.4 }}
              >
                <input
                  type="email"
                  placeholder={t('subscribe.placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="subscribe__input"
                  required
                />
                <motion.button 
                  type="submit" 
                  className="subscribe__btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('subscribe.button')}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
          
          <motion.p 
            className="subscribe__disclaimer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {t('subscribe.privacy')}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
