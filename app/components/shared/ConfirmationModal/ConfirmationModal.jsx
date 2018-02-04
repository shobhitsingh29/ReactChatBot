import React from "react";
import PropTypes from 'prop-types';

const ConfirmationModal = (props) => (
    <div className="modal-backdrop detail-modal-background">
        <button type="button" className="close-detail-modal close" data-dismiss="modal" aria-label="Close"
            onClick={props.onHideModal}>
        </button>
        <div className="col-sm-4 detail-modal">
            <b>Successfully Edited</b>
        </div>
    </div>
);

ConfirmationModal.propTypes = {
    onHideModal : PropTypes.func.isRequired
}

export default ConfirmationModal;
