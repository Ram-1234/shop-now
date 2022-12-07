import React from "react";
import { ProductUI } from "../UI/index";
import { Cart } from "../Cart/index";

import { categoryBoxStyle, listItemsStyle } from "./style";

const AllCategory = (props) => {
  const [clicked, setClicked] = React.useState(false);
  const [object, setObj] = React.useState({});

  const handler = (object) => {
    setClicked(!clicked);
    setObj(object);
  };

  const closeHandler = () => {
    setClicked(false);
  };

  const cartSubmitHandler = (e) => {
    props.onSelect(e);
  };

  const letUI = (item, style) => {
    return (
      <ProductUI
        object={item}
        style={style}
        key={item?.id}
        name={item?.title}
        rating={item?.rating}
        stock={item?.stock}
        All={item?.category}
        image={item?.thumbnail}
        price={item?.price}
        offer={item?.discountPercentage}
        onSelect={handler}
      />
    );
  };
  let list = [];

  let renderCatgoryItems = (props) => {
    let style = {
      width: "230px",
      height: "250px",
    };
    let titleStyle = {
      textTransform: "capitalize",
      font: "500 22px Inter,Roboto,Arial,sans-serif",
      letterSpacing: "0",
      color: "#212121",
      lineHeight: "1.4",
      paddingLeft: "5%",
      margin: "10px 0",
      boxSizing: "border-box",
      float: "left",
    };
    let title = null;
    let category = null;

    for (let i = 0; i < props?.category.length; i++) {
      title = <h3 style={titleStyle}>{props?.category[i]}</h3>;
      let smallList = [];
      for (let j = 0; j < props.listItems?.length; j++) {
        if (props?.category[i] === props?.listItems[j]?.category) {
          smallList.push(letUI(props?.listItems[j], style));
        }
      }
      category = (
        <div style={categoryBoxStyle()} key={i}>
          {title}
          <div className="products--item--wrapper" style={listItemsStyle()}>
            {smallList}
          </div>
        </div>
      );

      if (smallList && smallList?.length) {
        list?.push(category);
      }
    }

    var viewStyle = {
      width: "300px",
      height: "350px",
    };

    let view = (
      <Cart
        onClose={closeHandler}
        onSubmit={cartSubmitHandler}
        style={viewStyle}
        object={object}
        key={object?.id}
        name={object?.title}
        rating={object?.rating}
        stock={object?.stock}
        All={object?.category}
        image={object?.thumbnail}
        price={object?.price}
        offer={object?.discountPercentage}
      />
    );

    return clicked ? view : list;
  };

  return renderCatgoryItems(props);
};

export { AllCategory };
