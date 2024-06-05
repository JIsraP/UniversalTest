import { Routes, Route } from "react-router-dom";
import { Theory, Practice1 } from "../pages";

export const AppRoutes = () => {

  const renderRoutes = () => (
    <>
      <Route path="/theory" element={<Theory />} />
      {/* {/* <Route path="/products" element={<Productos />} /> */}
      <Route path="/practice1" element={<Practice1 />} /> 
      <Route path="/*" element={<Theory />} />
    </>
  );

  return (
    <Routes>
      {renderRoutes()}
    </Routes>
  );
};