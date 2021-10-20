import React, { useState, useContext } from "react";
import noPoster from "../assets/no-poster.jpg";
import { Link } from "react-router-dom";
import { Context } from "../App";
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

export default function ActionAreaCard({ movie }) {
  const { title, vote_average, id, poster_path } = movie;
  const [button, setButton] = useState(true);
  const { myFavoriteList, setMyFavoriteList, setViewerMovie } =
    useContext(Context);
  function addStorageFavoritList(listMovie) {
    setMyFavoriteList(listMovie);
    localStorage.setItem("favorite-movie", JSON.stringify(listMovie));
  }

  return (
    <Card
      key={id}
      id={id}
      sx={{
        maxWidth: 300,
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
        onClick={() => {
          setViewerMovie(movie);
        }}
      >
        <CardMedia
          component="img"
          height="auto"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : noPoster
          }
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
              defaultValue={vote_average / 2}
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
            const deleteFavoriteMovie = myFavoriteList.find((movieID) => {
              return movieID.id === id;
            });
            setButton(Boolean(deleteFavoriteMovie));
            if (Boolean(deleteFavoriteMovie)) {
              const favoriteList = myFavoriteList.filter((movieID) => {
                return movieID.id !== id;
              });
              addStorageFavoritList(favoriteList);
            } else {
              const addFavoriteMovie = [...myFavoriteList, movie];
              addStorageFavoritList(addFavoriteMovie);
            }
          }}
        >
          {button ? "add movie" : "remove movie"}
        </Button>
      </CardActions>
    </Card>
  );
}
