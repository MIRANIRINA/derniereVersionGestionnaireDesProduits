
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { createProduct, updateProduct } from '../redux/productSlice';

const ProductForm = ({ productToEdit }) => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);


  if (productToEdit && !isEdit) {
    setValue('titre', productToEdit.titre);
    setValue('prix', productToEdit.prix);
    setValue('description', productToEdit.description);
    setIsEdit(true);
  }

  const onSubmit = (data) => {
    if (productToEdit) {
      dispatch(updateProduct({ ...data, id: productToEdit.id }));
      toast.success('Produit modifié avec succès');
    } else {
      dispatch(createProduct(data));
      toast.success('Produit ajouté avec succès');
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} class="shadow-lg rounded-md p-8 border border-zinc-500 w-full grid gap-4 grid-cols-2">
      <input {...register('titre')} placeholder="Titre" required class="border border-zinc-400 rounded-r-md"/>
      <input {...register('prix')} placeholder="Prix" type="number" required class="border border-zinc-400 rounded-r-md"/>
      <textarea {...register('description')} placeholder="Description" required class="border border-zinc-400 rounded-r-md"/>
      <button class="bg-green-500 text-white font-bold rounded-md" type="submit" >{isEdit ? 'Modifier' : 'Ajouter'}</button>
    </form>
  );
};

export default ProductForm;
