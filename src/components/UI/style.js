export const productPageStyle = () => {
  return {
    background: "rgb(255,255,255)",
    width: "fit-content",
    margin: "5px",
    border: "2px solid rgba(20,20,20,0.2)",
  };
};
export const productImageBoxStyle = (props) => {
  return {
    width: props?.style?.width || "200px",
    height: props?.style?.height || "270px",
    padding: "5px",
    boxSizing: "border-box",
  };
};
export const productImageStyle = () => {
  return {
    width: "100%",
    height: "100%",
    border: "1px solid rgba(20,20,20,0.08)",
    cursor: "pointer",
  };
};
export const productInfoBoxStyle = () => {
  return {
    padding: "5px",
  };
};

export const productTitleStyle = () => {
  return {
    font: "400 14px Inter,Roboto,Arial,sans-serif",
    letterSpacing: "0",
    lineHeight: "1.4",
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    cursor: "pointer",
  };
};

export const productRatingBoxStyle = () => {
  return {
    padding: "2px",
    background: "#388e3c",
    width: "fit-content",
    margin: "auto",
    borderRadius: "3px",
    display: "flex",
  };
};
export const productRatingTitleStyle = () => {
  return {
    lineHeight: "normal",
    display: "inline-block",
    color: "white",
    padding: "2px 4px 1px 6px",
    borderRadius: "3px",
    font: "500 12px Inter,Roboto,Arial,sans-serif",
    verticalAlign: "middle",
    backgroundColor: "#388e3c",
    letterSpacing: "0",
    margin: "0",
    boxSizing: "border-box",
  };
};

export const productRatingIconStyle = (ratingIconURL) => {
  return {
    width: "12px",
    height: "12px",
    WebkitMask: `url(${ratingIconURL}) center center no-repeat`,
    backgroundColor: "white",
    marginTop: "2px",
  };
};
export const productPriceBoxStyle = () => {
  return {
    padding: "2px",
    display: "flex",
    margin: "auto",
    width: "fit-content",
    justifyContent: "center",
    verticalAlign: "center",
  };
};
export const buyerPriceTitleStyle = () => {
  return {
    lineHeight: "1.4",
    color: "#212121",
    font: "500 16px Inter,Roboto,Arial,sans-serif",
    verticalAlign: "middle",
    letterSpacing: "0",
    margin: "0",
    boxSizing: "border-box",
  };
};
export const offPriceTitleStyle = () => {
  return {
    lineHeight: "1.4",
    color: "#878787",
    textDecoration: "line-through",
    padding: "0",
    font: "500 14px Inter,Roboto,Arial,sans-serif",
    verticalAlign: "middle",
    letterSpacing: "0",
    margin: "0 8px",
    boxSizing: "border-box",
  };
};
export const percentOffTitleStyle = () => {
  return {
    lineHeight: "1.4",
    color: "#388e3c",
    padding: "0",
    margin: "0",
    font: "500 13px Inter,Roboto,Arial,sans-serif",
    verticalAlign: "middle",
    letterSpacing: "-.2px",
    marginLeft: "8px",
    boxSizing: "border-box",
  };
};
