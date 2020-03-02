import React, { Component } from 'react'
import LoadingIcon from '../../images/loading.png'
class Loading extends Component {
    render () {
        return (
            <img class="loading-icon" src={LoadingIcon} />
            );
        }
    };

export default Loading