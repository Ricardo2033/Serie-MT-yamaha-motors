import { useState } from "react";

interface CardsProps {
  Subtitulo: string;
  Imagen?: string;
  ImagenHover?: string;
}

const Cards = ({ Subtitulo, Imagen, ImagenHover }: CardsProps) => {
  const [hover, sethover] = useState(false);
  return (
    <div
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
      className="max-w-sm  bg-zinc-900/40 backdrop-blur-sm  border-blue-600 px-6 py-2 border-2 hover:bg-blue-600 rounded-xl shadow-2xl hover:border-cyan-500 transition-all group m-1 text-center"
    >
      <img
        src={hover ? ImagenHover : Imagen}
        className="w-screen h-50 object-contain p-1 group-hover:scale-105 transition-transform"
        alt="Modelo MT"
      />
      <div className="p-5">
        <h5 className="font-[Rajdhani] text-2xl font-semibold text-white mb-2 uppercase tracking-wider ">
          {Subtitulo}
        </h5>
        <button className=" cursor-pointer px-6 py-3 border-2 border-blue-600 text-blue-600 font-bold uppercase italic skew-x-[-15deg] hover:bg-blue-600 hover:text-white transition-all mt-5 mb-5 group-hover:text-white" >Explorar</button>
      </div>
    </div>
  );
};

export default Cards;
