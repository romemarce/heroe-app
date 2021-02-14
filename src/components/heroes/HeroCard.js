import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  return (
    <div className="col-6">
      <div className="card mb-3">
        <div className="card-header">
          <img
            src={`./assets/heroes/${id}.jpg`}
            className="card-img"
            alt={superhero}
            width="150px"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title"> {superhero} </h5>
          <p className="card-text">{alter_ego}</p>
          {alter_ego !== characters && (
            <p className="card-text">{characters}</p>
          )}
          <p className="card-text">
            <small className="text-muted">{first_appearance}</small>
          </p>
          <Link
            to={`./hero/${id}`}>
            Más...
          </Link>
        </div>
      </div>
    </div>
  );

}
