import React from "react";
import axios from "axios";

const Hook = (setItemList, setUpdatedList, cate, brands, updatedList) => {
  React.useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then(function (response) {
        if (response?.data?.products) {
          setItemList(response.data.products);
          setUpdatedList(response.data.products);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [setItemList, setUpdatedList]);

  React.useEffect(() => {
    if (updatedList && updatedList.length) {
      updatedList.forEach((item) => {
        if (!cate?.current?.includes(item.category)) {
          cate?.current?.push(item?.category);
        }
        if (!brands?.current?.includes(item.brand)) {
          brands?.current?.push(item?.brand);
        }
      });
    }
  }, [updatedList, cate, brands]);
};

export { Hook };
