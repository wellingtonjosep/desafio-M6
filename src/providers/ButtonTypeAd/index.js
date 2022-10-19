import { createContext, useState } from "react";

export const ButtonTypeAdContext = createContext([]);

export const ButtonTypeAdProvider = ({ children }) => {
  const [isButtonTypeAd, setButtonTypeAd] = useState("sale");

  const changeButtonType = ({ buttonType }) => {
    setButtonTypeAd(buttonType);
  };

  return (
    <ButtonTypeAdContext.Provider value={{ changeButtonType, isButtonTypeAd }}>
      {children}
    </ButtonTypeAdContext.Provider>
  );
};
