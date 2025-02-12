import { Variants } from "motion/react";

export const animation = {
    animate: {
      opacity: [0.3,1],
      // translateY:[15,0],
      // scale:[0.9,1],
      filter: ["blur(2px)","blur(0px)"],
      transition: {
        duration: 0.3, // Duration of the animation to full opacity
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3, // Duration of the animation to fade out
      },
    },
  };    
export const animation2 = {
    animate: {
      opacity: [0,1],
      filter: ["blur(1px)","blur(0px)"],
      transition: {
        duration: 0.3, // Duration of the animation to full opacity
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3, // Duration of the animation to fade out
      },
    },
  };    
export const animation22 = {
    animate: {
      opacity: [0,1],
      filter: ["blur(1px)","blur(0px)"],
      transition: {
        duration: 0.3, // Duration of the animation to full opacity
        delay: 0.3
      },
      
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3, // Duration of the animation to fade out
      },
    },
  };    

  export const pulsatingAnimation: Variants = {
    initial: {
      opacity: 0.6
    },
    animate: { 
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };