import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../../Views/Home/Home";
import { Characters } from "../../../Views/Characters/Characters";
import { Locations } from "../../../Views/Locations/Locations";
import { Episodes } from "../../../Views/Episodes/Episodes";


export function RouterComponent() {
  return (
    <div className="flex flex-column w-full h-full container">
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="/Episodes" element={<Episodes />} />
      </Routes>
    </div>);
}