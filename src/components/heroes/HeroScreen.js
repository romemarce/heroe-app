import React from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
  const {heroeId} = useParams()
  // console.log(heroeId);

  const hero = getHeroById(heroeId)

  if(!hero){
    return <Redirect to="/" />
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;
  return (
    <>
      <h1>HeroScreen</h1>
    </>
  );
}
