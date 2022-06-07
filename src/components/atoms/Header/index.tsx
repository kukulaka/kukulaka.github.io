import React from 'react';
import {LogoWrapper} from './Header.styled'
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <LogoWrapper>
      <a href="/en/" data-testid="brand-logo" rel="">
        <img
          src="https://cdn.rcstatic.com/images/site_graphics/newsite/mobile/logos/rc-logo-small--white.svg"
          alt="Rentalcars.com Brand Logo"
          width="156"
          height="45"
        />
      </a>
    </LogoWrapper>
  );
};

export default Header;
