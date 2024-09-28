import { ProgressSpinner } from "primereact/progressspinner";


export function Loader() {



  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
      <ProgressSpinner />
    </div>)
}