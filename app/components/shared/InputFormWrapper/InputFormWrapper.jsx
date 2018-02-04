import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import InputForm from "../InputForm";

class InputFormWrapper extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <InputForm {...this.props}/>
            </div>
        );
    }
}

export default InputFormWrapper;
