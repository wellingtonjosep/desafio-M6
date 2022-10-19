import { ModalComponent } from "../Modal";
import { modalSignupInfo } from "./info";
export const ModalSignup = () => {
  return (
    <ModalComponent
      header={modalSignupInfo.header}
      title={modalSignupInfo.title}
      description={modalSignupInfo.description}
      typeModal={modalSignupInfo.typeModal}
    />
  );
};
