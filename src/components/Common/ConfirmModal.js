import React from "react";
import { Modal, Button } from "react-bootstrap";
import HTMLReactParser from "html-react-parser";
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE } from "utilities/constants";

function ConfirmModal(props) {
  const { title, content, show, onAction } = props;

  return (
    <Modal
      backdrop="static"
      show={show}
      onHide={() => onAction(MODAL_ACTION_CLOSE)}
    >
      <Modal.Header closeButton>
        <Modal.Title>{HTMLReactParser(title)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{HTMLReactParser(content)}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => onAction(MODAL_ACTION_CLOSE)}
        >
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => onAction(MODAL_ACTION_CONFIRM)}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ConfirmModal;
