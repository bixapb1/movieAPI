import * as React from "react";
import { Box, Grid, Container } from "@mui/material";
import Card from "./card";

export default function Favorite({ myFavoriteList, setMyFavoriteList }) {
  return (
    <>
      <Container sx={{ mt: 10 }} maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {myFavoriteList
              ? myFavoriteList.map((item) => {
                  return (
                    <Grid key={item.id} item xs={6} md={3}>
                      <Card
                        title={item.title}
                        overview={item.overview}
                        poster={item.poster_path}
                        id={item.id}
                        handleButton={(clickId) => {
                          if (item.id === clickId) {
                            setMyFavoriteList([...myFavoriteList, item]);
                          }
                          myFavoriteList.forEach((movie) => {
                            if (movie.id === clickId) {
                              const deleteMovie = myFavoriteList.filter(
                                (el) => {
                                  return el.id !== clickId;
                                }
                              );
                              setMyFavoriteList([...deleteMovie]);
                            }
                          });
                        }}
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
