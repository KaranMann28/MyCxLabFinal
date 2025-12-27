import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NewsletterModal } from './NewsletterModal';
import './ScrollRevealLogo.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealLogoProps {
  isUnlocked: boolean;
  onUnlock: () => void;
}

export function ScrollRevealLogo({ isUnlocked, onUnlock }: ScrollRevealLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !logoRef.current || !glowRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      // Create timeline for the reveal animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom 30%",
          scrub: 1,
        }
      });

      // Glow effect expands and fades
      tl.fromTo(glowRef.current, 
        { 
          scale: 0,
          opacity: 0,
        },
        { 
          scale: 2.5,
          opacity: 0.6,
          duration: 1,
          ease: "power2.out"
        }
      );

      // Logo scales up and rotates in
      tl.fromTo(logoRef.current,
        {
          scale: 0,
          rotation: -180,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)"
        },
        "-=0.8"
      );

      // Text fades in
      tl.fromTo(textRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        },
        "-=0.3"
      );

      // Glow fades out at the end
      tl.to(glowRef.current, {
        opacity: 0,
        scale: 3,
        duration: 0.5
      }, "-=0.2");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleLogoClick = () => {
    if (!isUnlocked) {
      // Show newsletter popup when unlocking
      setShowNewsletter(true);
    }
    onUnlock();
  };

  const handleNewsletterClose = () => {
    setShowNewsletter(false);
  };

  return (
    <div className="scroll-reveal" ref={containerRef}>
      <NewsletterModal isOpen={showNewsletter} onClose={handleNewsletterClose} />
      <div className="scroll-reveal__glow" ref={glowRef} />
      
      <motion.div 
        className={`scroll-reveal__logo ${!isUnlocked ? 'scroll-reveal__logo--clickable' : 'scroll-reveal__logo--unlocked'}`}
        ref={logoRef}
        onClick={handleLogoClick}
        whileHover={{ scale: 1.15, rotate: isUnlocked ? -5 : 5 }}
        whileTap={{ scale: 0.95 }}
        style={{ cursor: 'pointer' }}
      >
        <svg 
          width="140" 
          height="150" 
          viewBox="0 0 65 69" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M56.8219 17.6032H47.38V8.06662C47.38 5.2675 45.135 3 42.3637 3H9.01633C6.245 3 4 5.2675 4 8.06662V56.3514C4 59.1505 6.245 61.418 9.01633 61.418H52.1976L56.8702 66.1375C57.418 66.6908 58.1538 67 58.9272 67C60.5331 67 61.8382 65.6872 61.8382 64.0598V22.6698C61.8382 19.8707 59.5932 17.6032 56.8219 17.6032ZM57.0206 56.5467H8.81761V7.86591H42.557V17.6032H23.4745C20.7032 17.6032 18.4582 19.8707 18.4582 22.6698V41.7483C18.4582 44.5474 20.7032 46.8149 23.4745 46.8149H42.3637C45.135 46.8149 47.38 44.5474 47.38 41.7483V22.4745H57.0206V56.5521V56.5467ZM42.5624 22.4691V41.9436H23.2812V22.4691H42.5624Z" 
            fill="url(#logoGradient)"
          />
          <defs>
            <linearGradient id="logoGradient" x1="4" y1="3" x2="61.8382" y2="67" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E8826E" />
              <stop offset="0.5" stopColor="#FF9780" />
              <stop offset="1" stopColor="#F5A38A" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Pulse ring animation when not unlocked */}
        {!isUnlocked && (
          <>
            <motion.div 
              className="scroll-reveal__pulse-ring"
              animate={{ 
                scale: [1, 1.8, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            <motion.div 
              className="scroll-reveal__pulse-ring scroll-reveal__pulse-ring--delayed"
              animate={{ 
                scale: [1, 1.8, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.5
              }}
            />
          </>
        )}
      </motion.div>
      
      <div className="scroll-reveal__text" ref={textRef}>
        <span className="scroll-reveal__welcome">Welcome to</span>
        <span className="scroll-reveal__title">The Research</span>
      </div>
      
      {/* Click to unlock prompt */}
      {!isUnlocked && (
        <motion.div 
          className="scroll-reveal__unlock-prompt"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="scroll-reveal__unlock-text"
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="scroll-reveal__unlock-icon">👆</span>
            <span>Click the logo to unlock</span>
          </motion.div>
        </motion.div>
      )}
      
      {/* Unlocked indicator */}
      {isUnlocked && (
        <motion.div 
          className="scroll-reveal__unlocked"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="scroll-reveal__unlocked-icon">✓</span>
          <span>Research Unlocked — Click to lock</span>
        </motion.div>
      )}
    </div>
  );
}
