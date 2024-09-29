import { gql, useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { setLoader } from "../Utils/Redux/Slice/Loader/Loader";
import { Character } from "../Interfaces/Characters";

const dispatch = useDispatch();

export function getCharacters(filter: Character | {} = {}, page: number = 1) {
  const info = `{count, pages, next, prev}`
  const result = `{id, name, status, species, type, gender, image, created}`
  const getCharacters = gql`query {
    characters(page: ${page}, filter: ${filter}) {
      info ${info}
      results ${result}
    }
  }`;
  const { loading, error, data } = useQuery(getCharacters, {
    onCompleted: () => dispatch(setLoader(false)),
    onError: () => dispatch(setLoader(false)),
  });
  loading && dispatch(setLoader(true));
  if (error) return [];
  return data ? data.characters.results : []
}