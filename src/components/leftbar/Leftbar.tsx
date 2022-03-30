import { Email, Feed, Home, People, Person, Settings } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

export const useStyles = makeStyles({
  container: {
    position: "sticky",
    top: 0,
    borderRadius: 15,
    height: "100vh",
    paddingTop: 90,
    backgroundColor: "#f5f2f2",
  },
  item: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    color: "#2981e5",
    marginBottom: 32,
    '&:hover': {
      opacity: 0.7,
      cursor: "pointer",
    }
  },
  icon: {
    marginRight: 20,
    color: "#8a8686",
  },
  text: {
    fontWeight: "bold",
  },
});

export const Leftbar = () => {
  const cl = useStyles();
  return (
    <Container className={cl.container}>
      <Link to="/friends" className={cl.item}>
      <People className={cl.icon} />
        <Typography className={cl.text} style={{ fontWeight: "bold" }}>
          Friends
        </Typography>
      </Link>
      <Link to="/profile" className={cl.item}>
        <Person className={cl.icon} />
        <Typography className={cl.text} style={{ fontWeight: "bold" }}>
          Profile
        </Typography>
      </Link>
      <Link to="/dialogs" className={cl.item}>
        <Email className={cl.icon} />
        <Typography className={cl.text} style={{ fontWeight: "bold" }}>
         Dialogs
        </Typography>
      </Link>
      <Link to="/posts" className={cl.item}>
        <Feed className={cl.icon} />
        <Typography className={cl.text} style={{ fontWeight: "bold" }}>
        Posts 
        </Typography>
      </Link>
      {/* <Link to="/home" className={cl.item}>
        <Home className={cl.icon} />
        <Typography className={cl.text} style={{ fontWeight: "bold" }}>
        Homepage 
        </Typography>
      </Link> */}
      <Link to="/settings" className={cl.item}>
        <Settings className={cl.icon} />
        <Typography className={cl.text} style={{ fontWeight: "bold" }}>
          Settings
        </Typography>
      </Link>
    </Container>
  );
};
