import React from 'react';
import { setImages, setPage } from '../actions';
import {connect} from 'react-redux';


function Pagination({setPage, page}) {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item"><button onClick={() => setPage( Math.max(page, 1) - 1 )} className="page-link"  >Previous</button></li>
                <li className="page-item"><button onClick={() => setPage(1)} className="page-link" >1</button></li>
                <li className="page-item"><button onClick={() => setPage(2)} className="page-link" >2</button></li>
                <li className="page-item"><button onClick={() => setPage(3)} className="page-link" >3</button></li>
                <li className="page-item"><button onClick={() => setPage( Math.max(page, 1) + 1 )} className="page-link" >Next</button></li>
            </ul>
        </nav>
        
    )
}

const mapStateToProps = state => {
    return {
      page: state.page
    }
}
  
  
const mapDispatchToProps = dispatch => {
   return {
        setImages: (rover, page) => dispatch(setImages(rover, page)),
        setPage: (number) => dispatch(setPage(number))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Pagination);