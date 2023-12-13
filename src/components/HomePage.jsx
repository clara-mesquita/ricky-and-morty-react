import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const HomePage = () => {
  const [characterData, setCharacterData] = useState(null);

  async function getCharacter() {
    try {
      const retorno_axios = await axios({
        method: "get",
        url: "https://rickandmortyapi.com/api/character",
      });
      setCharacterData(retorno_axios.data);
      console.log(characterData)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  );
};

export default HomePage;
