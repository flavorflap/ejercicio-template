import React, { Component } from 'react'
import Dates from './dates'

class Item extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
        <div className="w3-container">
            <h5 className="w3-opacity"><b>{ this.props.title }</b></h5>
            <Dates beginDate= {this.props.beginDate} endDate= {this.props.endDate}/>
            <p>{this.props.description}</p>
            <hr/>
        </div>
        )
    }
}

export default Item;