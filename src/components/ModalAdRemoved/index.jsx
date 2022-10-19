import { ModalComponent } from "../Modal";
import { modalAdRemovedInfo } from "./info";

export const ModalAdRemoved = () => {
  return (
    <ModalComponent
      header={modalAdRemovedInfo.header}
      title={modalAdRemovedInfo.title}
      description={modalAdRemovedInfo.description}
      typeModal={modalAdRemovedInfo.typeModal}
    />
  );
};
