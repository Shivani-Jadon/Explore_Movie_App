import React from 'react';

class Navbar extends React.Component{
    render(){
        return (
            <div  className='nav' >
                <div className='search-container' >
                    <input type='text' />
                </div>
                <button id='search-btn'>Search</button>
            </div>
        )
    }
}

export default Navbar;