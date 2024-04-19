import React, { Component } from "react";
import { fetchCountries } from "../redux/ActionCreators";
// import { actions } from 'react-redux-form';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './HeaderComponent';
import Home from "./HomeComponent";
import CountryChart from "./Country";

const mapStateToProps = state => {
    return {
        countries: state.countries
    }
}

const mapDispatchToProps = (dispatch) =>
({
    fetchCountries: () => dispatch(fetchCountries())
});

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCountries();
    }

    render() {

        return (
            <React.Fragment>
                <Header />
                <Routes>
                    <Route path='/home' element={<Home
                        countries={this.props.countries.countries}
                        errMess={this.props.countries.errMess} isLoading={this.props.countries.isLoading} />}
                    ></Route>
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>

            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
