import React, { useEffect } from "react";
import AdminNav from "./AdminNav";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/products";
import UpdateProductCard from "./UpdateProductCard";
import SideBar from "./SideBar";

const Uplateproduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    /* eslint-disable-next-line */
  }, []);
  const products = useSelector((state) => state.products.products);
  return (
    <div>
      <AdminNav />
      <h1> Update product</h1>

      <div style={{ display: "flex" }}>
        <SideBar style={{ width: "10%", borderStyle: "solid" }} />
        <div style={{ width: "90%" }}>
          {products && products.map((el) => <UpdateProductCard {...el} />)}
        </div>
      </div>
    </div>
  );
};

export default Uplateproduct;
