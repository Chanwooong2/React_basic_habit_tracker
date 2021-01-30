import './app.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Content from './components/content';

class App extends Component {
  state = {
    habits : [
        {id : 0, count : 0, name : "Chan"},
        {id : 1, count : 0, name : "Wooong"},
        {id : 2, count : 0, name : "Moon"},
    ],
    totalCount : 0,
  }

  increaseFunc = (habit) => {
      console.log(`habit : ${habit.name}`);

      const newHabits = this.state.habits.map((item) => {
          if(item.id === habit.id){
            return habit = {...habit, count : habit.count + 1};
          }
          return item;
      });

      this.setState({habits : newHabits});
  };
  decreaseFunc = (habit) => {
      console.log(`decreaseFunc : ${habit.name}`);

      const newHabits = this.state.habits.map((item) => {
          if(item.id === habit.id){
              const cnt = habit.count - 1;
              return habit = {...habit, count : cnt < 0 ? 0 : cnt};
          }
          return item;
      });

      this.setState({habits : newHabits});
  };
  deleteFunc = (habit) => {
      console.log(`deleteFunc : ${habit.name}`);

      const newHabits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits : newHabits});
  };

  addHabitFunc = (name) => {
      console.log(`I got ${name}`);

      const newHabits = [...this.state.habits, {id:Date.now(), count:0, name: name}];
      this.setState({habits : newHabits});
  }

  resetFunc = () =>{
    const newHabits = this.state.habits.map(item =>{
      if(item.count !== 0){
        return {...item, count : 0};
      }
      return item;
    });
    this.setState({habits : newHabits});
  }


  render() {
    return (
      <>
        <Navbar 
          totalCount={this.state.habits.filter(item => (item.count > 0)).length}
        />
        <Content 
          habits={this.state.habits}
          onIncrease={this.increaseFunc}
          onDecrease={this.decreaseFunc} 
          onDelete={this.deleteFunc}
          onAddHabitFunc={this.addHabitFunc}
          onResetFunc={this.resetFunc}
        />
      </>
    );
  }
}

export default App;