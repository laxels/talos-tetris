import * as S from './Grid.styles';

import {FC, memo} from 'react';
import {Block, makeBlankGrid, solveGrid} from '../lib';

type GridProps = {
  width: number;
  height: number;
  blocks: Block[];
};

export const Grid: FC<GridProps> = memo(({width, height, blocks}) => {
  const blankGrid = makeBlankGrid(width, height);
  const solvedGrid = solveGrid(blankGrid, blocks);

  if (solvedGrid == null) {
    return <h1>Grid is unsolvable</h1>;
  }

  return (
    <S.Grid width={width} height={height}>
      {solvedGrid.map((row) =>
        row.map((cell, i) => cell != null && <S.Cell key={i} color={cell} />)
      )}
    </S.Grid>
  );
});
