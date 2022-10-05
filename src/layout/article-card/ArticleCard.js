import React, { useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import { Grid, Skeleton } from "@mui/material";
import "./ArticleCard.scss";
import { NoImageSVG } from "../../assets/icons/svg";

export function ArticleCard(props) {
  const { title, desc, media } = props;
  return (
    <div className="article-card-container prime-container">
      <div className="article-card-title">
        <NoImageSVG style={{ width: "100%" }} />

        <h2>{title}</h2>
      </div>
      <div className="article-card-body">
        <p>{desc}</p>
      </div>
      <div className="article-card-footer"></div>
    </div>
  );
}
export function ArticleCardSkeleton(props) {
  return (
    <>
      {Array(props.count)
        .fill()
        .map((val, key) => (
          <Grid item xs={2} sm={5} md={3} key={key}>
            <div className="article-card-container" key={key}>
              <Skeleton
                animation="wave"
                variant="square"
                sx={{ height: "134px", width: "100%" }}
              />

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ fontSize: "2rem", width: "100%" }}
                />
              </div>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "2rem", width: "30%" }}
              />
            </div>
          </Grid>
        ))}
    </>
  );
}
