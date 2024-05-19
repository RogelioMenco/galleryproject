import React from "react";
import { Link } from "react-router-dom";
import Imagen1 from "./Imagen1";
import Imagen2 from "./Imagen2";
import Imagen3 from "./Imagen3";
import Imagen4 from "./Imagen4";
import Imagen5 from "./Imagen5";
import Imagen6 from "./Imagen6";
import Imagen7 from "./Imagen7";
import Imagen8 from "./Imagen8";
import Imagen9 from "./Imagen9";
import Imagen10 from "./Imagen10";

const Navigation = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url('/path-to-your-banner-image.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-6xl font-bold drop-shadow-lg">Mi querido paisaje sucreño</h1>
          <p className="mt-4 text-xl drop-shadow-lg">Explora los lugares más hermosos de Sucre</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-10 p-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Descubre los encantos de Sucre</h2>
          <p className="mt-4 text-lg text-gray-600">Una selección de los mejores paisajes y lugares encantadores para visitar.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Link to="/Imagen1" className="group">
            <figure className="overflow-hidden border-4 border-blue-500 bg-gray-50 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              <Imagen1 className="w-full h-72 object-cover" />
              <figcaption className="text-center mt-4 font-semibold text-gray-800 group-hover:text-purple-700 transition duration-300 ease-in-out">
                Sucre Sucre
              </figcaption>
            </figure>
          </Link>

          <Link to="/Imagen2" className="group">
            <figure className="overflow-hidden border-4 border-blue-500 bg-gray-50 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              <Imagen2 className="w-full h-72 object-cover" />
              <figcaption className="text-center mt-4 font-semibold text-gray-800 group-hover:text-purple-700 transition duration-300 ease-in-out">
                Aves Silvestre
              </figcaption>
            </figure>
          </Link>

          <Link to="/Imagen3" className="group">
            <figure className="overflow-hidden border-4 border-blue-500 bg-gray-50 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              <Imagen3 className="w-full h-72 object-cover" />
              <figcaption className="text-center mt-4 font-semibold text-gray-800 group-hover:text-purple-700 transition duration-300 ease-in-out">
                Hermosas Cavañas
              </figcaption>
            </figure>
          </Link>

          <Link to="/Imagen4" className="group">
            <figure className="overflow-hidden border-4 border-blue-500 bg-gray-50 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              <Imagen4 className="w-full h-72 object-cover" />
              <figcaption className="text-center mt-4 font-semibold text-gray-800 group-hover:text-purple-700 transition duration-300 ease-in-out">
                Sucre Desde El Cielo
              </figcaption>
            </figure>
          </Link>

          <Link to="/Imagen5" className="group">
            <figure className="overflow-hidden border-4 border-blue-500 bg-gray-50 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              <Imagen5 className="w-full h-72 object-cover" />
              <figcaption className="text-center mt-4 font-semibold text-gray-800 group-hover:text-purple-700 transition duration-300 ease-in-out">
                Sus Rios 
              </figcaption>
            </figure>
          </Link>

          <Link to="/Imagen6" className="group">
            <figure className="overflow-hidden border-4 border-blue-500 bg-gray-50 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              <Imagen6 className="w-full h-72 object-cover" />
              <figcaption className="text-center mt-4 font-semibold text-gray-800 group-hover:text-purple-700 transition duration-300 ease-in-out">
                Sus Cienagas Hermosas
              </figcaption>
            </figure>
          </Link>

          <Link to="/Imagen7" className="group">
            <figure className="overflow-hidden border-4 border-blue-500 bg-gray-50 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              <Imagen7 className="w-full h-72 object-cover" />
              <figcaption className="text-center mt-4 font-semibold text-gray-800 group-hover:text-purple-700 transition duration-300 ease-in-out">
                Costa Maritima Sucreña
              </figcaption>
            </figure>
          </Link>

          <Link to="/Imagen8" className="group">
            <figure className="overflow-hidden border-4 border-blue-500 bg-gray-50 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              <Imagen8 className="w-full h-72 object-cover" />
              <figcaption className="text-center mt-4 font-semibold text-gray-800 group-hover:text-purple-700 transition duration-300 ease-in-out">
                Manantial
              </figcaption>
            </figure>
          </Link>

          <Link to="/Imagen9" className="group">
            <figure className="overflow-hidden border-4 border-blue-500 bg-gray-50 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              <Imagen9 className="w-full h-72 object-cover" />
              <figcaption className="text-center mt-4 font-semibold text-gray-800 group-hover:text-purple-700 transition duration-300 ease-in-out">
                Su Gente 
              </figcaption>
            </figure>
          </Link>

          <Link to="/Imagen10" className="group">
            <figure className="overflow-hidden border-4 border-blue-500 bg-gray-50 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              <Imagen10 className="w-full h-72 object-cover" />
              <figcaption className="text-center mt-4 font-semibold text-gray-800 group-hover:text-purple-700 transition duration-300 ease-in-out">
                Sabanas Sucreñas
              </figcaption>
            </figure>
          </Link>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 font-semibold">Por Rogelio Menco Benavides</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 Pagina Sucreña. Todos los derechos reservados.</p>
          <div className="mt-4">
            <a href="https://web.facebook.com/rogelio.mencobenavides" className="mx-2 text-gray-400 hover:text-white transition duration-300 ease-in-out">
              Facebook
            </a>
            <a href="https://github.com/RogelioMenco" className="mx-2 text-gray-400 hover:text-white transition duration-300 ease-in-out">
              Git Hub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Navigation;
