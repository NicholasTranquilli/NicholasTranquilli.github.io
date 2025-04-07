import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Added for triggering animation on viewport visibility

interface TypeAnimationProps {
  children?: React.ReactNode;
  text: string;
  typingSpeed: number; // Speed of typing (ms per letter)
  className?: string;
  disableCursorOnFinish?: boolean;
  startTyping: boolean; // Trigger for typing animation
  noBlink: boolean; // Disable cursor blinking
  onFinish: () => void; // Notify when typing finishes
}

export default function TypeAnimation(props: TypeAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [cursorVisible, setCursorVisible] = useState<boolean>(false);
  const [cursorActive, setCursorActive] = useState<boolean>(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  useEffect(() => {
    if (inView && props.startTyping) {
      setCursorActive(true);
      setCursorVisible(true);
      let index: number = -1;
      const interval = setInterval(() => {
        if (index < props.text.length - 1) {
          index = index + 1;
          setDisplayedText((prev) => prev + props.text[index]);
        } else {
          if (props.disableCursorOnFinish) {
            setCursorActive(false);
            setCursorVisible(false); // Immediately hide cursor when typing finishes
          }
          clearInterval(interval);
          props.onFinish();
        }
      }, props.typingSpeed);
  
      // Remove the separate cursorInterval as it's no longer needed.
      return () => {
        clearInterval(interval);
      };
    }
  }, [
    props.text,
    props.typingSpeed,
    inView,
    props.startTyping,
    props.disableCursorOnFinish,
    props.onFinish,
  ]);
  
  return (
    <motion.span
      ref={ref}
      className={`${props.className}`}
      animate={{ opacity: 1 }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayedText.length > 0 && props.children}
      {displayedText}
      {cursorVisible && (
        <motion.span
          style={{
            position: "absolute",
            width: "8px",
            height: "20px",
            backgroundColor: "#FFFFFF",
            animation: (props.noBlink) ? "none" : "blink 1.0s step-end infinite",
          }}
        />
      )}
    </motion.span>
  );
}

interface ConsoleTextProps {
  children?: React.ReactNode;
  disableCursorOnFinish? : boolean
  text: string;
  typingSpeed?: number;
  startTyping?: boolean;
  noBlink?: boolean;
  onFinish?: () => void;
}

export function ConsoleText(props: ConsoleTextProps) {
  function fillerOnFinish(): void {
  }

  return (
    <TypeAnimation
      className="font-sans text-white"
      disableCursorOnFinish={typeof props.disableCursorOnFinish != "undefined" ? props.disableCursorOnFinish : true}
      text={props.text}
      typingSpeed={typeof props.typingSpeed != "undefined" ? props.typingSpeed : 10}
      startTyping={typeof props.startTyping != "undefined" ? props.startTyping : true} // Pass startTyping prop
      onFinish={typeof props.onFinish != "undefined" ? props.onFinish : fillerOnFinish} // Pass onFinish prop
      noBlink={typeof props.noBlink != "undefined" ? props.noBlink : false}
    >
      {props.children}
    </TypeAnimation>
  );
}
