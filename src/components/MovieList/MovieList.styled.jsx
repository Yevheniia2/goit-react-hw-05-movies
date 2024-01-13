import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)`
  text-decoration: none;
  padding: 2px 8px;

  &:hover {
    border-radius: 5px;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
  }
`;
export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 15px;
`;

// export const Title = styled.h2`
//   margin-top: 40px;
//   margin-bottom: 0;
// `;