import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import styles from "./SearchPage.module.css";

const Search = (props) => {

    let countryList = [];
    let [classes, setClasses] = useState({ activeFocusForm: null, activeList: "listCountryDisabled" });
    if (props.countries.length > 0) {
        countryList = props.countries.map((item) => <NavLink to={`/countries/${item}`} className={styles.countryItem}>{item}</NavLink>)
    } else {
        countryList = <div className={styles.nothingFound}>Nothing found</div>
    }
    const countrySearch = (event, newValue) => {
        props.getCountries(newValue);
        setClasses({ activeFocusForm: "focusActive", activeList: "listCountry" })
    }

    return (
        <>
            <div className={styles.title}>Country search</div>
            <div className={styles.searchWrapper}>
                <SearchReduxForm
                    countrySearch={countrySearch}
                    activeFocusForm={classes.activeFocusForm}
                    onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget))
                            setClasses({ activeFocusForm: null, activeList: "listCountryDisabled" });
                    }}
                    onFocus={() => { setClasses({ activeFocusForm: "focusActive", activeList: "listCountry" }) }}
                    activeList={classes.activeList}
                    countryList={countryList}
                />
            </div>
        </>
    )
}

const SearchForm = (props) => {
    return (
        <form className={styles.decor} onBlur={props.onBlur}>
            <div className={styles.formInner + " " + styles[props.activeFocusForm]}>
                <Field
                    autocomplete="off"
                    placeholder="Enter the name of the country"
                    component="input"
                    name="search"
                    onChange={props.countrySearch}
                    onFocus={props.onFocus} />
                    
            </div>
            <div className={styles[props.activeList]}>{props.countryList}</div>
        </form>
    )
}


const SearchReduxForm = reduxForm({ form: "search" })(SearchForm);
export default Search;