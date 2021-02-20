import React, { useMemo, useState } from 'react'

import queryString from 'query-string';

import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({history}) => {
  const location = useLocation();
  const { q = ''} = queryString.parse(location.search);
 
 
  const [formValues, handleInputChange] = useForm({
    searchText: q
  });
  const { searchText } = formValues;
  const heroesFilter = useMemo(() => getHeroByName(q), [q]);
  // const heroesFilter = getHeroByName(searchText);

  const handleSubmit = (e)=>{
    e.preventDefault();
    // history.push(`/search/${searchText}`);
    history.push(`?q=${searchText}`);
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
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
              autoComplete="off"
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

          {q === '' && <div className="alert alert-info">Search a heroe</div>}

          {(q !== '' && heroesFilter.length === 0) && <div className="alert alert-danger">There is no a heroe with {q} </div>}

          {heroesFilter.map((hero) => <HeroCard key={hero.id} {...hero} />)}
        </div>
      </div>
    </div>
  );
}
