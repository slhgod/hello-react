// import React from "react";
// import Counter from "./Counter";
// import MyComponent from "./MyComponent";
// import Say from "./Say";
// import EventPractice from "./EventPractice";
// import EventPracticeFun from "./EventPracticeFun"
// import ValidationSample from "./ValidationSample";

// const App = () => {
//   // return <MyComponent name="React"/>
//   // return <MyComponent>리액트</MyComponent>
//   // return <Counter/>
//   // return <Say/>
//   // return <EventPractice/>
//   // return <EventPracticeFun/>
//   return <ValidationSample/>
// }

import React, {Component} from "react";
import IterationSample from "./IterationSample";
import ScrollBox from "./ScrollBox";
import ValidationSample from "./ValidationSample";

class App extends Component {
  render() {
    return (
      // <ValidationSample/>
      // <ScrollBox/>
      <IterationSample/>
      // <div>
      //   <ScrollBox ref={(ref) => this.ScrollBox =ref}/>
      //   <button onClick={()=> this.ScrollBox.scrollToBottom()}>맨 밑으로</button>
      //   {/* 컴포넌트가 처음 렌더링 될때는 ScrollBox가 undefined
      //   따라서 ScrollBox.scrollToBottom 값을 읽어올 때 오류가 발생
      //   화살표 함수 문법으로 아예 새로운 함수 만들어 메서드 실행 시
      //   버튼 누르기 전에 이미 한번 렌더링으로 ScrollBox가 실행되었으므로
      //   버튼 눌러서 ScrollBox.scrollToBottom 값을 읽어와도 오류 발생 없음*/}
      // </div>
    );
  }
}

export default App;
