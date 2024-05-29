// Carlo
import React from "react";
import ProductList from "./ProductList";
import { Typography, Grid } from "@mui/material";
import CupcakesData from "../CupcakesData";
import MuffinsData from "../MuffinsData";

function createListCupcakes(CupcakesData, index) {
  return (
    <ProductList
      name={CupcakesData.name}
      img={CupcakesData.img}
      description={CupcakesData.description}
      price={CupcakesData.price}
    />
  );
}

function createListMuffins(MuffinsData) {
  return (
    <ProductList
      key={MuffinsData.id}
      name={MuffinsData.name}
      img={MuffinsData.img}
      description={MuffinsData.description}
      price={MuffinsData.price}
    />
  );
}

function Products() {
  return (
    <div className="container-wrapper">
      <Typography variant="h1" sx={{ fontSize: "2.5rem" }} className="heading">
        Sweet Bliss Café Selection
      </Typography>

      <Typography
        variant="h2"
        sx={{ fontSize: "1.5rem", marginBottom: "10px" }}
      >
        Cupcakes Selection
      </Typography>
      <Grid container spacing={4}>
        {CupcakesData.map(createListCupcakes)}
      </Grid>

      <Typography
        variant="h2"
        sx={{ fontSize: "1.5rem", marginBottom: "10px" }}
      >
        Muffins Selection
      </Typography>
      <Grid container spacing={4}>
        {MuffinsData.map(createListMuffins)}
      </Grid>
    </div>
  );
}

export default Products;
