import React from "react";

export default class ConfirmationModal extends React.Component {
    render() {
        return (
            <div className="modal-backdrop detail-modal-background">
                <button type="button" className="close-detail-modal close" data-dismiss="modal" aria-label="Close"
                        onClick={this.props.onHideModal}>
                    <span>&times;</span>
                </button>
                    <div className="col-sm-4 detail-modal">
                        <div>
                            <b>Successfully Edited</b>
                        </div>
                    </div>
            </div>

        )
    }
}

