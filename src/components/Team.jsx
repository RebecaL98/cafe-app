// Rebeca
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import TeamData from "../TeamData";

function Team() {
  const [index, setIndex] = useState(0);
  const data = TeamData[index];

  function handleClick() {
    setIndex((prevIndex) => (prevIndex + 1) % TeamData.length);
  }

  return (
    <div className="container-wrapper">
      <h1 className="heading" style={{ textAlign: "center" }}>
        Sweet Bliss Café Team
      </h1>
      <div
        className="team-wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Card
          className="card"
          style={{ maxWidth: "400px", marginBottom: "20px" }}
        >
          <CardContent className="top" style={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              className="name"
              sx={{ fontSize: "2rem", marginBottom: "10px" }}
            >
              {data.name}
            </Typography>
            <CardMedia
              component="img"
              className="circle-img"
              image={data.img}
              alt="avatar_img"
              sx={{
                borderRadius: "50%",
                width: "120px",
                height: "120px",
                margin: "0 auto",
              }}
            />
          </CardContent>
          <CardContent className="bottom" style={{ textAlign: "center" }}>
            <Typography variant="body1" className="info">
              Phone: {data.phone}
            </Typography>
            <Typography variant="body1" className="info">
              Email: {data.email}
            </Typography>
            <Typography variant="body1" className="info">
              {data.description}
            </Typography>
          </CardContent>
        </Card>
        <Button
          variant="contained"
          onClick={handleClick}
          style={{
            fontSize: "1.5rem",
            backgroundColor: "#fbf3ea",
            color: "black",
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Team;
