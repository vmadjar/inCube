import {
  Button,
  Container,
  Modal,
  TextField,
  Tooltip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

export const useStyles = makeStyles({
  fab: {
    // position: "fixed",
    // bottom: 35,
    // right: 40,
  },
  container: {
    width: 500,
    height: 500,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  },
  form: {
    padding: 16,
  },
  item: {
    marginBottom: 24,
  },
});

export const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.fab}>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Click to create a post"
        placement="right"
      >
        <Button size="large">PRESS HERE TO CREATE & ADD NEW POST</Button>
      </Tooltip>
      <Modal open={open} onClose={handleClose}>
        <Container className={classes.container}>
          <form className={classes.form}>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="User name"
                variant="standard"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                multiline
                label="Post name"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                multiline
                label="Post image URL"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                multiline
                label="Post description"
                style={{ width: "100%" }}
              />
            </div>
            <Button size= "large" color="primary">Create Post</Button>
          <Button size= "large" color="primary">Clear all inputs</Button>
          </form>
        </Container>
      </Modal>
    </div>
  );
};
