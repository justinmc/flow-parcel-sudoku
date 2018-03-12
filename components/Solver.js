import React from 'react';
import Board from './board';
import { getBoard } from '../utils/board';

type Props = {
};

type State = {
  board: Board,
};

export default class Solver extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      board: getBoard(),
    };
  }

  onChangeSquare = (id: string, squareValue: SquareValue) => {
    const { board } = this.state;

    board[id].value = squareValue;

    this.setState({
      board,
    });
  }

  render() {
    return (
      <div className="solver">
        <Board
          board={this.state.board}
          onChangeSquare={this.onChangeSquare}
        />
      </div>
    );
  }
}
