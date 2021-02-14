import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = (publisher) => {

  // guarda en memoria los heroes extraidos. Solo volvera a llamar la funcion si el publisher cambia
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  // const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="row animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
}
