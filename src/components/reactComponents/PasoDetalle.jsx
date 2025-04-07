import React from "react";

export default function PasoDetalle({ visible, onClose, imagen, titulo, texto, explicacion }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-xl w-full p-6 relative animate-fade-in">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        <div className="flex flex-col items-center text-center">
          <img src={imagen} alt={titulo} className="w-20 h-20 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{titulo}</h2>
          <p className="text-gray-700 text-base mb-2">{texto}</p>
          <p className="text-gray-500 text-sm">{explicacion}</p>
        </div>
      </div>
    </div>
  );
}
