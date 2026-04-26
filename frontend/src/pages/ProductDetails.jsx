import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {

  const { id } = useParams();

  const [img] = useState("/images/1.jpg");

  return (
    <div>

      <h1>Product ID: {id}</h1>

      <img src={img} alt="" /> {/* ✅ FIX */}

      <img src={img} alt="" />
      <img src={img} alt="" />

    </div>
  );
}