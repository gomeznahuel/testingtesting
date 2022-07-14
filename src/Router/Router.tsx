import { Routes, Route } from "react-router-dom";
import { ContactPage } from "../pages/Contact";
import { HomePage } from "../pages/Home";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};
