import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  state = {
    count : 0,
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit)
  }

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.habit)
  }


  render() {
    const {name, count} = this.props.habit;
    
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-counter">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          +
        </button>
        <button className="habit-button habit-decrease"  onClick={this.handleDecrement}>
          -
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          휴지통
        </button>
      </li>
    )

  }
}
export default Habit;