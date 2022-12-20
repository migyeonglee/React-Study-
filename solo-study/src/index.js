import React from 'react';
import * as ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
// id가 root인 엘리먼트에 컴포넌트를 출력함돠
// ReactDOM.render(<App/>, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// 아래부분은 서비스워커 구동 코드로 오프라인 모드로 작동하는데 도움이 되는 모듈
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/////////////////////////////////////////////////////////////////////////////////////////
// reportWebVitals();
