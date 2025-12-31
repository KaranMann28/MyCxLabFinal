import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './ShareModal.css';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  chartTitle: string;
  chartSubtitle: string;
  aiSummary: string;
  chartRef: React.RefObject<HTMLDivElement>;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 25 }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 20,
    transition: { duration: 0.2 }
  }
};

export function ShareModal({
  isOpen,
  onClose,
  chartTitle,
  chartSubtitle,
  aiSummary,
  chartRef,
}: ShareModalProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate email
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // Generate PDF
      if (chartRef.current) {
        const canvas = await html2canvas(chartRef.current, {
          scale: 2,
          backgroundColor: '#ffffff',
          logging: false,
          useCORS: true,
        });

        const imgWidth = 190;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        // Add header
        pdf.setFillColor(232, 130, 110);
        pdf.rect(0, 0, 210, 25, 'F');
        
        // Add Gorgias branding text
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.text('CX Lab Research', 15, 12);
        pdf.setFontSize(8);
        pdf.setFont('helvetica', 'normal');
        pdf.text('Powered by Gorgias', 15, 18);
        
        // Add title
        pdf.setTextColor(26, 26, 26);
        pdf.setFontSize(20);
        pdf.setFont('helvetica', 'bold');
        pdf.text(chartTitle, 15, 40);
        
        // Add subtitle
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(100, 100, 100);
        pdf.text(chartSubtitle, 15, 50);
        
        // Add chart image
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 10, 60, imgWidth, imgHeight);
        
        // Add AI Summary section
        const summaryY = 70 + imgHeight;
        
        pdf.setFillColor(248, 248, 248);
        pdf.roundedRect(10, summaryY, 190, 60, 3, 3, 'F');
        
        pdf.setTextColor(232, 130, 110);
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'bold');
        pdf.text('✦ Quick Take', 15, summaryY + 10);
        
        pdf.setTextColor(60, 60, 60);
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        
        // Word wrap the summary
        const splitSummary = pdf.splitTextToSize(aiSummary, 180);
        pdf.text(splitSummary, 15, summaryY + 20);
        
        // Add footer
        const footerY = 280;
        pdf.setDrawColor(230, 230, 230);
        pdf.line(10, footerY - 5, 200, footerY - 5);
        
        pdf.setTextColor(150, 150, 150);
        pdf.setFontSize(8);
        pdf.text('Generated from CX Lab | yuw-nu.vercel.app', 15, footerY);
        pdf.text(new Date().toLocaleDateString(), 180, footerY);
        
        // Download the PDF
        pdf.save(`CX-Lab-${chartTitle.replace(/\s+/g, '-')}.pdf`);
        
        // Store email (in production, send to backend)
        console.log('Email captured:', email);
        
        // Show success state
        setIsSuccess(true);
        
        // Reset after delay
        setTimeout(() => {
          setIsSuccess(false);
          setEmail('');
          onClose();
        }, 2000);
      }
    } catch (err) {
      console.error('Error generating PDF:', err);
      setError('Failed to generate PDF. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      setEmail('');
      setError('');
      setIsSuccess(false);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="share-modal__overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleClose}
        >
          <motion.div 
            className="share-modal"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="share-modal__close"
              onClick={handleClose}
              disabled={isLoading}
            >
              ✕
            </button>

            {isSuccess ? (
              <div className="share-modal__success">
                <motion.div 
                  className="share-modal__success-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  ✓
                </motion.div>
                <h3>PDF Downloaded!</h3>
                <p>Check your downloads folder</p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="share-modal__header">
                  <div className="share-modal__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <polyline points="16 6 12 2 8 6" />
                      <line x1="12" y1="2" x2="12" y2="15" />
                    </svg>
                  </div>
                  <h2 className="share-modal__title">Share This Insight</h2>
                  <p className="share-modal__subtitle">
                    Get a PDF with the chart and AI summary
                  </p>
                </div>

                {/* Preview */}
                <div className="share-modal__preview">
                  <div className="share-modal__preview-label">You'll receive:</div>
                  <ul className="share-modal__preview-list">
                    <li>📊 High-resolution chart</li>
                    <li>✦ AI-generated quick take</li>
                    <li>🔬 CX Lab branding</li>
                  </ul>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="share-modal__form">
                  <div className="share-modal__input-wrapper">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="share-modal__input"
                      disabled={isLoading}
                      autoFocus
                    />
                    {error && <span className="share-modal__error">{error}</span>}
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="share-modal__submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <span className="share-modal__loading">
                        <span className="share-modal__spinner" />
                        Generating PDF...
                      </span>
                    ) : (
                      'Download PDF'
                    )}
                  </motion.button>
                </form>

                {/* Footer note */}
                <p className="share-modal__note">
                  Your email is used to track downloads. We won't spam you.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

