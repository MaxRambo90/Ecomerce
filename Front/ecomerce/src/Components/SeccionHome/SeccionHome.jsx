import React from "react";
import Living from "../../assets/living.png";

const SeccionHome = () => {
  return (
    <div className="flex justify-center items-center h-Home w-full">
      <div className="w-wDivSecundarioHome h-hDivSecundarioHome z-100 relative">
        <img
          src={Living}
          alt="LIVING"
          className="w-full h-full flex border rounded-xl object-cover relative"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-600/50"></div>
        <h1 className="font-bold text-6xl absolute w-full top-10 left-48 text-white">
          Encuentre aqui <br /> los mejores <br />
          muebles para su hogar
        </h1>
        <p className="font-bold absolute w-full bottom-40 left-48 text-white">
          Las sillas de acento en Herman Miller incluyen un claro acento de
          diseño moderno de mediados del siglo
        </p>
        <button className="bg-slate-900 h-14 w-48 rounded-2xl text-white hover:bg-slate-400 absolute font-bold left-44 bottom-12">
          Comprar ahora
        </button>
      </div>
    </div>
  );
};

export { SeccionHome };
