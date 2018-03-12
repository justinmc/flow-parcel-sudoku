/* @flow */
import React from 'react';
import { render } from 'react-dom';
import BoardComponent from './components/board';
import { getBoard } from './utils/board';

render(
  <BoardComponent
    board={getBoard()}
  />,
  document.querySelector('.app'),
);
