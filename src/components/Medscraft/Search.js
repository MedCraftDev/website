import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "../../assets/css/search.css";

const SearchComponent = () => {
  return (
    <div className="search__container">
      {/* <div className="search__input-container">
        <SearchIcon className="search__icon" />
        <input className="search__input" type="text" placeholder="Search Lab tests, doctors, skincare etc. " />
      </div> */}
    </div>
  );
};

const CreditsComponent = () => {
  return (
    <div className="credits__container">
     
    </div>
  );
};

const App = () => {
  return (
    <div>
      <SearchComponent />
      <CreditsComponent />
    </div>
  );
};

export default App;
