import { Grid } from "@mui/material";
import React from "react";
import Header from "./pages/Header";
import ListPage from "./pages/ListPage";
import SideBar from "./pages/SideBar";

function App() {

  return (
    <>
      <Grid container >
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>
      <Grid  container spacing={4} sx={{mt: 5}}>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={9} >
          <ListPage />
        </Grid>
      </Grid>
    </>
  )

}

export default App;
