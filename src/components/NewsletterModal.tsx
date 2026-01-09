import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './NewsletterModal.css';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: { duration: 0.2 }
  }
};

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Close modal after showing success
    setTimeout(() => {
      onClose();
      // Reset state after closing
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 300);
    }, 2000);
  };

  const handleSkip = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="newsletter-modal__backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleSkip}
        >
          <motion.div 
            className="newsletter-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={e => e.stopPropagation()}
          >
            {!isSubmitted ? (
              <>
                <div className="newsletter-modal__header">
                  <div className="newsletter-modal__icon">✉️</div>
                  <h2 className="newsletter-modal__title">Stay in the loop</h2>
                  <p className="newsletter-modal__subtitle">
                    Get the latest CX insights delivered to your inbox. No spam, just research that matters.
                  </p>
                </div>
                
                <form className="newsletter-modal__form" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="newsletter-modal__input"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="newsletter-modal__submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="newsletter-modal__loading">Subscribing...</span>
                    ) : (
                      'Subscribe'
                    )}
                  </motion.button>
                </form>
                
                <motion.button
                  className="newsletter-modal__skip"
                  onClick={handleSkip}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Skip for now
                </motion.button>
              </>
            ) : (
              <motion.div 
                className="newsletter-modal__success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="newsletter-modal__success-icon">🎉</div>
                <h3>You're in!</h3>
                <p>Thanks for subscribing. We'll keep you posted.</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


