import React from "react";

import ratingIconURL from "./resources/ratingIcon.svg";

import {
  productPageStyle,
  productImageBoxStyle,
  productImageStyle,
  productInfoBoxStyle,
  productTitleStyle,
  productRatingBoxStyle,
  productRatingTitleStyle,
  productRatingIconStyle,
  productPriceBoxStyle,
  buyerPriceTitleStyle,
  offPriceTitleStyle,
  percentOffTitleStyle,
  cartButtonsStyle,
  addCartButtonStyle,
  buyButtonStyle,
} from "./style";

const Cart = (props) => {
  const [cartItem, setCartItem] = React.useState([]);

  const addItemToCart = (e) => {
    setCartItem((old) => [...old, e]);
    let li = [...cartItem, e];
    props.onSubmit(li);
  };

  return (
    <div className="prduct--page" style={productPageStyle()}>
      <div className="add--to--cart--view">
        <div className="product--image" style={productImageBoxStyle(props)}>
          <img
            src={`${props?.image}`}
            alt="product avatar"
            style={productImageStyle()}
          />
        </div>
        <div className="product--cart" style={cartButtonsStyle()}>
          <button
            className="addto--cart"
            onClick={() => addItemToCart(props.object)}
            style={addCartButtonStyle()}
          >
            Add to Cart
          </button>
          <button className="buy--item" style={buyButtonStyle()}>
            Buy
          </button>
        </div>
      </div>
      <div className="product--info" style={productInfoBoxStyle()}>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            // border: "1px solid",
            float: "right",
            cursor: "pointer",
            zIndex: "999",
          }}
          onClick={props.onClose}
        >
          &times;
        </div>
        <div className="product--name" style={productTitleStyle()}>
          {props?.name}
        </div>
        <div className="product--rating" style={productRatingBoxStyle()}>
          <span className="rate--title" style={productRatingTitleStyle()}>
            {props?.rating}
          </span>
          <span
            className="rate--icon"
            style={productRatingIconStyle(ratingIconURL)}
          ></span>
        </div>
        <div className="product--price--box" style={productPriceBoxStyle()}>
          <p
            className="buyer--price"
            style={buyerPriceTitleStyle()}
          >{`₹ ${parseInt(
            props?.price - (props?.price * props?.offer) / 100
          )}`}</p>
          <p
            className="offer--price"
            style={offPriceTitleStyle()}
          >{`₹ ${parseInt(props?.price)}`}</p>
          <p
            className="percent--off"
            style={percentOffTitleStyle()}
          >{`${props?.offer}% off`}</p>
        </div>
        <p style={{ font: "500 12px Inter,Roboto,Arial,sans-serif" }}>
          Category: {props?.object?.category}
        </p>
        <p style={{ font: "500 14px Inter,Roboto,Arial,sans-serif" }}>
          Description: {props?.object?.description}
        </p>
      </div>
    </div>
  );
};

export { Cart };
