import React, { Component } from 'react';
import firebase from '../FireBase';
import { navigate } from '@reach/router';
import {FaArrowAltCircleRight} from 'react-icons/fa';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: null
        };
        document.body.style.backgroundColor = "red";
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({ [itemName]: itemValue });
    }

    handleSubmit(e) {
        var registrationInfo = {
            email: this.state.email,
            password: this.state.password
        };
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(
                registrationInfo.email,
                registrationInfo.password
            )
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                if (error.message !== null) {
                    this.setState({ errorMessage: error.message });
                } else {
                    this.setState({ errorMessage: null });
                }
            });
    }

    render() {
        return (
            <form className="mt-3" onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <h3 className="font-weight-light mb-3">Ingresar</h3>
                                    <section className="form-group">
                                        {this.state.errorMessage !== null ? (
                                            <h1>Error</h1>
                                        ) : null}
                                        <label
                                            className="form-control-label sr-only"
                                            htmlFor="Email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            required
                                            className="form-control"
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email test: ivans_rock96@hotmail.com"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                        />
                                    </section>
                                    <section className="form-group">
                                        <input
                                            required
                                            className="form-control"
                                            type="password"
                                            name="password"
                                            placeholder="Password: test beatles_77"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                        />
                                    </section>
                                    <div className="form-group text-right mb-0">
                                        <button className="btn btn-primary align-text-bottom" type="submit">
                                        <FaArrowAltCircleRight/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Login;