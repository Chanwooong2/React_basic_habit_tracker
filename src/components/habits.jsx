import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    
    increaseFunc = (habit) => {
        this.props.onIncrease(habit);
    };
    decreaseFunc = (habit) => {
        this.props.onDecrease(habit);
    };
    deleteFunc = (habit) => {
        this.props.onDelete(habit);
    };
    
   
    render() {
        return (
            <ul>
                {this.props.habits.map((habit) => (
                    <Habit 
                        key={habit.id}
                        habit={habit}
                        onIncrease={this.increaseFunc}
                        onDecrease={this.decreaseFunc} 
                        onDelete={this.deleteFunc}
                    />                  
                    )
                )}
            </ul>
        );
    }
}



export default Habits;