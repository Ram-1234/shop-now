import React from "react";
import { Hook } from "./hook";

import cartIconURL from "./resources/cart-icon.svg";

import { AllCategory } from "../AllCategory";
import { Brands } from "../Brands";
import { Category } from "../Category/index";
import { Sorting } from "../Sort";

import {
  homePageStyle,
  headerPageStyle,
  logoBoxStyle,
  logoTitleStyle,
  cartBoxStyle,
  cartIconStyle,
  homeBodyStyle,
} from "./style";

const Home = () => {
  const [listItems, setItemList] = React.useState([]);
  const [updatedList, setUpdatedList] = React.useState([]);
  const [cartItem, setCartItem] = React.useState(0);
  let cate = React.useRef([]);
  let brands = React.useRef([]);

  /**
   *
   * brand select handler
   */
  const brandHandler = (brand) => {
    if (brand && brand?.length) {
      let list = [];
      listItems?.forEach((item, index) => {
        if (item?.brand?.toLowerCase() === brand?.toLowerCase()) {
          list.push(item);
        }
      });
      setUpdatedList(list);
    }
  };

  /***
   * category select handler
   */
  const categoryHandler = (category) => {
    if (category && category?.length) {
      let list = [];
      listItems?.forEach((item, index) => {
        if (item?.category?.toLowerCase() === category?.toLowerCase()) {
          list.push(item);
        }
      });
      setUpdatedList(list);
    }
  };

  /**
   * sorting handler
   */
  const sortingHandler = async (via) => {
    if (via === "pricelow") {
      setUpdatedList([...updatedList?.sort((a, b) => a?.price > b?.price)]);
    } else if (via === "pricehigh") {
      setUpdatedList([...updatedList?.sort((a, b) => a?.price < b?.price)]);
    } else if (via === "discount") {
      setUpdatedList([
        ...updatedList?.sort(
          (a, b) => a?.discountPercentage < b?.discountPercentage
        ),
      ]);
    } else if (via === "rating") {
      setUpdatedList([...updatedList?.sort((a, b) => a?.rating < b?.rating)]);
    }
  };

  /***
   * all category clikc handler
   */
  const allCategoryHandler = (e) => {
    setCartItem(e.length);
  };
  Hook(setItemList, setUpdatedList, cate, brands, updatedList);

  return (
    <div className="home--page" style={homePageStyle()}>
      <div className="header--page" style={headerPageStyle()}>
        <div className="logo--box" style={logoBoxStyle()}>
          <h1 className="logo--title" style={logoTitleStyle()}>
            Shop<span style={{ color: "red" }}>Now</span>
          </h1>
        </div>
        <div style={{ display: "flex" }}>
          <Brands
            onSelect={brandHandler}
            brand={brands?.current}
            category={cate?.current}
          />
          <Category
            brand={brands?.current}
            category={cate?.current}
            onSelect={categoryHandler}
          />
        </div>
        <Sorting onSelect={sortingHandler} />
        <div className="cart--box" style={cartBoxStyle()}>
          <span className="cart" style={cartIconStyle(cartIconURL)}></span>
          <span
            style={{
              color: "red",
              font: "400 14px Inter,Roboto,Arial,sans-serif",
              position: "relative",
              top: "-25px",
              left: "-15px",
            }}
          >
            {cartItem}
          </span>
        </div>
      </div>
      <div className="home--body" style={homeBodyStyle()}>
        <AllCategory
          category={cate?.current}
          brand={brands?.current}
          listItems={updatedList}
          onSelect={allCategoryHandler}
        />
      </div>
    </div>
  );
};

export { Home };
