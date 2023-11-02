import React from "react";

const SeccionNavbar = () => {
  return (
    <div className="flex m-auto w-[90%] fixed h-20 bg-white z-200">
      <div className="flex flex-row justify-evenly w-1/2 h-full items-center">
        <div>
          <a href="#home">
            <h1 className="font-bold">Kursiku</h1>
          </a>
        </div>

        <nav className="flex ">
          <ul className="flex flex-row gap-12 font-light">
            <li className="p-2 hover:bg-slate-200 active:bg-slate-400 rounded-lg">
              <a href="#inicio">Inicio</a>
            </li>
            <li className="p-2 hover:bg-slate-200 active:bg-slate-400 rounded-lg" >
              <a href="#productos">Productos</a>
            </li>
            <li className="p-2 hover:bg-slate-200 active:bg-slate-400 rounded-lg" >
              <a href="#nuevos">Nuevos</a>
            </li>
            <li className="p-2 hover:bg-slate-200 active:bg-slate-400 rounded-lg" >
              <a href="#promo">Promo</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-row w-1/2 justify-end">
        <div className="flex flex-row justify-around gap-6 items-center ">
          <div>
            <button>
              <i class="bi bi-search text-black p-3 hover:bg-slate-200 active:bg-slate-400 rounded-lg"></i>
            </button>
            <button>
              <i class="bi bi-cart text-black p-3 hover:bg-slate-200 active:bg-slate-400 rounded-lg"></i>
            </button>
          </div>

          <div className="flex gap-3">
            <button className="p-2 rounded-lg hover:bg-slate-200 active:bg-slate-400">Registrate</button>
            <button className="bg-anotherBlack hover:bg-anotherGray text-white rounded-3xl w-28 p-2">
              Iniciar Sesion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SeccionNavbar };
