//Carlo
import React, { Component } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceVisible: false,
    };
  }

  togglePriceVisibility = () => {
    this.setState((prevState) => ({
      priceVisible: !prevState.priceVisible,
    }));
  };

  render() {
    const { img, name, description, price } = this.props;
    const { priceVisible } = this.state;

    return (
      <Card
        sx={{
          height: "100%",
          width: "500px",
          margin: "25px auto",
          backgroundColor: "#fbf3ea",
        }}
      >
        <CardMedia component="img" height="100%" image={img} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          {priceVisible && (
            <Typography variant="body2" color="text.secondary">
              {price}
            </Typography>
          )}
          <Button
            variant="contained"
            onClick={this.togglePriceVisibility}
            sx={{
              marginTop: "10px",
              backgroundColor: "#edcdbb",
              color: "black",
            }}
          >
            {priceVisible ? "Hide Price" : "Show Price"}
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default ProductList;
