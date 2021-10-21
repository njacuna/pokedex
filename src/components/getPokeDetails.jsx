import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GetPokeDetails = ({ match }) => {
  const [poke, setPoke] = useState([]);
  const [types, setTypes] = useState([]);
  const [name, setName] = useState([]);
  const [img, setImg] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPoke(data);
        setName(data.species);
        setTypes(data.types);
        setImg(data.sprites);
      });
  };

  return (
    <div className="box">
      <div className="box-1">
        <p className="text">{name.name}</p>
        <div className="img-sec">
          <img className="img-stat" src={img.front_default} alt="" />
          <img className="img-stat" src={img.back_default} alt="" />
        </div>
      </div>
      <div className="box-2">
        <ul className="stat-list">
          <li className="stat-list-item">
            <span>height :</span>
            <span>{poke.height}</span>
          </li>
          <li className="stat-list-item">
            <span>weight :</span>
            <span>{poke.weight}</span>
          </li>
          <li className="stat-list-item">
            <span>types :</span>
            <ul className="type-list">
              {types.map((type) => (
                <li key={type.type.name}>{type.type.name}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <Link to="/"> - Back</Link>
    </div>
  );
};

export default GetPokeDetails;
