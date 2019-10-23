import React from 'react';
import { Link } from 'react-router-dom';


const ImA = (props) => {
return(
    <div>
            <h1>Role Selection</h1>
            <h2>How can we help you:</h2>
            <h3>{props.user.name}</h3>
              <Link to='/signup/farmer' >I am a farmer</Link>
              <br/>
              <Link to='/signup/volunter'>I am a volunteer</Link>
              <br/>
              <Link to='/signup/community'>I am a Community member</Link>
    </div>
)}

 export default ImA