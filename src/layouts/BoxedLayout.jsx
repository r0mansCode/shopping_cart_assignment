import React, { Component } from 'react'
import { Header } from "../components/Header/Header";

export class BoxedLayout extends Component {
    render() {
        return (
            <div className="boxed-layout">
                <div className="boxed-layout__container">
                    <Header />
                    <div className="main-content">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default BoxedLayout;