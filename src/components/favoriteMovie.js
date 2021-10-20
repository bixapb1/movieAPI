import * as React from "react";
import { Box, Grid, Container } from "@mui/material";
import Card from "./Card";

export default function Favorite({ myFavoriteList }) {
  return (
    <>
      <Container sx={{ mt: 10 }} maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {myFavoriteList
              ? myFavoriteList.map((movie) => {
                  return (
                    <Grid key={movie.id} item xs={6} md={3}>
                      <Card
                        movie={movie}
                        // title={item.title}
                        // voteAverage={item.vote_average}
                        // poster={item.poster_path}
                        // id={item.id}
                        // myFavoriteList={myFavoriteList}
                        // setMyFavoriteList={setMyFavoriteList}
                        // removeFavorite="Delete movie"
                        // handleButton={(clickId) => {
                        //   if (item.id === clickId) {
                        //     const newFavoriteList = [...myFavoriteList, item];
                        //     setMyFavoriteList(newFavoriteList);
                        //     localStorage.setItem(
                        //       "favorite-movie",
                        //       JSON.stringify(newFavoriteList)
                        //     );
                        //   }
                        // }}
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
