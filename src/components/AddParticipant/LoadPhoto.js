import React, { Component } from 'react';

class LoadPhoto extends Component {
    render() {
        
        return (
            <div>
                <input type='file' id='single' onChange={this.props.onChange} />
            </div>
        );
    }
}

export default LoadPhoto;