import React from 'react';
import StyledBadge from './Badge.styled';
interface Props {
  locationType: string;
  
}

 const Badge: React.FC<Props> = ({ locationType }) => {
  return <StyledBadge location={locationType}>{locationType}</StyledBadge>;
};

export default Badge
