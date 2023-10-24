import React, { useState } from 'react'

const Menu = () => {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [monto, setMonto] = useState(0)
  const [montoConvertido, setMontoConvertido] = useState(0)
  const [monedaSeleccionada, setMonedaSeleccionada] = useState('')

  const alternarMenu = () => {
    setMenuAbierto(!menuAbierto)
  };

  const realizarConversion = () => {
    const mxn_usd = 0.055
    const usd_mxn = 18.27
    const resultado = monto * mxn_usd
    setMontoConvertido(resultado)
  };

  const cambiarMoneda = (moneda) => {
    setMonedaSeleccionada(moneda)
    setMenuAbierto(false)
    setMonto(0)
    setMontoConvertido(0)
  };

  return (
    <div className="conversor-de-divisas">
      <button onClick={alternarMenu}>Menú de Divisas</button>

      {menuAbierto && (
        <div className="opciones-de-divisas">
          <button onClick={() => cambiarMoneda('USD')}>MXN a USD</button>
        </div>
      )}

      <div className="formulario-de-conversion">
        <input
          type="number"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          placeholder="Monto en MXN"
        />
        <button onClick={realizarConversion}>Convertir</button>
      </div>

      {(
        <div className="resultado">
          {monedaSeleccionada === 'mxn_usd' ? {monto} MXN = {montoConvertido} USD 
          : {monto} USD = {montoConvertido} MXN}
          
        </div>
      )}
    </div>
  )
}

export default Menu
