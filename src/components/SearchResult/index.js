import styles from "./SearchResult.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SearchResult({ results }) {
  console.log(results);
  // const renderResult = results.map((result) => {
  //   const name = result.full_name;
  //   return <li>{name}</li>;
  // });
  return (
    <div className={cx("wrapper")}>
      <div className={cx("result-searching")}>
        <ul></ul>
      </div>
    </div>
  );
}

export default SearchResult;
