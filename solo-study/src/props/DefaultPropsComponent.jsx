import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultPropsComponent extends Component {
    render() {
        let message1 = '';
        if(this.props.boolValue === false){
            message1 = 'boolValue 기본값이 false입니다.';
        }
        let message2 = '';
        if(this.props.boolValueWithDefault === false){
            message2 = 'boolValueWithDefault 기본값이 false입니다.';
        }
        return (
            <>
               {message1} 
               {message2} 
            </>
        );
    }
}
DefaultPropsComponent.protoTypes = {
    boolValue : PropTypes.bool,
    boolValueWithDefault:PropTypes.bool,
}
// 기본값 선언
DefaultPropsComponent.defaultProps={
    boolValue:false,
}
export default DefaultPropsComponent;