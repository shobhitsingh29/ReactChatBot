import React from 'react';
import _ from "lodash"

export const emailValidator = (email) => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email) == false) {
        return false;
    }
    return true;
}


export const updateScroll = () => {
    try {
        let element = document.getElementsByClassName("messages-container");
        let ele = _.map(element, (element, index) => {
            element.scrollTop = element.scrollHeight

        });
    }
    catch
        (e) {
        console.log(e);
    }
}
