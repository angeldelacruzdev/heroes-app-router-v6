import React, { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHerobyId } from "./../../helpers/getHeroById";

export const HeroScreen = () => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHerobyId(heroId), [heroId]);

  const navigate = useNavigate();

  if (!hero) {
    return <Navigate to="/" />;
  }

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="row mt-5 animate__animated animate__fadeIn">
      <div className="col-4">
        <img
          className="img-thumbnail"
          src={`/assets/${hero.id}.jpg`}
          alt={hero.alter_ego}
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-primary" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
