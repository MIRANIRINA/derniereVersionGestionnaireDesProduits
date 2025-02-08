import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import NavBar from "../components/NavBar";
const ProductPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const utilisateur = localStorage.getItem("utilisateur");
    if (!utilisateur) {
      navigate("/connexion");
    }
  }, [navigate]);

  return (
    <div className="w-full min-h-screen">
      <header className="w-full flex flex-col items-center fixed top-0 left-0 right-0 z-10">
        <div className="w-full">
          <NavBar />
        </div>
        <div className="w-full bg-slate-800 py-6">
          <ProductForm />
        </div>
        <div className="w-full bg-white py-2">
          <h1 className="font-bold text-3xl text-center text-black">
            Liste des produits
          </h1>
        </div>
      </header>
      <main className="mt-24 p-4 min-h-screen flex justify-center items-center absolute top-[31%] ">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductList />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
