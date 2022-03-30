import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { AppBar, InputBase, Toolbar, Typography, Avatar } from "@mui/material";
import { Notifications } from "@mui/icons-material";
import { useStyles } from "./useStyles";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


export const Navbar = () => {

  const auth = useContext(AuthContext)

  const logoutHandler = (event) => {
      event.preventDefault()
      let confirmAction = window.confirm("Are you sure you want to exit");
      if(confirmAction) {
              auth.logout()
      }
  }


  const classes = useStyles()
  return (
    <AppBar position="fixed" >
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">IN-CUBE</Typography>
        <div className={classes.search}>
          <InputBase className={classes.input} placeholder="Update your status..." />
        </div>
        <div className={classes.icons}>
          <Badge className={classes.badge} badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge className={classes.badge} badgeContent={2} color="secondary">
            <Notifications/>
          </Badge>
          <a
          style={{color: "purple"}}
          onClick={logoutHandler}
          href="#">LOG OUT</a>
        </div>
      </Toolbar>      
    </AppBar>
  );
};
