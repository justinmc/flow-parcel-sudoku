import React from 'react';
import '../styles/square.css';

type Props = {
  square: Square,
};

export default function Square(props: Props) {
  return (
    <div className="square">
      <input
        className={props.square.fixed ? 'fixed' : ''}
        type="text"
        value={props.square.value}
      />
    </div>
  );
}
