// import React, { PureComponent } from 'react';

// class Navbar extends PureComponent {

//     render() {
//         const totalCount = this.props.totalCount;
//         console.log("navBar Render;");
//         return (
//             <nav className="navBar"> 
//                 <i className="fas fa-leaf"></i>
//                 <span>Habit Tracker</span>
//                 <span className="navbar-count">{totalCount}</span>
//             </nav>
//         );
//     }
// }

// export default Navbar;


import React, { memo } from 'react';

const Navbar = memo( (props) => {
        const totalCount = props.totalCount;
        console.log("navBar Render;");
        return (
            <nav className="navBar"> 
                <i className="fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{totalCount}</span>
            </nav>
        );
    });

export default Navbar;