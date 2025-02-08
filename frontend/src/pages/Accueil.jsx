import React from "react";
import { Link } from "react-router-dom";

const Accueil = () => (
  <div class="flex justify-center items-center flex-col">
    <h1 class="font-semibold text-4xl">
      Bienvenue sur l'application de gestion de produits
    </h1>
    <br />
    <nav>
      <ul class="flex justify-center items-center flex-col font-bold text-1xl text-blue-400">
        <li>
          <Link to="/inscription">Inscription</Link>
        </li>
        <li>
          <Link to="/connexion">Connexion</Link>
        </li>
        <li>
          <Link to="/produits">Produits</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Accueil;
