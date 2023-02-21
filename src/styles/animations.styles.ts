import { keyframes } from '@mui/material';


export const animationsFlipRightStyle = keyframes`
        from {
          transform-style: preserve-3d;
          transform: rotateY( 180deg);
        }
        to {
          transform-style: preserve-3d;
          transform: rotateY( 0deg);
        }
      `;
export const animationsFlipLeftStyle = keyframes`
        from {
          transform: rotateY( -180deg);
        }
        to {
          transform: rotateY( 0deg);
        }
      `;

export const animationsOpacitytStyle = keyframes`
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
        
    `;

export const animationsCardUpStyle = keyframes`
      from {
        transform: 'translateY(0.0em);'
      }

      to {
        transform: 'translateY(-0.50em);'
      }
      
  `;
