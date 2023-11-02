import React from "react";
import Living from "../../assets/living.png";

const SeccionHome = () => {
  return (
    <div className="flex justify-center items-center h-Home w-full">
      <div className="w-wDivSecundarioHome h-hDivSecundarioHome z-100 relative max-Celular:w-{90%}">
        <img
          src={Living}
          alt="LIVING"
          className="w-full h-full flex border rounded-xl object-cover relative"
        />
        <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-gray-600/50"></div>
        <h1 className="font-bold text-6xl absolute w-full top-10 left-48 text-white max-Celular:flex max-Celular:flex-wrap max-Celular:left-0 max-Celular:top-0 max-Celular:text-3xl max-Celular:justify-center max-Celular:items-center max-Celular:w-full">
          Encuentre aqui <br /> los mejores <br />
          muebles para su hogar
        </h1>
        <p className="font-bold absolute w-full bottom-40 left-48 text-white max-Celular:flex max-Celular:flex-wrap max-Celular:left-0 max-Celular:top-40 max-Celular:text-base max-Celular:justify-center max-Celular:items-center max-Celular:w-full">
          Las sillas de acento en Herman Miller incluyen un claro acento de
          diseño moderno de mediados del siglo
        </p>
        <button className="  text-white  absolute font-bold left-44 bottom-12 max-Celular:left-0 max-Celular:flex max-Celular:justify-center max-Celular:items-center max-Celular:w-full">
          <span className="bg-anotherGray rounded-2xl h-14 w-48 flex justify-center items-center hover:bg-gray-900 hover:delay-75">Comprar ahora</span>
        </button>
        <p className="absolute bottom-12 left-640 text-white text-lg font-bold"><span>20k</span><br /><span>Colecciones</span></p>
        <p className="absolute bottom-12 left-770 text-white text-lg font-bold"><span>16k</span><br /><span>Usuarios</span></p>
      </div>
    </div>
  );
};

export { SeccionHome };
