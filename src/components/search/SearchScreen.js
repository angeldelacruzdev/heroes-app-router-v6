import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "./../hooks/useForm";
import { getHeroesByName } from "./../../helpers/getHeroesByName";
import { HeroCard } from "./../hero/HeroCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange] = useForm({ searchText: q });

  const { searchText } = values;

  const heroesFilter = useMemo(() => getHeroesByName(searchText), [searchText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="buscar un héroe"
              name="searchText"
              autoComplete="off"
              value={values.searchText}
              onChange={handleInputChange}
            />
            <button className="btn btn-primary mt-1" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-success">Buscar héroe</div>
          ) : (
            heroesFilter.length === 0 && (
              <div className="alert alert-danger">No hay resultado: {q}</div>
            )
          )}

          {heroesFilter.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
