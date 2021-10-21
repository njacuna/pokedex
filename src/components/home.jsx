import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import GetImage from "./getImage";
import NavBar from "./navBar";

const Home = () => {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    await fetch("https://pokeapi.co/api/v2/generation/1/")
      .then((response) => response.json())
      .then((data) => {
        setPokes(data.pokemon_species);
        // console.log(data.pokemon_species);
      });
  };

  return (
    <React.Fragment>
      <NavBar />
      <ul className="list">
        {pokes.map((poke) => (
          <Link className="primary" to={`/pokemon/${poke.name}`}>
            <li className="item-list" key={poke.name}>
              {poke.name}
              <GetImage name={poke.name} />
            </li>
          </Link>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Home;
