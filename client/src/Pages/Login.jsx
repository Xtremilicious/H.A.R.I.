import React, { Component } from "react";
import { Link } from "react-router-dom";
import Picture from "../img/doctor.png";
import { startLogin } from "../actions/auth";
import { SET_ERRORS } from "../actions/constants";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  .card-img {
    width: 100%;
  }
  .card-img-body {
    background: #2e2e2e;
  }
  .btn-login {
    background: #2e2e2e;
  }
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "123456789",
      password: "123456789",
      errors: {},
      hidden: true
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      phone: this.state.phone,
      password: this.state.password
    };
    console.log("Submitting!");
    this.props.startLogin(user);
  }

  onError() {
    return <span className="errorMessage">{this.props.error}</span>;
  }

  render() {
    return (
      <div style={{height: "90vh", overflow: "hidden", background: "#E9ECEF"}} className="d-flex justify-content-center align-items-center">
        <Wrapper className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="8">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <Form noValidate onSubmit={this.onSubmit}>
                        <h1>Login</h1>
                        <p className="text-muted">Sign in to your account</p>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            autoComplete="phone"
                            value={this.state.phone}
                            onChange={this.onChange}
                          />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            value={this.state.password}
                            onChange={this.onChange}
                          />
                        </InputGroup>
                        <Row>
                          <Col xs="6">
                            <Button type="submit" className="px-4 btn-login">
                              Login
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                  <Card
                    className="text-white card-img-body py-5 d-md-down-none"
                    style={{ width: "44%" }}
                  >
                    <CardBody className="text-center">
                      <img src={Picture} alt="" className="card-img" />
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: credentials => dispatch(startLogin(credentials)),
  unsetError: () =>
    dispatch({
      type: SET_ERRORS,
      error: ""
    })
});

const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.auth.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
