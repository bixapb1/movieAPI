import * as React from "react";
import { Box, Grid, Container } from "@mui/material";
import Card from "./Card";

export default function Home({ arrayMovies }) {
  return (
    <>
      <Container sx={{ mt: 10 }} maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {arrayMovies
              ? arrayMovies.map((movie) => {
                  return (
                    <Grid key={movie.id} item xs={6} md={3}>
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
