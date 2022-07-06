import React, {Component} from "react";

class RefSample extends Component {
    // 1. 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아주어야 함
    input = React.createRef();

    handleFocus = () => {
        // ref 설정 뒤 DOM에 접근 하려면 this.input.current를 조회하면 됨
        // 콜백 함수와 다른 점은 .current
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                {/* 2. 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어주면 ref 설정완료 */}
               <input ref={this.input}/> 
            </div>
        )
    }
}

export default RefSample;