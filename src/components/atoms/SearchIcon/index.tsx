import React from 'react';
import styled from 'styled-components';

import { Icon } from './SearchIcon.styled';

const Svg = styled(Icon)`
  width: 1rem;
  height: 1rem;
`;

const SearchIcon: React.FC = () => {
  return (
    <Svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      data-icon="search"
      data-prefix="search"
      focusable="false"
      role="img"
    >
      <path
        fill="currentColor"
        d="M17.464 6.56a8.313 8.313 0 1 1-15.302 6.504A8.313 8.313 0 0 1 17.464 6.56zm1.38-.586C16.724.986 10.963-1.339 5.974.781.988 2.9-1.337 8.662.783 13.65c2.12 4.987 7.881 7.312 12.87 5.192 4.987-2.12 7.312-7.881 5.192-12.87zM15.691 16.75l7.029 7.03a.75.75 0 0 0 1.06-1.06l-7.029-7.03a.75.75 0 0 0-1.06 1.06z"
      />
    </Svg>
  );
};

export default SearchIcon;
