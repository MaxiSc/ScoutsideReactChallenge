import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  add,
  clear,
  toggleVisible,
  selectProducts,
  selectVisible,
  selectTotal
} from "./cartSlice";
import "./App.scss";

const dummyProduct = {
  price: 100,
  quantity: 1,
  title: "Dummy Product",
};

function App() {
  const isVisible = useSelector(selectVisible);
  const products = useSelector(selectProducts);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(toggleVisible());
  };
  return (
    <>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(add(dummyProduct))}
      >
        Add To Cart{" "}
      </button>
      <button aria-label="Decrement value" onClick={() => dispatch(clear())}>
        Clear Cart
      </button>

      <div className={`slide ${isVisible ? "active" : "inactive"}`}>
        <div className="slide__container">
          {!products.length ? (
            <div>No Products</div>
          ) : (
            <>
              <div className="slide__item__head">
                <div className="slide__item__head__title">Title</div>
                <div className="slide__item__head__price">Price</div>
                <div className="slide__item__head__quantity">Quantity</div>
              </div>
              {products.map(({ price, quantity, title }, index) => (
                <div className="slide__item">
                  <div className="slide__item__title">{title}</div>
                  <div className="slide__item__price">${price}</div>
                  <div className="slide__item__quantity">{quantity}</div>
                </div>
              ))}
              <div className="slide__footer">
                <div className="slide__footer__total">
                  Total: 
                </div>
                <span>$ {total}</span>
              </div>
            </>
          )}
        </div>
        <div className="slide__container__close" onClick={handleClose}>
          X
        </div>
      </div>
    </>
  );
}

export default App;
