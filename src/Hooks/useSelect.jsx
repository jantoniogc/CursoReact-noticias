import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

  const [state, setState] = useState(stateInicial);

  const SelectNoticias = () => (
    <select
      className="browser-default"
      onChange={ (e) => setState(e.target.value)}
      value={state}
    >
      {opciones.map(ops => (
        <option key={ops.value} value={ops.value}>{ops.label}</option>
      ))}
    </select>
  );

  return [state, SelectNoticias];
}

export default useSelect;