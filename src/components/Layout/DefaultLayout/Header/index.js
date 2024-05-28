import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import images from "~/assets/images";
import SearchResult from "~/components/SearchResult";
import { useState } from "react";

const cx = classNames.bind(styles);

function Header() {
  const [showResults, setShowResults] = useState(false);
  const [changingText, setChangingText] = useState("");

  const handleSearching = (e) => {
    const searchString = e.target.value;
    setChangingText(searchString);
    if (searchString.length > 0) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  return (
    <header className={cx("header")}>
      <div className={cx("wrapper")}>
        <div className={cx("wrapper-logo", { flex: true })}>
          <a href="/">
            <img src={images.logo} />
          </a>
        </div>
        <div className={cx("wrapper-searching", { flex: true })}>
          <input
            value={changingText}
            type="text"
            className={cx("input")}
            onFocus={() => {
              if (changingText.length > 0) setShowResults(true);
            }}
            onBlur={() => setShowResults(false)}
            onChange={(e) => handleSearching(e)}
          />
          <a>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>
          {showResults && <SearchResult />}
        </div>
        <div className={cx("wrapper-user_sidebar", { flex: true })}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </header>
  );
}

export default Header;
