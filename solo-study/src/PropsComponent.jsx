import React, { Component } from 'react';
// 프로퍼티의 자료형 선언 시 prop-types 이용
import PropTypes from 'prop-types';
class PropsComponent extends Component {
    render() {
        return (
            <div className='message-container'> 
            {this.props.name}
            </div>
        );
    }
}
// 자료형 선언 예제
PropsComponent.prototypes = {
    name : PropTypes.string,
}

export default PropsComponent;

/** App.js
 *  <PropsComponent name="props string"></PropsComponent>
 */