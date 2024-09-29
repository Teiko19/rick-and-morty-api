import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../../Views/Home/Home";
import { Characters } from "../../../Views/Characters/Characters";
import { Locations } from "../../../Views/Locations/Locations";
import { Episodes } from "../../../Views/Episodes/Episodes";


export function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" replace />} /> {/* Redirect to Home but in other moment will be the login */}
      <Route path="/Home" element={<Home />} />
      <Route path="/Characters" element={<Characters />} />
      <Route path="/Locations" element={<Locations />} />
      <Route path="/Episodes" element={<Episodes />} />
    </Routes>);
}