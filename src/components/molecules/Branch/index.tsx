import React, {LiHTMLAttributes} from 'react';
import { BranchWrapper } from './Branch.styled';
import BranchDescription from '../BranchDescription';
import {Badge} from '../../atoms'
interface Props extends LiHTMLAttributes<HTMLLIElement> {
  id: string;
  title: string;
  subTitle: string;
  locationType: string;
  selected:boolean
}

const Branch: React.FC<Props> = ({ id, title, subTitle, locationType, selected }) => {
  return (
    <BranchWrapper key={`${locationType}_${id}`} id={id} aria-selected={selected} role='option'>
      <Badge locationType={locationType}/>
      <BranchDescription title={title} subTitle={subTitle}/>
    </BranchWrapper>
  );
};

export default Branch;
