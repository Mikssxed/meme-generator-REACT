import React from "react";
import { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);

  function generateRandomNumber() {
    const randomNumber = (Math.random() * allMeme.length).toFixed();
    return randomNumber;
  }

  function getMeme(e) {
    e.preventDefault();
    const url = allMeme[generateRandomNumber()].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <form>
      <div className="inputContainer">
        <input
          onChange={handleChange}
          value={meme.topText}
          name="topText"
          placeholder="Top text"
          type="text"
        />
        <input
          onChange={handleChange}
          value={meme.bottomText}
          name="bottomText"
          placeholder="Bottom text"
          type="text"
        />
      </div>
      <button onClick={getMeme}>Get a new meme image</button>
      <div className="memeContainer">
        <h2 className="top">{meme.topText}</h2>
        <h2 className="bottom">{meme.bottomText}</h2>
        <img className="memeImg" src={meme.randomImage} alt="meme" />
      </div>
    </form>
  );
}

/* 
  function add() {
    setCount(prevCount => prevCount + 1)
}
    always when using old value
*/
