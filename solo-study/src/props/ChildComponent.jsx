import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ChildComponent extends Component {
    render() {
        const{
            boolValue,
            numValue,
            arrayValue,
            objValue,
            nodeValue,
            funcValue,
        } = this.props
        return (
        <div className='message-container'> 
            <div>불리언값 : {boolValue}</div>
            <div>숫자값 : {numValue}</div>
            <div>배열값 : {arrayValue}</div>
            <div>객체값 : {String(objValue)}</div>
            <div>노드값 : {nodeValue}</div>
            <div>함수값 : {String(funcValue)}</div>
        </div>
        );
    }
}
// 자료형 선언
// 다양한 프로퍼티 선언 시 문자열 외의 값은 "" 대신 {} 사용
ChildComponent.protoTypes = {
    boolValue : PropTypes.boll,
    numValue : PropTypes.number,
    arrayValue : PropTypes.array,
    nodeValue : PropTypes.node,
    funcValue : PropTypes.func,
}
export default ChildComponent;

/** App.js
 *  const array = [1,2,3];
    const obj = {name : 'MG', age : 23 };
    const node = <h1>node</h1>;
    const func = () => {console.log('메시지');};
 * <ChildComponent
         boolValue={true}
         numValue={1}
         arrayValue={array}
         objValue={obj}
         nodeValue={node}
         funcValue={func}
        />
 * 
 */