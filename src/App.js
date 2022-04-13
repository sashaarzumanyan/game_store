import { Grid } from "@mui/material";
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import GamePage from "./Components/GamePage";
import Header from "./pages/Header";
import ListPage from "./Components/ListPage";
import SideBar from "./pages/SideBar";
import Main from "./pages/Main";

function App() {

  return (
    <>
      <Header />
      <Grid container spacing={3} sx={{ mt: 5 }}>
        <Grid item xs={3}
          sx={{
            overflow: 'auto',
            width: '20%',
            backgroundColor: 'info.main',
            position: 'fixed',
            height: '100vh',
            top: '55px'
          }}>
          <SideBar />
        </Grid>
        <Grid item xs={9} sx={{ position: 'absolute', left: '280px', top: '60px', width: '100%' }} >
          <Main />
        </Grid>
      </Grid>
    </>
  )

}

export default App;
