/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { HTMLAttributes } from 'react';
import { BranchListWrapper, NoResults } from './BranchList.styled';
import Branch from '../Branch';

interface Branch {
  id?: string | undefined;
  title?: string | undefined;
  subTitle?: string | undefined;
  locationType?: string | undefined;
  selected?: boolean | undefined;
}
interface Props extends HTMLAttributes<HTMLUListElement> {
  branches: Array<Branch> | [];
}

//I need to implement selected here but did not have time. Sorry.

const BranchList: React.FC<Props> = ({ ...Props }) => {
  return (
    <BranchListWrapper role="listbox">
      {Props.branches.length > 0 &&
        Props.branches.map((branch, index) => {
          if (branch.subTitle) {
            return <Branch
              id={`branch-${index}`}
              title={branch.title!}
              subTitle={branch.subTitle!}
              locationType={branch.locationType!}
              selected={false}
            />;
          } else {
            return <NoResults>No Results</NoResults>;
          }
        })}
    </BranchListWrapper>
  );
};

export default BranchList;
