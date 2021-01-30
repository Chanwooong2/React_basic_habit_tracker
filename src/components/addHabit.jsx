// import React, { PureComponent } from 'react';

// class AddHabit extends PureComponent {
//     inputRef = React.createRef();

//     addHabitFunc = event => {
//         event.preventDefault();
//         this.props.onAddHabitFunc(this.inputRef.current.value);
//     }

//     render() {
//         console.log("addHabit Render;");
//         return (
//             <form className="add-form" onSubmit={this.addHabitFunc}>
//                 <input ref={this.inputRef} type="text" className="add-input" placeholder="Input your habit!"/>
//                 <button className="add-button">Add</button>
//             </form>
//         );
//     }
// }

// export default AddHabit;

import React, { memo } from 'react';

const AddHabit = memo( props => {
    const inputRef = React.createRef();

    const addHabitFunc = event => {
        event.preventDefault();
        props.onAddHabitFunc(inputRef.current.value);
    }

    console.log("addHabit Render;");
    return (
        <form className="add-form" onSubmit={addHabitFunc}>
            <input ref={inputRef} type="text" className="add-input" placeholder="Input your habit!"/>
            <button className="add-button">Add</button>
        </form>
    );
});

export default AddHabit;