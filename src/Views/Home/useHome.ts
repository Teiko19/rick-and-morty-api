import { useEffect, useState } from "react";
import { CardHomeProps } from "../../Components/Generals/CardHome/Type";
import { UseHomeHook } from "./Type";
import { getCharacter } from "../../Service/GetCharacter";
import { useDispatch } from "react-redux";
import { setLoader } from "../../Utils/Redux/Slice/Loader/Loader";
import { getLocation } from "../../Service/GetLocation";


export function useHome(): UseHomeHook {
  const dispatch = useDispatch();
  const [cardItems, setCardItems] = useState<CardHomeProps[]>([]);

  useEffect(() => { getData() }, []);
  async function getData() {
    dispatch(setLoader(true));
    const resCharacter = await Promise.all([1,2,3,4,5].map(id => getCharacter(id)));
    const resLocation = await Promise.all([1,2,3,4,5].map(id => getLocation(id)));
    dispatch(setLoader(false));
    const arr: CardHomeProps[] = [{
      id: 1,
      title: 'Personajes',
      list: resCharacter.map((item) => { return { image: item.image, text: item.name, description: item.species, onClick: () => { console.log('click') } } })
    }, {
      id: 2,
      title: "Localizaciones",
      list: resLocation.map((item) => { return { image: "", text: item.name, description: item.dimension, onClick: () => { console.log('click') } } })
    }
  ]
    setCardItems(arr);
  }

  return [{
    cardItems
  }, {

  }, {

  }, {

  }]
}