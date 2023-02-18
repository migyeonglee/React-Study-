import React, { Component } from "react";

class StateExample extends Component {
  constructor(props) {
    super(props);
    // state 정의
    this.state = {
      loading: true,
      formData: "no data",
    };
    this.handleData = this.handleData.bind(this);
    // 4 초 후에 handleData 함수 호출
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = "new data";
    const { formData } = this.state;

    // state 변경
    this.setState({
      loading: false,
      formData: data + formData,
    });
    //this.state.loading은 현재 true
    console.log("load : ", this.state.loading);
    // 이후 호출될 render() 함수에서의 this.state.loading은 false
  }

  render() {
    return (
      <>
        {/* state 데이터는 this.state로 접근 가능 */}
        <span>로딩중 : {String(this.state.loading)}</span>
        <span>결과 : {this.state.formData}</span>
      </>
    );
  }
}

export default StateExample;

/** setState() 함수의 인자로 함수 전달하면 이전 state 값을 쉽게 읽을 수 있음
 * 일반함수를 사용한 예
 * handleDate(date) {(
 *  this.setState(function(prevState){
 *    const newStete = {
 *      loading : false,
 *      formDate : data + prevState.formDate,
 *  };
 * }) ;
 * }
 *  화살표 함수 사용한 예
 *  handleData(data){
 *  this.setState(prevState) => {
 *      loading : false,
 *      formData : data + prevState.formData
 *
 * });
 * }
 *
 */
