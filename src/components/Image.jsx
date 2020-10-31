import React from 'react';
import './Image.css';

function Image ({url}) {
    return(
        <div className= "cardContainer">
          <div className="card">
            <img src={url} className="images"></img>
          </div>
        </div>

    )
}

export default Image