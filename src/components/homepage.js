import * as React from "react";
import { Box, Grid, Container } from "@mui/material";
import Card from "./card";

export default function Home({
  arrayMovies,
  myFavoriteList,
  setMyFavoriteList,
  setViewerMovie,
}) {
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
                        voteAverage={item.vote_average}
                        poster={item.poster_path}
                        myFavoriteList={myFavoriteList}
                        setMyFavoriteList={setMyFavoriteList}
                        id={item.id}
                        handleCard={() => {
                          setViewerMovie(item);
                        }}
                        handleButton={(clickId) => {
                          if (item.id === clickId) {
                            const newFavoriteList = [...myFavoriteList, item];
                            setMyFavoriteList(newFavoriteList);
                            localStorage.setItem(
                              "favorite-movie",
                              JSON.stringify(newFavoriteList)
                            );
                          }
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
