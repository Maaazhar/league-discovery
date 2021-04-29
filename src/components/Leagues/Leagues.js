import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import imageComingSoon from '../../images/ImageCommingSoon.png'


const Leagues = (props) => {
    const {idLeague, strCountry, strLeague, strSport, strBadge} = props.league; 

    return (
        <div className=" col-lg-4 cl-sm-12">
            <div className="cardBody card text-center text-light m-3 p-2" style={{width: "18rem"}}>
                <div className="d-flex justify-content-center">
                    {  
                        strBadge == null 
                        ? <img src={imageComingSoon} className="card-img-top w-50 " alt=""/>
                        : <img src={strBadge} className="card-img-top w-50 " alt=""/>
                    }
                </div>
                <div className="card-body">
                    <h4 className="card-title">{strLeague}</h4>
                    <p className="card-text">Sports Type : {strSport}</p>
                    <Link to={`/leagues/${idLeague}`}> 
                    <button className="btn btn-primary">Discover More <FontAwesomeIcon icon={faArrowRight} /></button> 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Leagues;