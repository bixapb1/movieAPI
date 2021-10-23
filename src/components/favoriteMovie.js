import * as React from "react";
import { Box, Grid, Container } from "@mui/material";
import Card from "./Card";

export default function Favorite({ myFavoriteList }) {
  return (
    <>
      <Container sx={{ mt: 10 }} maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            {myFavoriteList
              ? myFavoriteList.map((movie) => {
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
