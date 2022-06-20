import React from "react";
import propTypes from "prop-types";
import { Component } from "react/cjs/react.production.min";

class MyComponent extends Component {

    static defaultProps = {
        name: '기본Props'
    };

    static ReactPropTypes = {
        name: propTypes.string
    };

    render(){
        const {name, children} = this.props; // 비구조화 할당
        return <div>안녕하세요. 제 이름은 {name} 입니다.
    <br/>children 값은 {children}입니다.
    </div>;
    }
}


export default MyComponent;