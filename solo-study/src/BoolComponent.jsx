// 불리언 프로퍼티
// true 와 false만 정의 
// true -> <BoolComponent boolvalue/>
// false -> <BoolComponent />
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
class BoolComponent extends Component {
    render() {
        const message = this.props.bored ? '놀러가자' : '하던 일 마무리하자';
        return (
            <div>
                {message}
            </div>
        );
    }
}

export default BoolComponent;
