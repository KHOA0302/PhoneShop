import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <div className={cx("wrapper")}>
        <div className={cx("wrapper-logo", { inline: true })}>
          <image src="./Images/output-onlinepngtools.png" />
        </div>
        <div className={cx("wrapper-searching", { inline: true })}>
          <input type="text" className={cx("input")} />
        </div>
        <div className={cx("wrapper-user_sidebar", { inline: true })}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </header>
  );
}

export default Header;
