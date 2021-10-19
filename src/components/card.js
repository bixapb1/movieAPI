import * as React from "react";
import noPoster from "../assets/no-poster.jpg";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
  CardActions,
  Rating,
} from "@mui/material/";

export default function ActionAreaCard({
  title,
  voteAverage,
  id,
  poster,
  handleButton,
  myFavoriteList,
  setMyFavoriteList,
  removeFavorite,
  handleCard,
}) {
  return (
    <Card
      key={id}
      id={id}
      sx={{
        maxWidth: 345,
        height: "100%",
      }}
    >
      <CardActionArea
        component={Link}
        to={`/movie/${id}`}
        sx={{
          height: "95%",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
        onClick={handleCard}
      >
        <CardMedia
          component="img"
          height="auto"
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noPoster}
          alt={title}
        />
        <CardContent
          sx={{
            flexGrow: "1",
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            flexDirection: `column`,
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Rating
              name="half-rating-read"
              defaultValue={voteAverage / 2}
              precision={0.5}
              readOnly
            />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          height: "5%",
          width: "100%",
          m: "0px auto",
          p: "0px",
        }}
      >
        <Button
          id={id}
          sx={{
            height: "100%",
            width: "100%",
            flex: 1,
          }}
          size="small"
          color="primary"
          onClick={() => {
            handleButton(id);
            myFavoriteList.forEach((movie) => {
              if (movie.id === id) {
                const deleteMovie = myFavoriteList.filter((el) => {
                  return el.id !== id;
                });
                const removeMovieToStorage = [...deleteMovie];
                setMyFavoriteList(removeMovieToStorage);
                localStorage.setItem(
                  "favorite-movie",
                  JSON.stringify(removeMovieToStorage)
                );
              }
            });
          }}
        >
          {removeFavorite ? removeFavorite : "add movie"}
        </Button>
      </CardActions>
    </Card>
  );
}
