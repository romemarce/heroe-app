import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {
  const { heroeId } = useParams();

  // guarda en memoria los heroe extraido. Solo volvera a llamar la funcion si el id cambia
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  // const hero = getHeroById(heroeId);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  const handleClick = () => {
    if (history.length <= 2) {
      return history.push("/");
    } else {
      return history.goBack();
    }
  };

  return (
    <div className="row m-2">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={superhero}
        />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First apperance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button onClick={handleClick} className="btn btn-dark">
          Return
        </button>
      </div>
    </div>
  );
}
