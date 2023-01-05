import React from 'react';

const User = ({user,age}) => {
    return (
        <div className='item-container'>
            <p> {user} : {age}  </p>
        </div>
    );
}

export default User;
