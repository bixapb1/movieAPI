import * as React from "react";
import {
  CardContent,
  CardMedia,
  Typography,
  Container,
  Box,
} from "@mui/material/";
import noPoster from "../assets/no-poster.jpg";
import { Link } from "react-router-dom";

export default function ViewerMovie({ viewerMovie }) {
  console.log(viewerMovie);
  return (
    <Container
      sx={{
        mt: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <CardMedia
          sx={{
            maxWidth: 345,
            m: "0 auto",
          }}
          component="img"
          height="auto"
          src={
            viewerMovie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${viewerMovie.poster_path}`
              : noPoster
          }
          alt={viewerMovie.title}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {viewerMovie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {viewerMovie.overview}
          </Typography>
          <Link style={{ color: "black" }} to="/">
            Home
          </Link>
        </CardContent>
      </Box>
    </Container>
  );
}
