import React, { Component } from 'react';
import AddHabit from './addHabit';
import Habits from './habits';

class Content extends Component {

    increaseFunc = (habit) => {
        this.props.onIncrease(habit);
    };
    decreaseFunc = (habit) => {
        this.props.onDecrease(habit);
    };
    deleteFunc = (habit) => {
        this.props.onDelete(habit);
    };

    addHabitFunc = (name) => {
        this.props.onAddHabitFunc(name);
    }
    
    resetFunc = () =>{
        this.props.onResetFunc();
    }

    render() {
        return (
            <>
                <AddHabit 
                    onAddHabitFunc={this.addHabitFunc}
                    totalCount={this.totalCountFunc}
                />
                <Habits 
                    habits={this.props.habits}
                    onIncrease={this.increaseFunc}
                    onDecrease={this.decreaseFunc} 
                    onDelete={this.deleteFunc}
                />
                <button className="habits-reset" onClick={this.resetFunc}>RESET</button>
            </>
                
        );
    }
}

export default Content;