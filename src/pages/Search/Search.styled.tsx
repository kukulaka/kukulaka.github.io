import styled from 'styled-components';
import { base } from '../../themes';

export const PageContainer = styled.div`

height 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const PageWrapper = styled.div`
 flex-direction: column;
  display: flex;
  width: 100%;
  height: 100%
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
  align-items: center;
  
  @media (min-width: ${base.breakpoints.lg}) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const HeroBanner = styled.div`
  display: flex;
  flex: 1;
  margin: 0;
  background: #1879ca;
  height: 50%;
  width: 100%;
  border: none;

  @media (min-width: ${base.breakpoints.lg}) {
    min-height: 290px;
    overflow-y: none;
    background-image: url(https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/home/background-large.jpg);
    background-position: 50%;
  }
`;
