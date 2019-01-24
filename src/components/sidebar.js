import React from 'react'
import avatar from '../avatar_hat.jpg';
import Skill from './skill';

const Sidebar = () =>( 
<div className="w3-third">

<div className="w3-white w3-text-grey w3-card-4">
  <div className="w3-display-container">
    <img src={avatar} style={ { width: '100%' } } alt="Avatar"/>
    <div className="w3-display-bottomleft w3-container w3-text-black">
      <h2>Jane Doe</h2>
    </div>
  </div>
  <div className="w3-container">
    <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p>
    <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p>
    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p>
    <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p>
    <hr/>

    <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
    <Skill skillName={'Adobe Photoshop'} proficiency = {'90%'}/>
    <Skill skillName={'Photography'} proficiency = {'80%'}/>
    <Skill skillName={'Media'} proficiency = {'70%'}/>
    <br/>

    <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
    
    <Skill skillName={'English'} height = {'24px'} width = {'100%'}/>
    <Skill skillName={'Spanish'} height = {'24px'} width = {'55%'}/>
    <Skill skillName={'German'} height = {'24px'} width = {'25%'}/>
    
    <br/>
  </div>
</div><br/>

</div>
)

export default Sidebar

