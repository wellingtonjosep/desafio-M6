import { createContext, useState } from "react";

export const ButtonTypeAdContext = createContext([]);

export const ButtonTypeAdProvider = ({ children }) => {
  const [isButtonTypeAd, setButtonTypeAd] = useState("sale");

  const changeButtonType = ({ buttonType }) => {
    setButtonTypeAd(buttonType);
  };

  const [isButtonTypeVehicle, setButtonTypeVehicle] = useState("car");

  const changeButtonTypeVehicle = ({ buttonType }) => {
    setButtonTypeVehicle(buttonType);
  };

  const [isButtonTypePubliched, setButtonTypePubliched] = useState("yes");

  const changeButtonTypePubliched = ({ buttonType }) => {
    setButtonTypePubliched(buttonType);
  };

  return (
    <ButtonTypeAdContext.Provider
      value={{
        changeButtonType,
        isButtonTypeAd,
        changeButtonTypeVehicle,
        isButtonTypeVehicle,
        isButtonTypePubliched,
        changeButtonTypePubliched,
      }}
    >
      {children}
    </ButtonTypeAdContext.Provider>
  );
};
