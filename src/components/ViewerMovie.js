import * as React from "react";
import {
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Rating,
} from "@mui/material/";
import noPoster from "../assets/no-poster.jpg";
import { Link } from "react-router-dom";

export default function ViewerMovie({ viewerMovie }) {
  console.log(viewerMovie);
  return (
    <Grid
      sx={{
        pt: 10,
        px: 1,
        m: "auto",
        width: "100%",
      }}
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Grid xs={12} md={6}>
        <CardMedia
          sx={{
            maxWidth: 345,
            m: "0 auto",
            boxShadow: "0px 0px 10px 5px rgba(15, 15, 15, 0.44)",
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
      </Grid>

      <Grid xs={12} md={6}>
        {" "}
        <CardContent
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ m: 2, textAlign: "center" }}
            gutterBottom
            variant="h4"
            component="div"
          >
            {viewerMovie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {viewerMovie.overview}
          </Typography>
          <Typography
            sx={{ justifyContent: "flex-end" }}
            component="span"
            variant="h6"
            color="text.secondary.black"
          >
            Release date: {viewerMovie.release_date}
          </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={viewerMovie.vote_average / 2}
            precision={0.5}
            readOnly
          />
          <Button
            sx={{ m: 2 }}
            component={Link}
            to="/"
            variant="outlined"
            href="#outlined-buttons"
          >
            Home
          </Button>
        </CardContent>
      </Grid>
    </Grid>
  );
}
