"use client";

import React, { useState } from 'react';

interface ArrowProps {
  initialColor: string;
  hoverColor: string;
  className?: string;
}

const Arrow: React.FC<ArrowProps> = ({
  initialColor,
  hoverColor,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="18.724"
      height="9.975"
      viewBox="0 0 18.724 9.975"
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      fill={isHovered ? hoverColor : initialColor} // Contrôle dynamique de la couleur de remplissage
    >
      <path d="M13.213,1.654l2.169,2.169L0,3.842V6.183l15.37-.019L13.213,8.32l1.655,1.655,3.058-3.057a2.731,2.731,0,0,0,0-3.861L14.867,0Z" />
    </svg>
  );
};

export default Arrow;