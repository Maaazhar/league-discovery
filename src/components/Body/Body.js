import React, {   useState, useEffect} from 'react';
import Leagues from '../Leagues/Leagues';
import '../Style.css'


const Body = () => {
    const [leagues, setLeagues] = useState([]);
   
    useEffect(() => 
    {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England')
        .then(res => res.json())
        .then(data => 
            {
                console.log(data);
                setLeagues(data.countrys)
            } )
    }, [])
  
    
    return (
        <div className="body container">
            <div >
                <br/>
                <br/>
            </div>
            <div className=" row">
            {
                leagues.map(league => <Leagues league={league}></Leagues> )
            } 
            </div>
        </div>
    );
};

export default Body;