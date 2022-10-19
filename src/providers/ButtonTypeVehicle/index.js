import { createContext, useState } from "react";

export const ButtonTypeVehicleContext = createContext([]);

export const ButtonTypeVehicleProvider = ({ children }) => {
  const [isButtonTypeVehicle, setButtonTypeVehicle] = useState("car");

  const changeButtonTypeVehicle = ({ buttonType }) => {
    setButtonTypeVehicle(buttonType);
  };

  return (
    <ButtonTypeVehicleContext.Provider value={{ changeButtonTypeVehicle, isButtonTypeVehicle }}>
      {children}
    </ButtonTypeVehicleContext.Provider>
  );
};
