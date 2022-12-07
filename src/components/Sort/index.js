import React from "react";

const Sorting = (props) => {
  const [defaultValue] = React.useState("");

  return (
    <form action="/action_page.php" style={{ margin: "0", padding: "0" }}>
      <select
        onChange={(e) => props.onSelect(e.target.value)}
        name="items"
        defaultValue={defaultValue}
        id="items"
        style={{ width: "110px", margin: "0", padding: "0" }}
      >
        <option value="default">Sort via</option>
        <option value="rating">Rate</option>
        <option value="pricelow">Price Low to High</option>
        <option value="pricehigh">Price High to Low</option>
        <option value="discount">Discount</option>
      </select>
    </form>
  );
};

export { Sorting };
