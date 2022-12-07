export const homePageStyle = () => {
  return {
    width: "100%",
    height: "100%",
    border: "1px solid red",
    boxSizing: "border-box",
    padding: "5px",
    justifyContent: "center",
    background: "rgb(255,255,255)",
    minHeight: "100vh",
  };
};

export const headerPageStyle = () => {
  return {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "5px",
    background: "rgba(20,20,20,0.1)",
  };
};

export const logoBoxStyle = () => {
  return {
    font: "600 20px Inter, sans-serif",
    margin: "0",
    padding: "0",
  };
};

export const logoTitleStyle = () => {
  return {
    // border: "1px solid black",
  };
};
export const cartBoxStyle = () => {
  return {
    // border: "1px solid black",
  };
};
export const cartIconStyle = (attachmentIconURL) => {
  return {
    width: "30px",
    height: "30px",
    display: "inline-block",
    WebkitMask: `url(${attachmentIconURL}) center center no-repeat`,
    background: "rgba(20,20,20,0.5)",
  };
};

export const homeBodyStyle = () => {
  return {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "order-box",
    margin: "0",
    pading: "0",
    flexWrap: "wrap",
  };
};
