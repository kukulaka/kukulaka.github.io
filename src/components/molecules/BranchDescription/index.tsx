import React from 'react';
import { BranchWrapper, Title, SubText } from './BranchDescription.styled';
interface Props {
  title: string;
  subTitle: string;
}

const BranchDescription: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <BranchWrapper>
      <Title>{title}</Title>
      <SubText>{subTitle}</SubText>
    </BranchWrapper>
  );
};

export default BranchDescription;
