import * as S from './App.styles';

import {FC, memo} from 'react';
import {Block} from './lib';
import {Grid} from './components';

const GRID_WIDTH = 2;
const GRID_HEIGHT = 4;
const BLOCKS: Block[] = [`L`, `L`];

const App: FC = memo(() => {
  return (
    <S.App>
      <Grid width={GRID_WIDTH} height={GRID_HEIGHT} blocks={BLOCKS} />
    </S.App>
  );
});

export default App;
