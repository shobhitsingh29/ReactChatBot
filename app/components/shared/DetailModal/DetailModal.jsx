import React from "react";
import PropTypes from 'prop-types';

export default class DetailModal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = {};
        for (const field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        formData.imageUrl = this.props.book.imageUrl;
        formData.id = this.props.book.id;
        this.props.onEdit(formData);
    }

    render() {
        return (
            <div className="modal-backdrop detail-modal-background">
                <button type="button" className="close-detail-modal close" data-dismiss="modal" aria-label="Close"
                >
                    <span>&times;</span>
                </button>
                <form>
                    <div className="col-sm-4 detail-modal">
                        <div>
                            <div className="form-group col-sm-12">
                                <label>Description:</label>
                                <input type="text" ref="description" className="form-control" placeholder="Description"
                                       defaultValue={this.props.greetingMessage}/>
                            </div>

                        </div>
                        <div className="button_rightright">
                            <button type="submit" className="btn btn-default save_button">save
                            </button>
                            <button type="button" className="btn btn-default">cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

DetailModal.propTypes = {
    book: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onHideModal: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}
