import React from "react";

const Category = (props) => {
  const [defaultValue] = React.useState("all");

  let renderItems = [];
  if (props && props.category) {
    renderItems = props?.category?.map((item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    });
  }

  return (
    <form
      action="/action_page.php"
      style={{ marginLeft: "10px", padding: "0" }}
    >
      <select
        onChange={(e) => props.onSelect(e.target.value)}
        name="items"
        defaultValue={defaultValue}
        id="items"
        style={{ width: "130px", margin: "0", padding: "0" }}
      >
        <option value="default">Select category</option>
        {renderItems}
      </select>
    </form>
  );
};

export { Category };
