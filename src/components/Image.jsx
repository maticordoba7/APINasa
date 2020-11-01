import React from 'react';
import './Image.css';

function Image ({url, id}) {
    return(
        <div className= "cardContainer">
          <div className="card">
            <img src={url} className="images" alt={id}></img>
          </div>
        </div>

    )
}

export default Image