import React, { Component } from 'react';


class DateShow extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <div>
                <p>Date: {this.state.date.toString()}</p>
                <button onClick={()=>this.setState({date: new Date()})}>
                    Up"Date"
                </button>
            </div>
        );
    }
}

function NamesList(props){
    return(
    <ul>{props.names.map((name) => <li key={name}>{name}</li>)}</ul>
    );
}





export default DateShow;
export {NamesList};
