import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Style.css'
import MaleSoccerBanner from '../../images/MaleSoccerBanner.png'
import FemaleSoccerBanner from '../../images/FemaleSoccerBanner.png'
import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'
import youtube from '../../images/youtube.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory,  faFlag, faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons'


const LeagueDetails = () => {
    const {idLeague} = useParams();
    const [leagues, setLeagues] = useState({});
    useEffect(() => 
    {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data))
    }, [])
    let bannerImage ;
    console.log(leagues);
    console.log(leagues.leagues);
    let leagueDetails = <div></div>
    if (leagues.leagues !== undefined) 
    {
        console.log(leagues.leagues[0]);
        console.log(leagues.leagues[0].idLeague);
        const { intFormedYear, strBadge, strBanner, strCountry, strDescriptionEN, strFacebook, strGender, strLeague, strLogo, strPoster, strSport, strTwitter, strWebsite, strYoutube } = leagues.leagues[0] ;    
        leagueDetails = 
            <div clas>
                <div className="leagueDetailsCard rounded container row  m-3 p-2">
                    <div className="p-5 text-light col-lg-6 col-sm-12">
                        <h4 className="">{strLeague}</h4>
                        <h6 className=""><FontAwesomeIcon className="text-warning" icon={faHistory} /> Founded : {intFormedYear}</h6>
                        <h6 className=""><FontAwesomeIcon className="text-warning" icon={ faFlag} /> Country : {strCountry}</h6>
                        <h6 className=""><FontAwesomeIcon className="text-warning" icon={faFutbol} /> Sport Type : {strSport}</h6>
                        <h6 className=""><FontAwesomeIcon className="text-warning" icon={faVenusMars} /> Gender : {strGender}</h6>
                    </div>
                    <div className=" col-lg-6 col-sm-12" >
                        {
                            strGender === 'Male' 
                            ? <img style={{float: 'right', borderRadius: "0.5rem"}} src={MaleSoccerBanner} height="250px" width="500px" alt=""/>
                            : <img style={{float: 'right', borderRadius: "0.5rem"}} src={FemaleSoccerBanner} height="250px" width="500px" alt=""/>
                            
                        }
                    </div>
                </div>
                <div className="container text-light p-5">
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="p-3 m-3 d-flex justify-content-center">
                    <a className="p-2" href={strFacebook}  target="_blank"> <img src={facebook} width="70px" alt=""/> </a>
                    <a className="p-2" href={strTwitter}  target="_blank"> <img src={twitter} width="70px" alt=""/> </a>
                    <a className="p-2" href={strYoutube}  target="_blank"> <img src={youtube} width="70px" alt=""/> </a>
                </div>
            </div>
    }
    
    return (
        <div className=" leagueDetails">
            <br/>
            <br/>
            {leagueDetails}
        </div>
    );
};

export default LeagueDetails;