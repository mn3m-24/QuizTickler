import Modal from "./ui/modal";
import Button from "./ui/button";

interface SubmitModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  handleSubmit: () => void;
}
const SubmitModal = ({
  isModalOpen,
  handleCloseModal,
  handleSubmit,
}: SubmitModalProps) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      className="mx-10 rounded p-4 flex flex-col justify-between"
    >
      <div className="p-6 flex flex-col">
        <h2 className="text-primary-foreground font-bold">Are you sure?</h2>
        <p className="text-primary-foreground">
          Once you submit, you cannot change your answers.
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-end sm:flex-row">
        <Button variant="primary" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Confirm
        </Button>
      </div>
    </Modal>
  );
};

export default SubmitModal;
