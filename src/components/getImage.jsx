import React from "react";
import { useState, useEffect } from "react";

const GetImage = ({ name }) => {
  const [img, setImg] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setImg(data.sprites);
      });
  };
  return <img className="s-img" src={img.front_default} alt="" />;
};

export default GetImage;
