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
} from "./style";

const ProductUI = (props) => {
  const onClickHandler = (e) => {
    props.onSelect(e);
    if (e.stock < 50) {
      alert("hurry! only a few items left");
    }
  };
  return (
    <div
      className="prduct--page"
      style={productPageStyle()}
      onClick={() => onClickHandler(props.object)}
    >
      <div className="product--image" style={productImageBoxStyle(props)}>
        <img
          src={`${props?.image}`}
          alt="product avatar"
          style={productImageStyle()}
        />
      </div>
      <div className="product--info" style={productInfoBoxStyle()}>
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
      </div>
    </div>
  );
};

export { ProductUI };
