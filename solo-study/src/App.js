import React from 'react'
import './App.css';
import BoolComponent from './props/BoolComponent';
import ChildComponent2 from './props/ChildComponent2';
import DefaultPropsComponent from './props/DefaultPropsComponent';
import ChildProperty from './props/ChildProperty';
class App extends React.Component {
  render() {
   
    return (
      <>
        <h1>Boolean</h1>
        <div><b>지루할 때 : </b><BoolComponent bored/></div>
        <div><b>즐거울 때 : </b><BoolComponent /></div> 
        <hr />
        <h1>필수 프로퍼티</h1>
        <ChildComponent2 objValue={{age:'20살'}} requiredStringValue="문자"/>
        <hr />
        <h1>프로퍼티 기본값 지정</h1>
        <DefaultPropsComponent/>
        <hr />
        <h1>자식 프로퍼티 사용</h1>
        <ChildProperty>
          <div><span>자식노드</span></div>
        </ChildProperty>

      </>
    )
  }
}
export default App;