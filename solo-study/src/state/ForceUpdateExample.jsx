// 리액트 성능에 제약이 있으므로 매번 새롭게 화면을 출력해야 되는 경우가 아니라면 사용 X
import React, { Component } from "react";

class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);
    // state( 정의
    this.loading = true;
    this.formData = "no data";
    // 이후 콜백 함수를 다룰 때 bind를 선언하는 부분에 대해 다룸
    this.handleData = this.handleData.bind(this);
    // 4초 후 handleData 호출
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = "new Data";
    // state 변경
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate();
  }
  render() {
    return (
      <>
        {/* state 데이터는 this.state로 접근가능 */}
        <span>로딩중 : {String(this.loading)}</span>
        <span>결과 : {this.formData}</span>
      </>
    );
  }
}

export default ForceUpdateExample;
