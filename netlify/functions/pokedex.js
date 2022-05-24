import fetch from "node-fetch";

exports.handler = async function (event, ctx) {
  const eventBody = JSON.parse(event.body);

  const poke_api = `https://pokeapi.co/api/v2/pokedex/${eventBody.region}`;
  const response = await fetch(poke_api);
  const data = await response.json();
  return { statusCode: 200, body: JSON.stringify(data) };
};
