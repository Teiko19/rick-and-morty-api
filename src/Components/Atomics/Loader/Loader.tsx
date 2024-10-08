import { ProgressSpinner } from "primereact/progressspinner";
import { useSelector } from "react-redux";
import { getStoreLoader } from "../../../Utils/Redux/Store";


export function Loader() {

  const { loader } = useSelector(getStoreLoader);

  return loader &&
    <div className="absolute top-0 left-0 w-full h-full flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
      <ProgressSpinner />
    </div>
}