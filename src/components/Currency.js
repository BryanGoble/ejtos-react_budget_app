import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Currency = () => {
  const { currency, dispatch, currencies } = useContext(AppContext);
  const handleChange = (e) => {
    dispatch({ type: "CHG_CURRENCY", payload: e.target.value });
  };
  return (
    <select
        style={{
            backgroundColor: "#80e188",
            color: "white",
        }}
        value={currency.name} // Assuming currency.name represents the currently selected currency
        onChange={handleChange}
        className="alert currency-select"
    >
        <option hidden disabled value={currency.name}>
            Currency: ({currency.symbol} {currency.name})
        </option>
        {currencies.map((item) => (
            <option key={item.name} value={item.name}>
                {item.symbol} {item.name}
            </option>
        ))}
    </select>
  );
};

export default Currency;

// function CurrencyItem({ currentCurrency, name, symbol }) {
//   return (
//     <option
//       style={
//         currentCurrency === name
//           ? { color: "black", backgroundColor: "white" }
//           : { color: "black" }
//       }
//       value={name}
//     >
//       {symbol} {name}
//     </option>
//   );
// }