import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
        // props 값 참조
        const name = this.props.name;
        return <span>{name}</span>
    }
}

export default MyComponent;

/*
상위 컴포넌트에서 하위 컴포넌트로 전달됨
APP > MyComponent 방향 -> "단방향으로 데이터가 흐른다" 
*/