import React, { Component } from 'react';
import'./App.css';
class TemplateString extends Component {
    render() {
        var cart = {name:'도서', price : 1500};
        var getTotal = function(cart)
        {
         return `${cart.price}원`

        };
  var myCart = `장바구니에 ${cart.name}가 있습니다.
  총 금액은 ${getTotal(cart)} 입니다.`
        return (
        <>
            <div className="App">
                <h1 className="title">react start</h1>
                <div className="title">{myCart}</div>
            </div>
        </>
        );
    }
}

export default TemplateString;

// ES6 - Template String 
// 문자열 안에 변수와 연산식 혼합 사용
// 작은 따옴포 '' 대신 백틱 `` 사용, $ 기호 사용