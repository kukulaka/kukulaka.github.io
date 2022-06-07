import React from 'react';
import { Wrapper, SearchWrapper, IconWrapper } from './SearchBar.styled';
import { SearchIcon, TextBox } from '../../atoms';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const SearchBar: React.FC<Props> = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <IconWrapper>
        <SearchIcon />
        </IconWrapper>
        <TextBox label="Pick-up Location" />
      </SearchWrapper>
    </Wrapper>
  );
};

export default SearchBar;
