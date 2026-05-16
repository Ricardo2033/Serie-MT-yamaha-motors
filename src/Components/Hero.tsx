interface HeaderProps {
  Titulo: string;
  onStart: () => void;
}

const Header = ({ Titulo, onStart }: HeaderProps) => {
  return (
    <header className="relative min-h-screen w-full flex items-center bg-transparent text-white">
      <nav className="absolute top-0 w-full z-20 flex justify-between items-center px-8 py-6 bg-gradient-to from-black/40 to-transparent">
        <div className="text-2xl font-bold tracking-tighter italic">
          LINEA MT DE YAMAHA
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase text-center">
          <li className="hover:text-blue-500 cursor-pointer transition-colors">
            Portafolio
          </li>
        </ul>
      </nav>
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-8">
        <div className="group cursor-default">
          <h1 className="font-black italic text-[clamp(2.5rem,10vw,9rem)] md:text-8xl uppercase tracking-tighter leading-none transition-all duration-500 group-hover:italic group-hover:tracking-normal group-hover:text-blue-500">
            {Titulo}
          </h1>

          <div className="flex items-center gap-4 mt-4 overflow-hidden">
            <div className="h-0.5 w-12 bg-blue-600 transition-all duration-500 group-hover:w-32" />
            <p className="text-sm md:text-lg font-light tracking-[0.3em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
              Revs Your Heart
            </p>
          </div>

          <button
            onClick={onStart}
            className="mt-10 px-8 py-3 bg-blue-600 text-white font-bold uppercase italic skew-x-[-15deg] hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            <span className="inline-block skew-x-15">Explorar serie MT</span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-8 z-10 text-[10px] uppercase tracking-[0.5em] opacity-30"></div>
    </header>
  );
};

export default Header;
