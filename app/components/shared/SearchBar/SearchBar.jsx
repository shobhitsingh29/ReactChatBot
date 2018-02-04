import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import ChatBot from 'react-simple-chatbot';

const SearchBar = (props) =>  (
    <div className="row">
        <ChatBot steps={[
      {
        id: '2',
        options: [
          { value: 1, label: 'Number 1', trigger: '4' },
          { value: 2, label: 'Number 2', trigger: '3' },
          { value: 3, label: 'Number 3', trigger: '3' },
        ],
      },
      {
        id: '3',
        message: 'Wrong answer, try again.',
        trigger: '2',
      },
      {
        id: '4',
        message: 'Awesome! You are a telepath!',
        end: true,
      },
          ]}
        />
    </div>
);

SearchBar.propTypes = {

};

export default SearchBar;
