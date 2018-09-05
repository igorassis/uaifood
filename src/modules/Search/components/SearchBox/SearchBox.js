import React, { Component } from "react";
import { reduxForm } from 'redux-form';

import styles from "./SearchBox.scss";

export class SearchBox extends Component {

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className={styles.searchBox}>
                    <input type="text" name="city" placeholder="Pesquisar" />
                    <button type="submit">Buscar</button>
                </div>
            </form>
        );
    }
}

export default SearchBox = reduxForm({
    form: 'searchBox'
})(SearchBox);
