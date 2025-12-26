import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { downloadAnalysis } from '../services';
import './AISummaryModal.css';

interface AISummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  chartTitle: string;
  chartSubtitle: string;
  dataContext: string;
}

// Pre-written AI summaries - simple, humanized, and engaging
const hardcodedSummaries: Record<string, string> = {
  "Ecommerce AI Index": `Here's what's really happening in ecommerce right now: AI isn't just a buzzword anymore—it's becoming the way brands actually talk to their customers.

**The Big Picture**
We looked at over 600 million support conversations, and the trend is clear. AI went from handling almost nothing in early 2024 to being involved in over 11% of all customer interactions by late 2025. That's a massive shift in just two years.

**What This Means for You**
• Brands using AI aren't replacing their teams—they're supercharging them
• The sweet spot? AI handles the routine stuff so humans can focus on what matters
• Companies that wait too long risk falling behind on response times

**The Bottom Line**
AI in customer service isn't about robots taking over. It's about giving your team superpowers. The brands winning right now are the ones treating AI as a helpful teammate, not a replacement.`,

  "Adoption Momentum": `Something fascinating is happening with AI adoption: once brands really commit to it, they never go back.

**The Surprising Truth**
We tracked hundreds of ecommerce brands using AI in their support, and here's what we found—100% retention among serious adopters. Zero brands that truly integrated AI have walked away from it.

**Why This Matters**
• This isn't a fad or experiment—it's a fundamental shift in how support works
• Mid-market brands ($3-20M) are leading the charge—they're big enough to benefit, nimble enough to adapt
• The question isn't "should we try AI?" anymore—it's "how fast can we get started?"

**What We're Seeing**
Brands don't test AI and decide it doesn't work. They test it, see the results, and then expand everywhere they can. That's the pattern, over and over again.`,

  "The Automation Ceiling": `Here's something important that most AI vendors won't tell you: there's a ceiling to what AI should handle, and the smartest brands have figured out exactly where it is.

**The Real Numbers**
• Order status, shipping questions? AI crushes these—88-92% automation rates
• Complaints and refund disputes? Much lower—23-41% at best
• This pattern holds true across every brand size and industry

**Why This Actually Makes Sense**
When someone's frustrated or confused, they don't want a chatbot—they want a human who gets it. That's not AI failing; that's just understanding what customers actually need.

**The Winning Strategy**
The brands getting the best results aren't trying to automate everything. They're being smart about it:
→ Let AI handle the straightforward stuff confidently
→ Use AI to gather info and triage the complex issues  
→ Keep your best people free for conversations that need empathy

That's not a limitation—that's just good customer experience design.`
};

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
}: AISummaryModalProps) {
  const [summary, setSummary] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen && !summary) {
      loadSummary();
    }
  }, [isOpen]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSummary('');
    }
  }, [isOpen]);

  const loadSummary = () => {
    setIsLoading(true);
    
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      const hardcodedSummary = hardcodedSummaries[chartTitle] || 
        `AI is transforming how this aspect of customer service works. The data shows clear patterns that can help you make better decisions for your business.`;
      setSummary(hardcodedSummary);
      setIsLoading(false);
    }, 800);
  };

  const handleDownload = () => {
    try {
      downloadAnalysis();
    } catch {
      console.error('Failed to download analysis file');
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

  // Format summary with markdown-like styling
  const formatSummary = (text: string) => {
    return text.split('\n').map((line, index) => {
      // Bold headers
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <h3 key={index} className="ai-modal__section-title">
            {line.replace(/\*\*/g, '')}
          </h3>
        );
      }
      // Bullet points
      if (line.startsWith('•') || line.startsWith('→')) {
        return (
          <p key={index} className="ai-modal__bullet">
            {line}
          </p>
        );
      }
      // Regular paragraphs
      if (line.trim()) {
        return (
          <p key={index} className="ai-modal__paragraph">
            {line}
          </p>
        );
      }
      return null;
    });
  };

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
                  <p>Analyzing the data...</p>
                </div>
              )}

              {summary && !isLoading && (
                <div className="ai-modal__summary">
                  {formatSummary(summary)}
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
