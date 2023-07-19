import Card2Component from "../helper/Card2Component";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useState, useEffect } from "react";
import styles from "../../css/myfile.module.css";
import { MDBIcon } from "mdb-react-ui-kit";
import Card1Component from "../helper/Card1Component";
import Productcategories from "./Productcategories";
export default function FilterBar() {
  const { width } = useWindowDimensions();
  const [isExpanded, setExpanded] = useState(false);
  const [hamburgerButton, setHamburgerButton] = useState(true);
  const [showCard2, setShowCard2] = useState(false);

  const handleToggleClick = () => {
    setExpanded(!isExpanded);
    setHamburgerButton(!hamburgerButton);
    setShowCard2(!showCard2);
  };

  useEffect(() => {
    if (width <= 768) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [width]);

  return (
    <div className="d-flex flex-nowrap">
      {!isExpanded && width > 768 && (
        <div className={`m-2 ${showCard2 && styles.stickyCard}`}>
          <Card2Component width={"300px"} />
        </div>
      )}
      <div className="m-2">
        <Productcategories width="250px" />
        <div className="d-flex justify-content-between align-items-center">
          {width <= 768 ? (
            <div className="m-3">
              <button
                className={`${styles.navIcon} ${
                  hamburgerButton
                    ? styles["animation-rotate-enter"]
                    : styles["animation-rotate-exit"]
                }`}
                onClick={handleToggleClick}
              >
                <MDBIcon icon={hamburgerButton ? "filter" : "times"} />
                <span className="icon-title p-2">
                  <b>Filter</b>
                </span>
              </button>
            </div>
          ) : null}
          <strong>Products (192)</strong>
          <div className="m-1">
            <select>
              <option value="fruit">Fruit</option>
              <option value="vegetable">Vegetable</option>
              <option value="meat">Meat</option>
            </select>
            <span>|</span>
            <MDBIcon class='fas fa-square-full'></MDBIcon>
            <MDBIcon class='fas fa-th-list'></MDBIcon>
          </div>
        </div>
        <div className={`d-flex flex-wrap position-relative`}>
          {showCard2 && (
            <div
              className={`position-absolute start-0 top-0 ${styles.overlay} ${
                showCard2
                  ? styles["animation-slide-in"]
                  : styles["animation-slide-out"]
              }`}
            >
              <Card2Component width={`${width - 50}px`} />
            </div>
          )}
          <Card1Component
            width={
              width <= 615
                ? "100%"
                : width <= 768
                ? "45%"
                : width <= 992
                ? "28%"
                : "22.2%"
            }
          />
          <Card1Component
            width={
              width <= 615
                ? "100%"
                : width <= 768
                ? "45%"
                : width <= 992
                ? "28%"
                : "22.2%"
            }
          />
          <Card1Component
            width={
              width <= 615
                ? "100%"
                : width <= 768
                ? "45%"
                : width <= 992
                ? "28%"
                : "22.2%"
            }
          />
          <Card1Component
            width={
              width <= 615
                ? "100%"
                : width <= 768
                ? "45%"
                : width <= 992
                ? "28%"
                : "22.2%"
            }
          />
          <Card1Component
            width={
              width <= 615
                ? "100%"
                : width <= 768
                ? "45%"
                : width <= 992
                ? "28%"
                : "22.2%"
            }
          />
                    <Card1Component
            width={
              width <= 615
                ? "100%"
                : width <= 768
                ? "45%"
                : width <= 992
                ? "28%"
                : "22.2%"
            }
          />
        </div>
      </div>
    </div>
  );
}
