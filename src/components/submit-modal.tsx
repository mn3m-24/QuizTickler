import { useEffect, useRef, memo } from 'react';

interface SubmitModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  unansweredCount: number;
}

const SubmitModal = memo(
  ({ isOpen, onCancel, onConfirm, unansweredCount }: SubmitModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    // open/close dialog according to the isOpen state
    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;
      if (isOpen) dialog.showModal();
      else dialog.close();
    }, [isOpen]);

    return (
      <dialog ref={dialogRef} onCancel={onCancel}>
        <div>
          <h2>Finish quiz?</h2>
          <p>
            {unansweredCount > 0
              ? `You have ${unansweredCount} unanswered questions. They will be marked as incorrect.`
              : 'Are you sure you want to submit your answers?'}
          </p>
          <div>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onConfirm} autoFocus>
              Confirm Submit
            </button>
          </div>
        </div>
      </dialog>
    );
  }
);

export default SubmitModal;
