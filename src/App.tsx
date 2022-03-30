import { Grid, Typography, AppBar, Toolbar } from "@mui/material";
import { FC } from "react";
import { Feed } from "./components/feed/Feed";
import { Leftbar } from "./components/leftbar/Leftbar";
import { Navbar } from "./components/header/Navbar";
import { Rightbar } from "./components/rightbar/Righrbar";
import { Dialogs } from "./components/dialogs/Dialogs";
import {Routes, Route} from "react-router-dom"
import { Profile } from "./components/profile/Profile";
import { FriendsList } from "./components/friends/FriendsList";
import 'materialize-css'
import { AuthPage } from "./components/authPage/AuthPage";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";


const App: FC = () => {

  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
  }}>

    <div>
      {isAuthenticated ? <>
        <Navbar />
        <Grid container>
        <Grid item sm={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7}>
            <Routes>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/posts" element={<Feed/>}/>
                <Route path="/friends" element={<FriendsList/>}/>
                <Route path="/dialogs" element={<Dialogs time="20:00"/>}/>
            </Routes>
        </Grid>
        <Grid item sm={3}>
          <Rightbar />
        </Grid>
      </Grid>
      </> : <>
      <AppBar position="fixed" >
      <Toolbar >
        <Typography variant="h6">IN-CUBE</Typography>
      </Toolbar>      
    </AppBar>
      <AuthPage/>
      </> }
      
    </div>
    </AuthContext.Provider>
  );
};

export default App;
