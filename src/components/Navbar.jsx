import React, { Component } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    height: 10vh;
    background: #2E2E2E;
    color: white;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    font-size: 1.5rem;
`;


export default class Navbar extends Component {
    render() {
        return (
            <Wrapper className="">
                Health Assurance for Rural India
            </ Wrapper>
        )
    }
}
