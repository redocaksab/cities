import React from "react";
import { connect } from "react-redux";
import SearchPage from "./SearchPage";
import {getCountries, clearState} from "./../redux/search-reducer";


class SearchPageContainer extends React.Component {
    render() {
        return <SearchPage 
        countries={this.props.countries} 
        getCountries={this.props.getCountries} 
        clearState={this.props.clearState}/>
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.searchPage.countries,
    }
}

export default connect(mapStateToProps, {getCountries, clearState})(SearchPageContainer);