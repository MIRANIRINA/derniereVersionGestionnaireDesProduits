import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
  updateProduct,
} from "../redux/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error, searchQuery } = useSelector(
    (state) => state.products
  );
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [editableProduct, setEditableProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const query = searchQuery.toLowerCase();
      return (
        product.titre.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.prix.toString().includes(query)
      );
    });

    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditableProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    if (editableProduct) {
      dispatch(updateProduct(editableProduct));
      setEditableProduct(null);
    }
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div className="flex justify-center items-center ">
      <div className="flex justify-center items-center flex-col w-full ">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="w-full mb-4 ">
              {editableProduct && editableProduct.id === product.id ? (
                <div className="border rounded-md p-16 border-black bg-amber-200">
                  <h3 className="flex justify-center items-center flex-col font-bold text-blue-400 text-3xl mb-4">
                    Modifier le produit
                  </h3>
                  <div>
                    <div className="border p-6 border-black rounded-md space-y-2 bg-blue-300 ">
                      <label>
                        <p className="font-bold">Titre :</p>
                        <input
                          className="border border-zinc-400 rounded-r-md "
                          type="text"
                          name="titre"
                          value={editableProduct.titre}
                          onChange={handleEditChange}
                        />
                      </label>
                      <br />
                      <label>
                        <p className="font-bold">Description :</p>
                        <input
                          className="border border-zinc-400 rounded-md"
                          type="text"
                          name="description"
                          value={editableProduct.description}
                          onChange={handleEditChange}
                        />
                      </label>
                      <br />
                      <label>
                        <p className="font-bold">Prix :</p>
                        <input
                          className="border border-zinc-400 rounded-md"
                          type="number"
                          name="prix"
                          value={editableProduct.prix}
                          onChange={handleEditChange}
                        />
                      </label>
                    </div>
                    <br />
                    <br />
                    <div className="border rounded-md p-2 grid grid-flow-col gap-2 bg-slate-300 font-bold">
                      <button
                        onClick={handleUpdate}
                        className="border rounded-md bg-green-500"
                      >
                        Sauvegarder
                      </button>
                      <button
                        onClick={() => setEditableProduct(null)}
                        className="border rounded-md bg-white text-red-600"
                      >
                        Annuler
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="gap-y-2 border p-16 w-full rounded-md bg-slate-400">
                  <h3 className="font-bold text-white text-3xl">
                    {product.titre}
                  </h3>
                  <p>{product.description}</p>
                  <p className="font-bold">Prix: {product.prix} ARIARY</p>
                  <br />
                  <div className="border rounded-md p-4 grid grid-flow-col gap-2 bg-slate-300 font-bold">
                    <button
                      onClick={() => setEditableProduct(product)}
                      className="border p-2 rounded-md bg-green-400"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="border rounded-md bg-red-600 text-white"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <h1 className="text-red-700 font-bold ">Aucun produit trouvé.</h1>
        )}
      </div>
    </div>
  );
};

export default ProductList;
