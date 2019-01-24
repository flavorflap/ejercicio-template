import React, { Component} from 'react'


class Dates extends Component {

    render(){
        if (this.props.endDate === '' && this.props.beginDate === '' ) {
            return(
            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
            )
            }
        if (this.props.endDate === '') {
            return(
            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{ this.props.beginDate } - <span className="w3-tag w3-teal w3-round">Current</span></h6>
        )
        }

        return(
            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{ this.props.beginDate } - {this.props.endDate}</h6>
        )

    }
}




export default Dates;