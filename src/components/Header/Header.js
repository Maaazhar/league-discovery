import React from 'react';
import bannerImage from '../../images/BannerImage.gif'
import '../Style.css'

const Header = () => {
    const homeHeader = 
    <div>
        <h1 className="mt-4 pt-3 text-primary">League Discovery</h1>
        <h6 className="text-secondary">Discover all the famous league around the world in one place </h6>
    </div>;

    const leagueHeader =
    <div>

    </div>;
    return (
        <div className="header">
            <div className="container container-fluid d-flex justify-content-around rounded shadow Header">
                <img className="w-25" src={bannerImage} alt=""/>
                <div className="text-center">
                    {homeHeader}
                </div>
                <img className="w-25" src={bannerImage} alt=""/>
            </div>
            <div className="navBar mb-5">
            <nav className="  navbar rounded shadow ">
                <div className="container-fluid">
                    <div className="d-flex ml-5">
                        <a className="text-primary navbar-brand" href="/home">Home</a>
                        <a className="text-primary navbar-brand" href="/home">Leagues</a>
                        <a className="text-primary navbar-brand" href="/about">About us</a>
                    </div>
                    <form className="d-flex">
                        <input className=" input form-control me-2  mr-1" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary  " type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
        </div>
    );
};

export default Header;