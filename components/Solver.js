import React from 'react';
import Board from './board';
import { exampleBoard, getBoard, solve, validateBoard } from '../utils/board';

type Props = {
};

type State = {
  board: Board,
};

export default class Solver extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      //board: getBoard(),
      board: exampleBoard,
    };
  }

  onChangeSquare = (id: string, squareValue: SquareValue) => {
    const { board } = this.state;

    board[id].value = parseInt(squareValue);

    if (!validateBoard(board)) {
      throw new Error('Invalid move');
    }

    this.setState({
      board,
    });
  }

  onClickSolve = () => {
    this.setState({
      board: solve(this.state.board),
    });
  }

  render() {
    return (
      <div className="solver">
        <Board
          board={this.state.board}
          onChangeSquare={this.onChangeSquare}
        />
        <button
          onClick={this.onClickSolve}
        >
          Solve
        </button>
      </div>
    );
  }
}
