import React from 'react';

function Home(props) {
    return (
        <div>
            <h1>WELCOME TO TRAINING - {props.date} {props.age} </h1>

            <p>
                {props.obj.department} - {props.obj.college} 
                {props.Arr.map((data)=>{return(<li> {data} </li>)})}
                {props.jsx}
            </p>
            
        </div>
    );
}

export default Home;