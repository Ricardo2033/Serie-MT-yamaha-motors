import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-1000 flex flex-col"
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full flex flex-col p-6 md:p-12 overflow-y-auto custom-scrollbar"
          >
            <div className="flex justify-between items-center border-b border-zinc-800 pb-6 mb-6 shrink-0">
              <h3 className="text-white font-[Rajdhani] text-3xl md:text-4xl font-semibold uppercase tracking-widest italic flex items-center gap-3">
                {title}
              </h3>

              <button
                onClick={onClose}
                className="text-zinc-400 hover:text-white border border-zinc-800 hover:border-blue-600 px-4 py-2 font-[Rajdhani] text-sm font-semibold uppercase tracking-widest italic skew-x-[-15deg] transition-all bg-zinc-900/50"
              >
                <span className="inline-block skew-x-15">Cerrar</span>
              </button>
            </div>

            <div className="text-zinc-300 grow">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Modal;
