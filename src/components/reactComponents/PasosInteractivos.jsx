import React, { useState } from 'react';
import PasoDetalle from './PasoDetalle.jsx';

export default function PasosInteractivos({ pasos, titulodePasos }) {
  const [pasoActivo, setPasoActivo] = useState(null);
  const [showPasos, setShowPasos] = useState(false);

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto text-center">
      {/* Título como botón para mostrar/ocultar los pasos */}
      <button
        onClick={() => setShowPasos(!showPasos)}
        className="text-5xl text-gray-600 font-bold mb-8 focus:outline-none"
      >
        {titulodePasos}
      </button>

      {/* Renderizamos la grilla de pasos solo si showPasos es true */}
      {showPasos && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {pasos.map((paso, index) => (
            <div
              key={index}
              className="cursor-pointer hover:scale-[1.02] transition-transform bg-white shadow rounded-2xl p-6 flex flex-col items-center min-h-[320px]"
              onClick={() => setPasoActivo(paso)}
            >
              <img
                src={paso.imagen}
                alt={paso.titulo}
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {paso.titulo}
              </h3>
              <p className="text-gray-600 text-sm">{paso.texto}</p>
            </div>
          ))}
        </div>
      )}

      <PasoDetalle
        visible={!!pasoActivo}
        onClose={() => setPasoActivo(null)}
        imagen={pasoActivo?.imagen}
        titulo={pasoActivo?.titulo}
        texto={pasoActivo?.texto}
        explicacion={pasoActivo?.explicacion}
      />
    </div>
  );
}
