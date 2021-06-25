import React from 'react'
import './MainSite.css'
import imgg from "./imgg.jpg"
import pc2 from "./pc2.jpg"
import star from "../ICONS/week1 -30.png"
import clock from "../ICONS/Clock.png"
import loc from "../ICONS/week1 -20.png"
import car from "../ICONS/week1 -18.png"
import meal from "../ICONS/week1 -17.png"
import cashback from "../ICONS/week1 -31.png"
function MainSite() {
    return (
        <div className="mainSite">
            
            <div className="rightSide">
                <img 
                    className="mainIMG"
                    src={imgg} alt="" 
                />

                <span className="repeatImg">
                     <div className="rimg">
                         <img 
                             className="smm"
                             src={pc2} alt="" />
                         <img 
                              className="smm"
                              src={pc2} alt="" />
                         <img 
                              className="smm"
                              src={pc2} alt="" />
                         <img 
                              className="smm"
                              src={pc2} alt="" />
                         <img 
                              className="smm"
                              src={pc2} alt="" />
                     </div>
                 </span>
            </div>
            <div className="leftSide">
                <h2>River Rafting on Indus River</h2>
                <div className="abt">
                   <div className="ch"><img className="imgico" src={star} alt="" /><h2>5.0 (86 Reviews)</h2></div>
                   <div className="ch"><img className="imgico" src={clock} alt=""/><h2>5 Hours</h2> </div>
                   <div className="ch"><img className="imgico" src={loc} alt=""/><h2>Ladakh </h2> </div>
                </div>
                <h2 className="pr1">Starting from <span className="stuck">INR 19,999</span></h2>
                <h1 className="pr">INR 13800 Per Adult</h1>
                <button className="button" type="submit">Book Now</button>
                <div className="downG">
                                <div className="gchild"><img className="imgico" src={car} alt="" /></div>
                                <div className="gchild"><img className="imgico" src={meal} alt="" /></div>
                                <div className="gchild"><img className="imgico" src={cashback} alt="" /></div>
                                <div className="gchild"><img className="imgico" src={car} alt="" /></div>
                                <div className="gchild"><img className="imgico" src={car} alt="" /></div>
                                <div className="gchild"><img className="imgico" src={meal} alt="" /></div>
                                <div className="gchild"><img className="imgico" src={cashback} alt="" /></div>
                                <div className="gchild"><img className="imgico" src={car} alt="" /></div> 
                                </div>
            </div>
            
        </div>
    )
}

export default MainSite
