import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";

const cx = classNames.bind(styles);

function SideBar({ showSidebar, setShowSidebar }) {
  return (
    <div
      className={cx("wrapper", { showSidebar: showSidebar })}
      onClick={() => setShowSidebar(!showSidebar)}
    >
      <div
        className={cx("sidebar", { showSidebar: showSidebar })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cx("sidebar_container")}></div>
      </div>
    </div>
  );
}

export default SideBar;
