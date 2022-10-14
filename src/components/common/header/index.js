import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header max-width">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <LocationOnIcon className='absolute-center location-icon'/>
              <div>Bangalore</div>
            </div>
           < KeyboardArrowDownRoundedIcon className='absolute-center' />
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <SearchIcon className='absolute-center search-icon'/>

            <input
              className="search-input"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>

        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/pizza_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image"
            alt="Profile"
          />
          <span className="header-username">Sushant</span>
           <ExpandMoreIcon className='absolute-center profile-options-icon'/>
        </div>
      </div>
    </div>
  );
};

export default Header;