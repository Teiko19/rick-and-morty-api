import { gql } from "@apollo/client";
import { client } from "../Utils/GraphQL/Config";
import { LocationDTO } from "../Interfaces/LocationDTO";

export function getLocation(id: number): Promise<LocationDTO> {
  const result = `{id, name, type, dimension, created}`
  const GET_LOCATION_QUERY = gql`query GetLocation($id: ID!) { location(id: $id) ${result} }`;

  return client.query({ query: GET_LOCATION_QUERY, variables: { id } })
    .then(response => response.data.location)
    .catch(() => null);
}