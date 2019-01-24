import React, { Component } from 'react'

class Skill extends Component {
    constructor (props) {
        super(props);
    }
    render(){

        return(
            <div>
                <p>{this.props.skillName}</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={ { width: this.props.proficiency || this.props.width, height: this.props.height } }>{this.props.proficiency}</div>
                </div>
            </div>
        )
    }
}

export default Skill;