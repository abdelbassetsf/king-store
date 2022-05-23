import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 25px;
  }
`;

export const CategoryTitle = styled(Link)`
  font-size: 28px;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: currentColor;
    bottom: 0;
    left: 0;
    transition: all 250ms ease-in-out;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
