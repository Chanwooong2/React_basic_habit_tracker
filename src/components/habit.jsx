import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    increaseFunc = () => {
        this.props.onIncrease(this.props.habit);
    };
    decreaseFunc = () => {
        this.props.onDecrease(this.props.habit);
    };
    deleteFunc = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {

        const { id, name, count } = this.props.habit;

        return (
            <li className="habit">
                <span id={id}>{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.increaseFunc}>+</button>
                <button className="habit-button habit-decrease" onClick={this.decreaseFunc}>-</button>
                <button className="habit-button habit-delete" onClick={this.deleteFunc}>X</button>
            </li>
        );
    }
}

export default Habit;