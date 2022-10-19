import { ModalComponent } from "../Modal";
import { modalAdInfo } from "./info";

export const ModalAdCreated = () => {
  return (
    <ModalComponent
      header={modalAdInfo.header}
      title={modalAdInfo.title}
      description={modalAdInfo.description}
      typeModal={modalAdInfo.typeModal}
    />
  );
};
