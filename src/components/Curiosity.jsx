import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Image from './Image';
import { setImages } from '../actions';

function Curiosity({ images, page, setImages }) {
    
    useEffect(() => {
        setImages('curiosity', page)
    }, [page])
    const status = "success"
    return (
        <div>
            {images[0]?.map((i) => <Image url={i.img_src} /> )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        images: state.images,
        page: state.page
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setImages: (rover,page) => dispatch(setImages(rover, page))
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Curiosity)