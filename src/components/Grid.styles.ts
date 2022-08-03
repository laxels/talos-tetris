import styled from 'styled-components';

const CELL_SIZE = 100;

export const Grid = styled.div<{width: number; height: number}>`
  background-color: black;
  width: ${(p) => p.width * CELL_SIZE}px;
  height: ${(p) => p.height * CELL_SIZE}px;
`;
