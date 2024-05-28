import styles from "./SearchResult.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SearchResult() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("result-searching")}></div>
    </div>
  );
}

export default SearchResult;
