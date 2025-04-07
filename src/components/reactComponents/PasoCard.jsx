import { useState } from 'react';

export default function PasoCard({ imagen, titulo, texto, explicacion }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-md p-6 text-center flex flex-col items-center cursor-pointer transition hover:scale-105 hover:shadow-lg"
      onClick={() => setAbierto(!abierto)}
    >
      <img src={imagen} alt={titulo} className="w-20 h-20 object-contain mb-4" />
      <h3 className="text-lg font-semibold mb-2">{titulo}</h3>
      <p className="text-sm text-gray-600">{texto}</p>
      
      {abierto && (
        <div className="mt-3 text-sm text-gray-500 border-t pt-3">{explicacion}</div>
      )}
    </div>
  );
}
