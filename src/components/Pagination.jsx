import React, { useEffect, useState } from 'react';
import { setImages, setPage } from '../actions';
import {connect} from 'react-redux';


function Pagination({setPage, page}) {
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item"><a onClick={() => setPage( Math.max(page, 1) - 1 )} class="page-link" href="#" >Previous</a></li>
                <li class="page-item"><a onClick={() => setPage(1)} class="page-link" href="#">1</a></li>
                <li class="page-item"><a onClick={() => setPage(2)} class="page-link" href="#">2</a></li>
                <li class="page-item"><a onClick={() => setPage(3)} class="page-link" href="#">3</a></li>
                <li class="page-item"><a onClick={() => setPage( Math.max(page, 1) + 1 )} class="page-link" href="#">Next</a></li>
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