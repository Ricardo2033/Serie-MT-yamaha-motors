import { motion, AnimatePresence } from "framer-motion";
import Header from "./Components/Hero";
import hero from "../src/assets/Motos/mt 03/hero.jpg";
const Cards = lazy(() => import("./Components/Cards"));
const Modal = lazy(() => import("./Components/Modal"));
const Footer = lazy(() => import("./Components/Footer"));
import { useState, lazy, Suspense } from "react";
import mt15 from "./assets/Motos/mt 15/mt-15.webp";
import mt15Hover from "./assets/Motos/mt 15/mt-15-hover.webp";
import mt15HeroModal from "./assets/Motos/mt 15/wp11684329.webp";
import mt25 from "./assets/Motos/mt25/mt-25.webp";
import mt25Hover from "./assets/Motos/mt25/mt-25-hover.webp";
import mt25HeroModal from "./assets/Motos/mt25/wp7418905.webp";
import mt03 from "./assets/Motos/mt 03/MT-03.webp";
import mt03Hover from "./assets/Motos/mt 03/MT-03-HOVER.webp";
import mt03HeroModal from "./assets/Motos/mt 03/wp7003814.webp";
import mt07 from "./assets/Motos/mt 07/mt 07.webp";
import mt07Hover from "./assets/Motos/mt 07/mt-07-hover.png";
import mt07HeroModal from "./assets/Motos/mt 07/2321624.webp";
import mt09 from "./assets/Motos/mt 09/mt 09.webp";
import mt09Hover from "./assets/Motos/mt 09/mt-09-hover.webp";
import mt09HeroModal from "./assets/Motos/mt 09/thumb-1920-958101.webp";
import mt10 from "./assets/Motos/mt 10/mt 10.webp";
import mt10Hover from "./assets/Motos/mt 10/mt-10-hover.webp";
import mt10HeroModal from "./assets/Motos/mt 10/yamaha-mt-10-2017-wide.webp";
import FondoCards from "../public/carsd-f.png";

  interface Moto {
    id: number;
    nombre: string;
    img: string;
    imgHover: string;
    imgHeroModal: string;
    imgModal?: string;
    img1?: string;
    titulo: string;
    motor: string;
    peso: string;
    valvulas: string;
    potencia: string;
    torque: string;
    tecnologias: string[];
    descripcion?: string;
  }

const SerieMt = [
  {
    id: 1,
    nombre: "MT-15",
    img: mt15,
    imgHover: mt15Hover,
    imgHeroModal: mt15HeroModal,
    img1: mt15Hover,
    titulo: "Rendimiento Hiper-Naked a Escala",
    motor: "Monocilíndrico de 155 cc",
    peso: "141 kg",
    valvulas: "4",
    potencia: "18.4 hp a 10,000 rpm",
    torque: "14.1 Nm a 7,500 rpm",
    tecnologias: [
      "Sistema VVA (Apertura Variable de Válvulas)",
      "embrague antirrebote (Assist & Slipper)",
      "TCS (Traction Control System)",
    ],
  },
  {
    id: 2,
    nombre: "MT-25",
    img: mt25,
    imgHover: mt25Hover,
    imgHeroModal: mt25HeroModal,
    img1: mt25Hover,
    titulo: "Diseñada para Escapar de la Rutina",
    motor: "Bicilíndrico en línea, 249 cc, 4 tiempos",
    peso: "167 kg",
    valvulas: "8",
    potencia: "35.5 hp a 12,000 rpm",
    torque: "22.6 Nm a 10,000 rpm",
    tecnologias: [
      "Cilindros de Aluminio DiASil",
      "Pistones Forjados de Aluminio",
      "Iluminación LED con Predator Look",
      "Inyección Electrónica Avanzada (TCI)",
    ],
  },
  {
    id: 3,
    nombre: "MT-03",
    img: mt03,
    imgHover: mt03Hover,
    imgHeroModal: mt03HeroModal,
    imgModal: mt03Hover,
    titulo: "El Equilibrio Perfecto entre Agilidad y Potencia",
    motor: "Bicilíndrico en línea de 321 cc,",
    peso: "168kg",
    valvulas: "8",
    potencia: "42.0 hp a 10,750 rpm",
    torque: "29.5 Nm de torque a 9,000 rpm",
    tecnologias: [
      "Pistones de Aluminio Forjado",
      "Cilindros DiASil",
      "Inyección Electrónica de 12 Agujeros",
    ],
  },
  {
    id: 4,
    nombre: "MT-07",
    img: mt07,
    imgHover: mt07Hover,
    imgHeroModal: mt07HeroModal,
    imgModal: mt07Hover,
    img1: mt07Hover,
    titulo: "La Máquina de Sonrisas Definitiva",
    motor: "Bicilíndrico en línea CP2 de 689 cc",
    peso: "183 kg",
    valvulas: "8",
    potencia: "73.8 hp a 9,000 rpm",
    torque: "67 Nm de torque a 6,500 rpm",
    tecnologias: [
      "Acelerador Electrónico YCC-T (Yamaha Chip Controlled Throttle)",
      "Modos de Entrega de Potencia (D-Mode)",
    ],
  },
  {
    id: 5,
    nombre: "MT-09",
    img: mt09,
    imgHover: mt09Hover,
    imgHeroModal: mt09HeroModal,
    imgModal: mt09Hover,
    img1: mt09Hover,
    titulo: "El Poder Descomunal del Motor Tricilíndrico",
    motor: "Tricilíndrico en línea CP3 de 890 cc",
    peso: "193 kg",
    valvulas: "12 ",
    potencia: "119 hp a 10,000 rpm",
    torque: "93 Nm de torque a 7,000 rpm",
    tecnologias: [
      "IMU de 6 Ejes (Inertial Measurement Unit)",
      "Electrónica Predictiva sensible a la inclinación",
      "Quickshifter Bidireccional (QSS)",
      "Bomba de Freno Radial Brembo",
    ],
  },
  {
    id: 6,
    nombre: "MT-10",
    img: mt10,
    imgHover: mt10Hover,
    imgHeroModal: mt10HeroModal,
    imgModal: mt10Hover,
    img1: mt10Hover,
    titulo: "El Rey de las Master of Torque",
    motor: "Tetracilíndrico en línea CP4 de 998 cc",
    peso: "214 kg",
    valvulas: "16 ",
    potencia: "165.9 hp a 11,500 rpm",
    torque: "112 Nm de torque a 9,000 rpm",
    tecnologias: [
      "Cigüeñal Crossplane CP4",
      "Bielas de Acero Fracturadas por Cementación",
      "Módulo Electrónico Avanzado (YRC)",
      "Pantalla TFT a color con Conectividad",
    ],
  },
];

function App() {
  const [tarjetaVisible, setTarjetaVisible] = useState(false);

  const handleVisibilidadDeTarjetas = () => {
    window.scrollTo(0, 0);
    setTarjetaVisible(true);
  };

  const handleVolver = () => {
    setTarjetaVisible(false);
  };

  const currentBg = tarjetaVisible ? FondoCards : hero;

  const [selecMoto, setSelecMoto] = useState<Moto | null>(null);

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col overflow-x-hidden">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${currentBg})`,
          filter: tarjetaVisible
            ? "brightness(0.3) blur(4px)"
            : "brightness(0.6)",
        }}
      />
      <Suspense
        fallback={
          <div className="text-white text-center py-20 font-[Rajdhani]">
            Cargando contenido...
          </div>
        }
      >
        <main className="relative z-10 grow ">
          <AnimatePresence mode="wait">
            {!tarjetaVisible ? (
              <motion.div
                key="header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Header
                  onStart={handleVisibilidadDeTarjetas}
                  Titulo="Ingeniería que Emociona"
                />
              </motion.div>
            ) : (
              <motion.div
                key="cards"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0px 0px 20px rgba(37, 99, 235, 0.4)",
                }}
                className="flex flex-col items-center py-10 px-4"
              >
                <button
                  onClick={handleVolver}
                  className="px-6 py-2 border-2 border-blue-600 text-blue-600 font-bold uppercase italic skew-x-[-15deg] hover:bg-blue-600 hover:text-white transition-all mt-5 mb-10"
                >
                  <span className="inline-block skew-x-15deg">← Volver</span>
                </button>

                <div className="flex gap-6 flex-row flex-wrap justify-center items-stretch max-w-7xl mx-auto">
                  {SerieMt.map((motos) => (
                    <div
                      onClick={() => setSelecMoto(motos)}
                      className="cursor-pointer"
                      key={motos.id}
                    >
                      <Cards
                        Subtitulo={motos.nombre}
                        Imagen={motos.img}
                        ImagenHover={motos.imgHover}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer textoDeLegalidad="Este sitio es un proyecto educativo." />

        <Modal isOpen={selecMoto !== null} onClose={() => setSelecMoto(null)}>
          {selecMoto && (
            <div className="flex flex-col w-full bg-black">
              {/* --- SECCIÓN HERO MODAL --- */}
              <section className="relative w-full h-screen md:h-screen overflow-hidden shrink-0">
                <img
                  src={selecMoto.imgHeroModal}
                  alt={selecMoto.nombre}
                  className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.95] contrast-[1.10] rounded-2xl"
                />

                <div className="absolute inset-0 bg-gradient-to from-black/90 via-black/60 to-transparent z-10" />

                {/* Contenedor de Textos */}
                <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-20 lg:px-32">
                  {/* Título Principal */}
                  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-[Rajdhani] font-black text-white italic uppercase leading-[0.95] tracking-tighter mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] wrap-break-words">
                    {selecMoto.nombre} <br />
                    <span className="text-zinc-500/40 text-xl sm:text-3xl md:text-5xl lg:text-6xl block mt-2 leading-tight">
                      {selecMoto.titulo}
                    </span>
                  </h1>

                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-12 h-5 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
                    <p className="text-zinc-300 font-medium tracking-[0.2em] text-sm md:text-lg uppercase italic">
                      Revs Your Heart
                    </p>
                  </div>
                  <div className="flex"></div>
                </div>

                <div className="absolute bottom-10 right-10 z-20 hidden md:block">
                  <p className="font-[Rajdhani] text-zinc-600 text-xs tracking-[0.5em] uppercase vertical-text opacity-60">
                    Yamaha Motor Japan // 2026
                  </p>
                </div>
              </section>

              {/* --- SECCIÓN DE CONTENIDO --- */}
              <section className="w-full py-20 px-6 md:px-20 bg-black border-t border-zinc-900/80">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                  {/* Lado izquierdo: Descripción */}
                  <div className="space-y-6">
                    <h2 className="text-blue-500 font-[Rajdhani] text-2xl font-bold uppercase italic tracking-wider">
                      El ADN Dark Side of Japan
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed font-light">
                      {selecMoto.descripcion ||
                        "Diseñada para dominar las calles con un torque agresivo y una agilidad sin precedentes."}
                    </p>
                    <img
                      src={selecMoto.img1}
                      alt=""
                      className="w-full h-auto transform transition-transform duration-300 ease-out hover:scale-105"
                    />
                    <img
                      src={selecMoto.img}
                      alt=""
                      className="w-full h-auto transform transition-transform duration-300 ease-out hover:scale-105"
                    />
                  </div>

                  {/* Lado derecho: Ficha rápida */}
                  <div className="grid grid-cols-2 gap-4 h-5">
                    <div className="bg-zinc-900/30 p-6 border-l-2 border-blue-600 backdrop-blur-sm">
                      <span className="text-white text-xs uppercase block mb-5">
                        Cilindrada
                      </span>
                      <span className="text-zinc-400 text-[10px] md:text-xs uppercase block mb-2 md:mb-4 tracking-widest">
                        {selecMoto.motor}
                      </span>
                    </div>
                    <div className="bg-zinc-900/30 p-6 border-l-2 border-blue-600 backdrop-blur-sm">
                      <span className="text-white text-xs uppercase block mb-5">
                        Peso
                      </span>
                      <span className="text-white text-2xl font-bold font-[Rajdhani] italic">
                        {selecMoto.peso || "189"} KG
                      </span>
                    </div>
                    <div className="bg-zinc-900/30 p-6 border-l-2 border-blue-600 backdrop-blur-sm">
                      <span className="text-zinc-400 text-[10px] md:text-xs uppercase block mb-2 md:mb-4 tracking-widest">
                        Valvulas
                      </span>
                      <span className="text-white text-2xl font-bold font-[Rajdhani] italic">
                        {selecMoto.valvulas}
                      </span>
                    </div>
                    <div className="bg-zinc-900/30 p-6 border-l-2 border-blue-600 backdrop-blur-sm">
                      <span className="text-white text-xs uppercase block mb-5">
                        Potencia
                      </span>
                      <span className="text-white text-2xl font-bold font-[Rajdhani] italic">
                        {selecMoto.potencia}
                      </span>
                    </div>
                    <div className="bg-zinc-900/30 p-6 border-l-2 border-blue-600 backdrop-blur-sm">
                      <span className="text-zinc-400 text-[10px] md:text-xs uppercase block mb-2 md:mb-4 tracking-widest">
                        Torque
                      </span>
                      <span className="text-white text-2xl font-bold font-[Rajdhani] italic">
                        {selecMoto.torque}
                      </span>
                    </div>
                    <div className="bg-zinc-900/30 p-6 border-l-2 border-blue-600 backdrop-blur-sm">
                      <span className="text-white text-xs uppercase block mb-5">
                        Tecnologias
                      </span>
                      <span className="text-white text-2xl font-bold font-[Rajdhani] italic">
                        <div className="flex flex-col gap-2.5">
                          {selecMoto.tecnologias &&
                          typeof selecMoto.tecnologias === "object" ? (
                            Object.values(selecMoto.tecnologias).map(
                              (tecnologia, index) => (
                                <span
                                  key={index}
                                  className="text-white text-xs md:text-sm font-bold font-[Rajdhani] italic leading-tight block border-l border-blue-500 pl-2 tracking-wide"
                                >
                                  {String(tecnologia)}
                                </span>
                              ),
                            )
                          ) : (
                            <span className="text-zinc-600 text-xs font-bold font-[Rajdhani] italic tracking-widest">
                              SISTEMA ESTÁNDAR MT
                            </span>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </Modal>
      </Suspense>
    </div>
  );
}

export default App;
