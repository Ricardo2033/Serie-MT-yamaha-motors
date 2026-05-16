interface legalProps {
  textoDeLegalidad: string;
}

interface FooterLink {
  nombre: string;
  url: string;
}

interface FooterSeccion {
  titulo: string;
  links: FooterLink[];
}

const Footer = ({ textoDeLegalidad }: legalProps) => {
  const seccionesFooter: FooterSeccion[] = [
    {
      titulo: "Explorar",
      links: [
        { nombre: "Inicio", url: "#" },
        { nombre: "Proyectos", url: "#proyectos" },
      ],
    },
    {
      titulo: "Redes",
      links: [
        { nombre: "GitHub", url: "https://github.com/..." },
        { nombre: "LinkedIn", url: "..." },
      ],
    },
  ];
  return (
    <footer className="relative z-20 bg-black/60 backdrop-blur-md text-white py-16 px-8 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {seccionesFooter.map((seccion) => (
          <div key={seccion.titulo} className="flex flex-col gap-4">
            <h3 className="text-blue-500 font-black italic uppercase tracking-wider text-lg">
              {seccion.titulo}
            </h3>

            <ul className="flex flex-col gap-3">
              {seccion.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-zinc-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block font-medium"
                  >
                    {link.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center md:text-left">
        <div className="text-zinc-400 italic font-medium uppercase tracking-wider text-sm">
          {textoDeLegalidad}
        </div>

        <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mt-4">
          © {new Date().getFullYear()} — HECHO CON PASIÓN POR RICARDO ALEXANDER
        </p>
      </div>
    </footer>
  );
};

export default Footer;
