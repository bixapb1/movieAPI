import * as React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
  CardActions,
} from "@mui/material/";

export default function ActionAreaCard({
  title,
  overview,
  id,
  poster,
  handleButton,
}) {
  const [addMovie, setAddMovie] = useState(false);

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
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {overview}
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
          sx={{
            height: "100%",
            width: "100%",
            flex: 1,
          }}
          size="small"
          color="primary"
          onClick={(event) => {
            handleButton(id);
            addMovie
              ? (event.target.innerText = "Add to watch list") &&
                setAddMovie(!addMovie)
              : (event.target.innerText = "Delete to watch list") &&
                setAddMovie(!addMovie);
          }}
        >
          Add to watch list
        </Button>
      </CardActions>
    </Card>
  );
}
