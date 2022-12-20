import React, { Component } from 'react';

class JSXSample extends Component {
    render() {
        return (
            // 아래는 JSX 양식
            // <img 블라블라... /> -> 마침표시가 없을경우 리액트 엔진이 JSX 분석 시 오류 발생
            <>
                <div>안녕!</div>
            </>
        );
    }
}

export default JSXSample;
