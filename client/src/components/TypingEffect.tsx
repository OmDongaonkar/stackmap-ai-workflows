import { useState, useEffect } from 'react';

interface TypingEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypingEffect = ({ 
  phrases, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000 
}: TypingEffectProps) => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        return;
      }
      
      const timer = setTimeout(() => {
        setCurrentText(phrase.substring(0, currentText.length - 1));
      }, deletingSpeed);
      
      return () => clearTimeout(timer);
    } else {
      if (currentText === phrase) {
        setIsPaused(true);
        return;
      }
      
      const timer = setTimeout(() => {
        setCurrentText(phrase.substring(0, currentText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timer);
    }
  }, [currentText, currentPhrase, isDeleting, isPaused, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

export default TypingEffect;