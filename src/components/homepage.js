import * as React from "react";
import { Box, Grid, Container } from "@mui/material";
import Card from "./card";

export default function Home({ arrayMovies }) {
  return (
    <>
      <Container sx={{ mt: 10 }} maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {arrayMovies
              ? arrayMovies.map((item) => {
                  return (
                    <Grid key={item.id} item xs={6} md={3}>
                      <Card
                        title={item.title}
                        overview={item.overview}
                        poster={item.poster_path}
                        id={item.id}
                      />
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
