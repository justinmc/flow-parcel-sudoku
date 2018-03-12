import React from 'react';
import '../styles/square.css';

type Props = {
  id: string,
  onChange: Function,
  square: Square,
};

export default class Square extends React.Component<Props> {
  onChange = (event: SyntheticEvent) => {
    this.props.onChange(this.props.id, event.target.value);
  }

  render() {
    return (
      <div className="square">
        <input
          className={this.props.square.fixed ? 'fixed' : ''}
          onChange={this.onChange}
          type="text"
          value={this.props.square.value || ''}
        />
      </div>
    );
  }
}
