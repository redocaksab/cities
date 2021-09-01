import React from "react";
import styles from "./CountryPage.module.css";

const CountryPage = (props) => {
    function isEmpty(obj) {
        for (let key in obj) {
            return false;
        }
        return true;
    }

    return (
        <>
            {!isEmpty(props.countryInformation) && <div className={styles.countryInf}>
                <div><span className={styles.categoryName}>Country name:</span> {props.countryInformation.properties.name}</div>
                <div><span className={styles.categoryName}>Capital:</span> {props.countryInformation.properties.admin_center}</div>
                <div><span className={styles.categoryName}>Country code:</span> {props.countryInformation.properties.country_code}</div>
                <div><span className={styles.categoryName}>Coordinates:</span><ul className={styles.coordinateList}>
                        <li>{props.countryInformation.geo_centroid.coordinates[0]}E</li>
                        <li>{props.countryInformation.geo_centroid.coordinates[1]}N</li>
                    </ul>
                </div>
                <div className={styles.copyright}>{props.countryInformation.properties.copyright}</div>
            </div>

            }
        </>
    )
}
export default CountryPage;