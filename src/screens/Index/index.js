import React from "react";
import background from "resources/images/bg.jpg";
import logo from "resources/images/logo-white.jpg";
import SearchBox from "modules/Search/containers/SearchContainer";
import styles from "./Index.scss";

const Index = () => (
    <div
        className={styles.indexScreen}
        style={{ backgroundImage: `url(${background})` }}
    >
        <div className={styles.indexLogo}>
            <img src={logo} alt="alt" />
        </div>

        <div className={styles.searchWrapper}>
            <h1>Descubra os melhores restaurantes em sua cidade</h1>

            <SearchBox />
        </div>
    </div>
);

export default Index;
