import styled from 'styled-components';

interface BadgeProps {
  location: string;
}

const StyledBadge = styled.div<BadgeProps>`
  border-radius: 4px;
  min-width: 5.1rem;
  padding: 0.3rem 0;
  font-size: 14px;
  font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
  text-align: center;
  font-weight: 500;

  color: ${(p: BadgeProps) => (p.location === 'Airport' ? '#262626' : '#fff')};
  background-color: ${(p: BadgeProps) =>
    p.location === 'Airport'
      ? '#ff8000'
      : p.location === 'City'
      ? '#0071c2'
      : '#1879ca'};
`;

export default StyledBadge;
