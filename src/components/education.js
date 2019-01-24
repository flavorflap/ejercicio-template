import React from 'react'
import Item from './item'

const Education = () => (
    <div className="w3-container w3-card w3-white">
        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
        <Item title={'W3Schools.com'} beginDate={''} endDate={''} description = {'Web Development! All I need to know in one place.'} />
        <Item title={'London Business School'} beginDate={'2013'} endDate={'2015'} description = {'Master Degree'} />
        <Item title={'School of Coding'} beginDate={'2010'} endDate={'2013'} description = {'Bachelor Degree'} />
    </div>
)

export default Education;