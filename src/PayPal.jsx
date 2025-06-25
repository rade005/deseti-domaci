import { useContext } from "react";
import { AmountContext, CurrencyContext } from "./App";
import { Currencies } from "./Utils/CurrencyUtil";

const PayPal = () => {
    const { currency } = useContext(CurrencyContext);
    const { amount } = useContext(AmountContext);

    const converted = (amount * Currencies[currency]).toFixed(2);

    return (
        <p>
            {amount} {currency} = {converted} RSD
        </p>
    );
};

export default PayPal;