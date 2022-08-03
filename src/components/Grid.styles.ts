import styled from 'styled-components';
import {Color} from '../lib';

const CELL_SIZE = 50;

export const Grid = styled.div<{width: number; height: number}>`
  border: 2px solid black;
  width: ${(p) => p.width * CELL_SIZE}px;
  height: ${(p) => p.height * CELL_SIZE}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Cell = styled.div<{color: Color}>`
  background-color: ${(p) => p.color};
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
`;
