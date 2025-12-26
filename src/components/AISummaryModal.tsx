import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateAISummary, downloadAnalysis } from '../services';
import './AISummaryModal.css';

interface AISummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  chartTitle: string;
  chartSubtitle: string;
  dataContext: string;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
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

export function AISummaryModal({
  isOpen,
  onClose,
  chartTitle,
  chartSubtitle,
  dataContext
}: AISummaryModalProps) {
  const [summary, setSummary] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && !summary && !isLoading) {
      fetchSummary();
    }
  }, [isOpen]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSummary('');
      setError(null);
    }
  }, [isOpen]);

  const fetchSummary = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await generateAISummary(chartTitle, chartSubtitle, dataContext);
      setSummary(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate summary');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    try {
      downloadAnalysis();
    } catch (err) {
      setError('Failed to download analysis file');
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="ai-modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleOverlayClick}
        >
          <motion.div
            className="ai-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="ai-modal__header">
              <div className="ai-modal__title-group">
                <span className="ai-modal__badge">
                  <span className="ai-modal__badge-icon">✦</span>
                  AI Analysis
                </span>
                <h2 id="modal-title" className="ai-modal__title">
                  {chartTitle}
                </h2>
                <p className="ai-modal__subtitle">{chartSubtitle}</p>
              </div>
              <button 
                className="ai-modal__close"
                onClick={onClose}
                aria-label="Close modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="ai-modal__content">
              {isLoading && (
                <div className="ai-modal__loading">
                  <div className="ai-modal__spinner" />
                  <p>Generating AI analysis...</p>
                </div>
              )}

              {error && (
                <div className="ai-modal__error">
                  <span className="ai-modal__error-icon">⚠</span>
                  <p>{error}</p>
                  <button 
                    className="ai-modal__retry-btn"
                    onClick={fetchSummary}
                  >
                    Try Again
                  </button>
                </div>
              )}

              {summary && !isLoading && !error && (
                <div className="ai-modal__summary">
                  {summary.split('\n').map((paragraph, index) => (
                    <p key={index} className="ai-modal__paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="ai-modal__footer">
              <button 
                className="ai-modal__download-btn"
                onClick={handleDownload}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download Full Analysis
              </button>
              <button 
                className="ai-modal__close-btn"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


