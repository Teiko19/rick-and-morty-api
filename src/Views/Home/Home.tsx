import { CardHome } from "../../Components/Generals/CardHome/CardHome";
import { useHome } from "./useHome";

export function Home() {

  const [value] = useHome();

  return (
    <div className="flex flex-column w-full h-full view-container">
      <div className="flex flex-row w-full h-30rem justify-content-center align-items-center">
        <p className="text-6xl font-bold font-italic text-font">Rick and Morty App</p>
      </div>
      <div className="flex flex-row w-full h-full">
        {value.cardItems.map(item =>
          <CardHome
            key={item.id}
            id={item.id}
            title={item.title}
            list={item.list} />)}
      </div>
    </div>)
}