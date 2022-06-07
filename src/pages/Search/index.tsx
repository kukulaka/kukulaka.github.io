import React from 'react';
import { PageContainer, HeroBanner, PageWrapper } from './Search.styled';
import  SearchBar from '../../components/organisms/SearchBar';
import {Header} from '../../components/atoms';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

//if there was more than one page, we would create components for page
//layout in templates and combine components in template component section

const Search: React.FC<Props> = () => {
  return (
    <PageContainer>
      <HeroBanner>
        <PageWrapper>
          <Header/>
          <SearchBar/>
        </PageWrapper>
      </HeroBanner>
    </PageContainer>
  );
};

export default Search;
