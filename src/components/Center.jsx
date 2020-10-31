import React from 'react';

function Center({children}) {
    return (
        <div style ={{display:"flex", justifyContent: "center", alignItems: "center"}} >
            {children}
        </div>
    )
}

export default Center