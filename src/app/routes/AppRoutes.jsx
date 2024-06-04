import { Routes, Route } from "react-router-dom";
import { Theory } from "../pages";

export const AppRoutes = () => {

  const renderRoutes = () => (
    <>
      <Route path="/theory" element={<Theory />} />
      {/* <Route path="/products" element={<Productos />} />
      <Route path="/aboutus" element={<Contacto />} /> */}
      <Route path="/*" element={<Theory />} />
    </>
  );

  return (
    <Routes>
      {renderRoutes()}
    </Routes>
  );
};