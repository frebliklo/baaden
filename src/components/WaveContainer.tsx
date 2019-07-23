import React, { FunctionComponent } from 'react'

import { theme } from '../constants'

const WaveContainer: FunctionComponent<{}> = ({ children }) => (
  <div className="wave-container">
    <svg
      className="wave-container__svg"
      viewBox="0 0 3200 48"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3200 0H0v38.414c75.117 3.609 300.04 10.555 598.793 9.473 423.707-1.535 678.177-8.371 910.437-14.61 223.04-5.991 425.6-11.432 737.85-11.1 637.43.676 952.92 23.68 952.92 23.68V0z"
        fill={theme.colors.bg}
      />
    </svg>
    {children}
  </div>
)

export default WaveContainer
