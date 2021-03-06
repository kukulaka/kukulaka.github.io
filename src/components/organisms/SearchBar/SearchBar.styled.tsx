import styled from 'styled-components';
import { base } from '../../../themes';

export const Wrapper = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direcion: row;
  background: #ffb700;
  border-radius: 8px;
  mar
  border-radius: calc(4px * 2);
  border: 1px solid #ffb700;
  padding: calc(4px * 2) !important;
  box-shadow: 0 calc(4px / 2) calc(4px * 3) rgba(0, 0, 0, 0.16);
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif;

  @media (max-width: ${base.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const SearchWrapper = styled.div`
  font-size: 16px
  flex-direcion: row;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius:4px;
  padding: 25px;
  height: 100%
  cursor: text;

`;

export const IconWrapper = styled.div`
  padding-right: 10px;
`;
