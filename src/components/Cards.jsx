import React, { useState , useEffect} from 'react';
import Image from './Image';
import {connect} from 'react-redux';
import { setImages } from '../actions';

function Cards({ rover, setImages, images }) {
     useEffect(() => {
        setImages(rover)
       }, [rover])
    const status = "success"
    return (
        <div>
            <p>Seleccionaste el rover: {rover}</p>
            {status === "loading" && (
                <div>Loading data...</div>
            )}
            {status === "error" && (
                <div>Error fetching data</div>
            )}
            {status === "success" && (
                <div>
                    {images[0] && images[0]?.map((i) => <Image url={i.img_src} /> )}
                </div>
            )}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setImages: (rover) => dispatch(setImages(rover))
    }
}
  
const mapStateToProps = state => {
    return {
        rover: state.rover,
        images: state.images
    }
}
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cards)