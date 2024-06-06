import { Routes, Route } from "react-router-dom";
import { Theory, Practice1, Practice2 } from "../pages";

export const AppRoutes = () => {

  const renderRoutes = () => (
    <>
      <Route path="/theory" element={<Theory />} />
      <Route path="/practice1" element={<Practice1 />} /> 
      <Route path="/practice2" element={<Practice2 />} />
      <Route path="/*" element={<Theory />} />
    </>
  );

  return (
    <Routes>
      {renderRoutes()}
    </Routes>
  );
};