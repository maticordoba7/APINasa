import React, { useEffect} from 'react';
import Image from './Image';
import {connect} from 'react-redux';
import { setImages } from '../actions';

function Cards({ rover, setImages, images,camera, page, earthDate, solDate}) {

     useEffect(() => {
         console.log(earthDate)
        setImages(rover, page, camera, earthDate, solDate)
       }, [rover, camera, page, earthDate, solDate])
      
       
       return (
        <div>
            {images[0] && images[0].length === 0? 
                <div class="alert alert-danger" role="alert" style ={{display:"flex", justifyContent: "center", alignItems: "center"}} >
                    No photos for those filters
                </div>:
                <div>
                    {images[0]?.map((i) => <Image key={i.id} url={i.img_src} id={i.id}/> )}
                </div>
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setImages: (rover,page,camera, earthDate, solDate) => dispatch(setImages(rover, page,camera, earthDate, solDate))
    }
}
  
const mapStateToProps = state => {
    return {
        rover: state.rover,
        images: state.images,
        camera: state.camera,
        page: state.page,
        earthDate: state.earthDate,
        solDate: state.solDate
    }
}
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cards)