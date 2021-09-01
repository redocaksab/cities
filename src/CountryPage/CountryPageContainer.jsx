import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CountryPage from "./CountryPage";
import { getCountryInformation } from './../redux/country-reducer';

class CountryPageContainer extends React.Component {
    componentDidMount() {
        this.props.getCountryInformation(this.props.match.params.countryName);
    }
    render() {
        return (
            <CountryPage countryInformation={this.props.countryInformation}/>
        )
    }
}

let WithUrlDataCountryPage = withRouter(CountryPageContainer);

let mapStateToProps = (state) => {
    return {
        countryInformation: state.countryPage.countryInformation,
    }
}

export default connect(mapStateToProps, {getCountryInformation})(WithUrlDataCountryPage);