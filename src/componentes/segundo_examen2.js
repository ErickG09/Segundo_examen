import React, { useState } from 'react'

const Menu = () => {
  const [monto, setMonto] = useState(0)
  const [montoConvertido, setMontoConvertido] = useState(0)
  const [moneda, setMoneda] = useState('')

  const Conversion = (conversion) => {
    const tipo_de_cambio = {
      'MXN_USD': 0.055,
      'USD_MXN': 18.27,
      'MXN_EUR': 0.052,
      'EUR_MXN': 19.35,
      'MXN_BTC': 0.0000016,
      'BTC_MXN': 615584.66,
      'MXN_ETH': 0.000031,
      'ETH_MXN': 32349.72,
      'MXN_DOGE': 0.83,
      'DOGE_MXN': 1.20,
    }

    let resultado = 0

    if (conversion in tipo_de_cambio) {
      resultado = monto * tipo_de_cambio[conversion]
    } else {
      console.error('Error');
    }

    setMontoConvertido(resultado);
  }

  const monedas = {
    MXN: 'MXN',
    USD: 'USD',
    EUR: 'EUR',
    BTC: 'BTC',
    ETH: 'ETH',
    DOGE: 'DOGE',
  }

  return (
    <div className="calculadora_divisas">
      <div className="opciones">
        <button onClick={() => Conversion('MXN_USD')}>MXN a USD</button>
        <button onClick={() => Conversion('USD_MXN')}>USD a MXN</button>
        <button onClick={() => Conversion('MXN_EUR')}>MXN a EUR</button>
        <button onClick={() => Conversion('EUR_MXN')}>EUR a MXN</button>
        <button onClick={() => Conversion('MXN_BTC')}>MXN a BTC</button>
        <button onClick={() => Conversion('BTC_MXN')}>BTC a MXN</button>
        <button onClick={() => Conversion('MXN_ETH')}>MXN a ETH</button>
        <button onClick={() => Conversion('ETH_MXN')}>ETH a MXN</button>
        <button onClick={() => Conversion('MXN_DOGE')}>MXN a DOGE</button>
        <button onClick={() => Conversion('DOGE_MXN')}>DOGE a MXN</button>
      </div>

      <div className="conversion">
        <input type="number" value={monto} onChange={(e) => setMonto(e.target.value)} placeholder={`Monto`} />
        <button onClick={() => Conversion('MXN_USD')}>Convertir</button>
      </div>

    // Esta parte no me funcionó, no me da el tipo de moneda que quiero, pero la conversión está bien
      <div className="resultado">{monto} {moneda} = {montoConvertido} {monedas[moneda]}</div>

      </div>

  )
}

export default Menu
