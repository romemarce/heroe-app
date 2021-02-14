import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ({history}) => {
  const param = useParams();
 
  if (param.length>0) {
    console.log(param.s);   
  }

  const heroesFilter = heroes.filter((hero)=>(hero.superhero === param.s));

  
  const [searchInput, setSearchInput] = useState(' ');
  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(searchInput);
    history.push(`/search/${searchInput}`);
  }

  const handleChange = (e)=>{
    setSearchInput(e.target.value);
  }
  
  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Find hero"
              className="form-control"
              name="q"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-dark"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          { (heroesFilter.length>0)
              ? heroesFilter.map(hero => <HeroCard key={hero.id} {...hero} />)
              : <div className="alert alert-info">Not found heroe</div> }
        </div>
      </div>
    </div>
  );
}
