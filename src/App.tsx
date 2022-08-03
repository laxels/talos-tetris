import * as S from './App.styles';

import {FC, memo, useCallback, useMemo, useState} from 'react';
import {BLOCKS, Block} from './lib';
import {Grid} from './components';
import produce from 'immer';

type BlockCounts = {[b in Block]: number};

const App: FC = memo(() => {
  const [gridWidth, setGridWidth] = useState(2);
  const [gridHeight, setGridHeight] = useState(4);

  const [blockCounts, setBlockCounts] = useState<BlockCounts>({
    L: 0,
    S: 0,
    J: 0,
    I: 0,
    Z: 0,
    O: 0,
    T: 0,
  });

  const solve = useCallback(() => {}, []);

  const blocks = useMemo(
    () =>
      Object.entries(blockCounts).reduce((acc, [block, count]) => {
        const toAdd: Block[] = [];
        for (let i = 0; i < count; i++) {
          toAdd.push(block as Block);
        }
        return [...acc, ...toAdd];
      }, [] as Block[]),
    [blockCounts]
  );

  return (
    <S.App>
      <S.Configuration>
        <S.InputRows>
          <S.InputRow>
            <S.Label>Grid width</S.Label>
            <S.Input
              type={`text`}
              value={gridWidth}
              onChange={(e) => setGridWidth(Number(e.target.value))}
            />
          </S.InputRow>
          <S.InputRow>
            <S.Label>Grid height</S.Label>
            <S.Input
              type={`text`}
              value={gridHeight}
              onChange={(e) => setGridHeight(Number(e.target.value))}
            />
          </S.InputRow>
          {BLOCKS.map((b) => (
            <S.InputRow key={b}>
              <S.Label>{b} blocks</S.Label>
              <S.Input
                type={`text`}
                value={blockCounts[b]}
                onChange={(e) =>
                  setBlockCounts((prev) =>
                    produce(prev, (draft) => {
                      draft[b] = Number(e.target.value);
                    })
                  )
                }
              />
            </S.InputRow>
          ))}
        </S.InputRows>
      </S.Configuration>
      <S.SolveButton onClick={solve}>SOLVE</S.SolveButton>
      <S.GridAndBlocks>
        <Grid width={gridWidth} height={gridHeight} blocks={blocks} />
      </S.GridAndBlocks>
    </S.App>
  );
});

export default App;
