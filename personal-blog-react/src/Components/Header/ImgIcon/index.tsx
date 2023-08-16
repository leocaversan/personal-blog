import React from 'react';
import { ImgIconProps } from '../../../Props/props';

const ImgIcon: React.FC<ImgIconProps> = ({src, alt, onClick }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImgIcon;
