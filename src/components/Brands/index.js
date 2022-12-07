import React from "react";

const Brands = (props) => {
  const [defaultValue] = React.useState("all");

  let renderItems = [];
  if (props && props.brand) {
    renderItems = props?.brand?.map((item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    });
  }

  return (
    <form action="/action_page.php" style={{ margin: "0", padding: "0" }}>
      <select
        onChange={(e) => props.onSelect(e.target.value)}
        name="items"
        defaultValue={defaultValue}
        id="items"
        style={{ width: "110px", margin: "0", padding: "0" }}
      >
        <option value="default">Select brand</option>
        {renderItems}
      </select>
    </form>
  );
};

export { Brands };
