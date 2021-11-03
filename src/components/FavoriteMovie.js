import * as React from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Container } from "@mui/material";
import Card from "./Card";
export default function Favorite() {
  const myFavoriteMovies = useSelector((state) => state.myFavoriteMovies);
  return (
    <>
      <Container sx={{ mt: 10 }} maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            {myFavoriteMovies
              ? myFavoriteMovies.map((movie) => {
                  return (
                    <Grid key={movie.id} item sm={6} md={3}>
                      <Card movie={movie} />
                    </Grid>
                  );
                })
              : ""}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
