import React, { useState } from 'react'

const Menu = () => {
  const [monto, setMonto] = useState(0)
  const [montoConvertido, setMontoConvertido] = useState(0)
  const [moneda, setMoneda] = useState('');

  const Conversion = (conversion) => {
    const tipoDeCambio = {
      'MXN_USD': 0.05,
      'USD_MXN': 20,
      'MXN_EUR': 0.045,
      'EUR_MXN': 22.22,
      'MXN_BTC': 0.000001,
      'BTC_MXN': 1000000,
      'MXN_ETH': 0.0005,
      'ETH_MXN': 2000,
      'MXN_DOGE': 500,
      'DOGE_MXN': 0.002,
    };

    const resultado = monto * tipoDeCambio[conversion]
    setMontoConvertido(resultado)
  };

  const monedas = {
    MXN: 'MXN',
    USD: 'USD',
    EUR: 'EUR',
    BTC: 'BTC',
    ETH: 'ETH',
    DOGE: 'DOGE',
  };

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

      {(<div className="resultado">{monto} {moneda} = {montoConvertido} {monedas[moneda]}</div>)}</div>

  );
};

export default Menu
