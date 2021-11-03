import { useDispatch, useSelector } from "react-redux";
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
import { favoriteMovies } from "../redux/actions";
export default function MovieCard({ movie }) {
  const { title, vote_average, id, poster_path } = movie;
  const myFavoriteMovies = useSelector((state) => state.myFavoriteMovies);
  const dispatch = useDispatch();

  const findMovie = myFavoriteMovies.find((movieID) => {
    return movieID.id === id;
  });
  const deleteMovie = myFavoriteMovies.filter((movieID) => {
    return movieID.id !== id;
  });

  function addStorageFavoritList(listMovie) {
    dispatch(favoriteMovies(listMovie));
    localStorage.setItem("favorite-movie", JSON.stringify(listMovie));
  }

  function handleCardButton() {
    if (Boolean(findMovie)) {
      addStorageFavoritList(deleteMovie);
    } else {
      const addFavoriteMovie = [...myFavoriteMovies, movie];
      addStorageFavoritList(addFavoriteMovie);
    }
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
              defaultValue={0}
              value={vote_average / 2}
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
          onClick={handleCardButton}
        >
          {Boolean(findMovie) ? "remove movie" : "add movie"}
        </Button>
      </CardActions>
    </Card>
  );
}
