import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class DynamicStep extends Component {
    chats = () => {
        let rooms = _.map(this.state.c, (room, index) => {
            var i = 0;
            i = Math.random() * 10;
            this.state.c.push([i]);

            return (
                <div key={index}>{this.state.name}
                </div>

            )
        });
        return rooms;
    };

    constructor(props) {
        super(props);

        this.state = {
            name: 1,
            roomsd: 5,
            c: [1]
        };
    }

    componentWillMount() {
        const {steps} = this.props;
        /* const {name} = steps;*/
        setInterval(() => {
            this.setState({
                name: Math.random(),

            })
        }, 2000)

    }

    render() {
        let rooms = this.chats();
        return (
            <div style={{width: '100%'}}>
                {rooms}
            </div>
        );
    }
}

export default DynamicStep;
