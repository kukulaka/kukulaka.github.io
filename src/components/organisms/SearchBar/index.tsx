import React from 'react';
import {Wrapper } from './SearchBar.styled';
interface Props {
  label: string;
  onClick: () => void;
}

 const SearchBar: React.FC<Props> = ({ label, onClick }) => {
  return (
    <Wrapper>Cheese</Wrapper>
  );
};

export default SearchBar
