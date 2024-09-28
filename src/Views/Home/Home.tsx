import { ProgressSpinner } from "primereact/progressspinner";
import { MenuNav } from "../../Components/Generals/MenuNav/MenuNav";
import { getStoreLoader } from "../../Redux/Store";
import { useSelector } from "react-redux";


export function Home() {

  const { loader } = useSelector(getStoreLoader);

  return (
    <div className="flex flex-column w-full h-full">
      <MenuNav />
      {loader &&
        <div className="absolute top-0 left-0 w-full h-full flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
          <ProgressSpinner />
        </div>}
      {/* ROUTERCOMPONENT */}
    </div>)
}

// <ProgressSpinner />