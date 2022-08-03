import * as S from './Blocks.styles';

import {FC, memo} from 'react';
import {Block} from '../lib';

type BlocksProps = {
  blocks: Block[];
};

export const Blocks: FC<BlocksProps> = memo(({blocks}) => {
  return <S.Blocks></S.Blocks>;
});
