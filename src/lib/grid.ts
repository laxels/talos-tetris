import produce from 'immer';
import {Block} from '.';
import {getPossibleCoordsForBlock} from './blocks';

const COLORS = [`red`, `blue`] as const;
export type Color = typeof COLORS[number];

type Cell = Color | null;
type PartialGrid = Cell[][];

export type Coord = [number, number];

export function makeBlankGrid(width: number, height: number): PartialGrid {
  const grid: PartialGrid = [];
  for (let y = 0; y < height; y++) {
    const row: Cell[] = [];
    grid.push(row);
    for (let x = 0; x < width; x++) {
      row.push(null);
    }
  }
  return grid;
}

export function solveGrid(
  grid: PartialGrid,
  blocks: Block[],
  color: Color = `red`
): PartialGrid | null {
  if (blocks.length === 0) {
    return grid;
  }

  const [x, y] = getStartCoord(grid);

  const blocksTried = new Set();
  for (const b of blocks) {
    if (blocksTried.has(b)) {
      continue;
    }
    blocksTried.add(b);

    const possibleCoords = getPossibleCoordsForBlock(b)
      .map((blockCoords) =>
        blockCoords.map(([bx, by]) => [x + bx, y + by] as Coord)
      )
      .filter((gridCoords) => coordsAreAvailable(grid, gridCoords));
    for (const gridCoords of possibleCoords) {
      const newGrid = fillGrid(grid, gridCoords, color);

      const blockIndex = blocks.indexOf(b);
      const newBlocks = [
        ...blocks.slice(0, blockIndex),
        ...blocks.slice(blockIndex + 1),
      ];

      const newColor = getNextColor(color);

      const solved = solveGrid(newGrid, newBlocks, newColor);
      if (solved != null) {
        return solved;
      }
    }
  }

  return null;
}

function getStartCoord(grid: PartialGrid): Coord {
  for (let y = 0; y < grid.length; y++) {
    const row = grid[y];
    for (let x = 0; x < row.length; x++) {
      const cell = row[x];
      if (cell == null) {
        return [x, y];
      }
    }
  }
  throw new Error(`getStartCoord called on complete grid`);
}

function coordsAreAvailable(grid: PartialGrid, coords: Coord[]): boolean {
  return coords.every((c) => coordIsAvailable(grid, c));
}

function coordIsAvailable(grid: PartialGrid, [x, y]: Coord): boolean {
  return (
    y >= 0 &&
    y < grid.length &&
    x >= 0 &&
    x < grid[0].length &&
    grid[y][x] == null
  );
}

function fillGrid(
  grid: PartialGrid,
  coords: Coord[],
  color: Color
): PartialGrid {
  return produce(grid, (draft) => {
    for (const [x, y] of coords) {
      draft[y][x] = color;
    }
  });
}

function getNextColor(prevColor: Color): Color {
  const i = COLORS.indexOf(prevColor);
  const newI = (i + 1) % COLORS.length;
  return COLORS[newI];
}
