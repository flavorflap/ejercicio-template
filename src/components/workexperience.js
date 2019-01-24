import React from 'react'
import Item from './item'

const WorkExp = () => (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
        <Item title={'Front End Developer / w3schools.com'} beginDate={'Jan 2015'} endDate= {''} description = {'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'} />
        <Item title={'Web Developer / something.com'} beginDate = {'Mar 2012'} endDate= {'Dec 2014'} description= {'Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'} />
        <Item title={'Graphic Designer / designsomething.com'} beginDate = {'Jun 2010'} endDate= {'Mar 2012'} description= {'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
    </div>
)

export default WorkExp;