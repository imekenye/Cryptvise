import React from 'react';

function AnimatedWave({ upsidedown }) {
  return (
    <>
      <svg
        width="100%"
        height="100"
        viewBox="0 0 100% 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill={upsidedown ? `#54D3EE` : `#ECECEC`} opacity="0.5">
          <animate
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur="10s"
            values={`M0 198H1284V0L1051.5 76C834 126 643.047 114.4 475.478 60C307.909 5.60001 88.6721 21.3333 0 36V198Z;
            M0 198H1284V0L1051.5 76C806 108 672 76 475.478 60C299.881 45.7036 88.6721 21.3333 0 36V198Z;
           M0 218H1284V146L1044 68C658 -38 724 -8.00024 475.478 79.9997C309.404 138.805 88.6721 41.333 0 55.9997V218Z;
            M0 198H1284V0L1051.5 76C834 126 643.047 114.4 475.478 60C307.909 5.60001 88.6721 21.3333 0 36V198Z
            `}
          />
        </path>
      </svg>
    </>
  );
}

export default AnimatedWave;
