import React from 'react';
import Square from './square';
import '../styles/board.css';

type Props = {
  board: Board,
  onChangeSquare: Function,
};

export default function Board(props: Props) {
  const rows = [];
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      if (!rows[y]) {
        rows[y] = [];
      }
      rows[y].push(props.board[`${x}${y}`]);
    }
  }

  return (
    <div className="board">
      {
        rows.map((row: Array<Square>, rowIndex: number) => (
          <div className="row" key={rowIndex}>
            {
              row.map((square: Square, columnIndex: number) =>
                <Square
                  id={`${columnIndex}${rowIndex}`}
                  key={`${columnIndex}${rowIndex}`}
                  square={square}
                  onChange={props.onChangeSquare}
                />
              )
            }
        </div>
        ))
      }
    </div>
  );
}
