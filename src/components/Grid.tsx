import * as S from './Grid.styles';

import {FC, memo} from 'react';
import {Block} from '../lib';

type GridProps = {
  width: number;
  height: number;
  blocks: Block[];
};

export const Grid: FC<GridProps> = memo(({width, height, blocks}) => {
  return <S.Grid width={width} height={height} />;
});
