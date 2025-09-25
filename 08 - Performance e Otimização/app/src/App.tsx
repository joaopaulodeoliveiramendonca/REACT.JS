import React, { useState, useMemo } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  const calcularNumero = useMemo(() => {
    console.log('Calculando número...');
    return contador * 2;
  }, [contador]); // Só recalcula quando o contador mudar
  
  return (
    <div>
      <p>Número calculado: {calcularNumero}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default App;