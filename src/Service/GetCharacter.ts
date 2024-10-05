import { gql } from "@apollo/client";
import { CharacterDTO } from "../Interfaces/CharacterDTO";
import { client } from "../Utils/GraphQL/Config";

export function getCharacter(id: number): Promise<CharacterDTO> {
  const result = `{ id, name, status, species, type, gender, image, created }`
  const GET_CHARACTER_QUERY = gql`query GetCharacter($id: ID!) { character(id: $id) ${result} }`;

  return client.query({ query: GET_CHARACTER_QUERY, variables: { id } })
    .then(response => response.data.character)
    .catch(() => null);
}