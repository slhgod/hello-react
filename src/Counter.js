import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react/cjs/react.production.min";

class Counter extends Component {
    //컴포넌트에 state 설정할 때 constructor 메서드 작성하여 설정
    constructor(props) {
        super(props); // constructor 작성시 반드시 호출

        //state의 초기값 설정하기
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }

    state = {
        number:0,
        fixedNumber: 0
    }

    render(){
        const {number, fixedNumber} = this.state; // state를 조회할 때
    return (
        <div><h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
        onClick={()=>{
            this.setState({
                number: number +1
            },()=>{
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
            }) //this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
        }}>+1</button></div>)
    }
}

export default Counter;
