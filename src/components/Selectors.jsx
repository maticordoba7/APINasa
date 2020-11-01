import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setRover, setCamera, setEarthDate, setSolDate } from '../actions';


function Selectors({setCamera, setRover, rover, setEarthDate, setSolDate}) {

    const [dateStar, setDateStart] = useState("earth")

    function onSubmitRover(e) {
        e.preventDefault()
        var rov = document.getElementById("inputRover").value
        setRover(rov)
    }

    function onSubmitCamera(e) {
        e.preventDefault()
        var cam = document.getElementById("inputCamera").value
        setCamera(cam)
    }

    function onSubmitEarthDate(e) {
        e.preventDefault();
        var earthDate = document.getElementById("earthDate").value
        setEarthDate(earthDate)
    }

    function onSubmitSolDate(e) {
        e.preventDefault()
        var solDate = document.getElementById("solDate").value
        setSolDate(solDate)
    }
    
    var buttonEarth = document.getElementById("earth")
    var buttonSol = document.getElementById("sol")
    if (buttonEarth) {
        if (dateStar && dateStar === "earth") {
            buttonEarth.className = "btn btn-primary btn-lg";
            buttonSol.className = "btn btn-secondary btn-lg";
        } else {
            buttonEarth.className = "btn btn-secondary btn-lg";
            buttonSol.className = "btn btn-primary btn-lg";
        }

    }

    return (
        <div >

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" >Select Rover</label>
                </div>

                <form >
                    <select className="custom-select" id="inputRover">
                        <option value="Curiosity">Curiosity</option>
                        <option value="Opportunity">Opportunity</option>
                        <option value="Spirit">Spirit</option>
                    </select>
                </form>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={(e) => onSubmitRover(e)} type="submit">Change Rover</button>
                </div>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" >Select Cam Rover</label>
                </div>
                <form >
                    <select className="custom-select" id="inputCamera">
                        <option value="FHAZ">Front Hazard Avoidance Camera</option>
                        <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                        {rover && rover !== "Curiosity"? null:<option value="MAST">Mast Camera</option>}
                        {rover && rover !== "Curiosity"? null:<option value="CHEMCAM">Chemistry and Camera Complex</option>}
                        {rover && rover !== "Curiosity"? null:<option value="MAHLI">Mars Hand Lens Imager</option>}
                        {rover && rover !== "Curiosity"? null:<option value="MARDI">Mars Descent Imager</option>}
                        <option value="NAVCAM">Navigation Camera</option>
                        {rover && rover !== "Curiosity"? <option value="PANCAM">Panoramic Camera</option>:null}
                        {rover && rover !== "Curiosity"? <option value="MINITES">Miniature Thermal Emission Spectrometer</option>:null}
                        
                    </select>
                </form>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={(e) => onSubmitCamera(e)} type="submit">Change camera</button>
                </div>
            </div>

            <div className="input-group mb-3">
                <div className="btn-group btn-group-toggle" data-toggle="buttons" >
                    <button type="button" className="btn btn-primary btn-lg" id= "earth" name= "earth" onClick={(e) => {setDateStart(e.target.name)}} >Earth Date</button>
                    <button type="button" className="btn btn-secondary btn-lg" id="sol" name ="sol" onClick={(e) => {setDateStart(e.target.name)}} >Sol Date</button>
                </div>
            </div>

            {dateStar && dateStar === "earth"? 
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label  className="input-group-text">Select Earth Date</label>
                </div>
                <div>
                    <input className="form-control" type="date" id="earthDate" />
                </div>
                
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={(e) => onSubmitEarthDate(e)} type="submit">Select date</button>
                </div>
                
            </div>:
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label  className="input-group-text">Select Sol Date</label>
                </div>
                <div>
                    <input className="form-control" type="number" min="0" max="3000" id="solDate"/>
                </div>

                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={(e) => onSubmitSolDate(e)} type="submit">Select date</button>
                </div>
            
            </div>
                
            }
        </div>
    )
}


const mapStateToProps = state => {
    return {
      rover: state.rover,
      earthDate: state.earthDate,
      solDate: state.solDate
    }
}
    
const mapDispatchToProps = dispatch => {
  return {
    setRover: (rover) => dispatch(setRover(rover)),
    setCamera: (camera) => dispatch(setCamera(camera)),
    setEarthDate: (earthDate) => dispatch(setEarthDate(earthDate)),
    setSolDate: (solDate) => dispatch(setSolDate(solDate))
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Selectors)