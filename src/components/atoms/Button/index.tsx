import React from 'react';
import StyledButton from './Button.styled';
interface Props {
  label: string;
  onClick: () => void;
}

 const Button: React.FC<Props> = ({ label, onClick }) => {
  return <StyledButton  data-testid="button-needed" onClick={onClick}>{label}</StyledButton>;
};

export default Button
