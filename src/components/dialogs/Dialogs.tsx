import { Container, Grid, List } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DialogItem } from "./DialogItem";

const useStyles = makeStyles({
  container: {
    backgroundColor: "peachpuff",
    marginTop: 75,
    paddingTop: 25,
  },
});

type DialogsType = {
  time: string
}

export const Dialogs = (props: DialogsType) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item sm={5}>
          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#9de529" }}>
            <DialogItem time={props.time} message='привет как дела' name="Vasili Madjar" />
            <DialogItem time={props.time} message='привет все хорошо' name="Dima Dymych" />
            <DialogItem time={props.time} message='я тебя люблю' name="бусинка" />
            <DialogItem time={props.time} message=' как дела' name="петя" />
            <DialogItem time={props.time} message='привет ' name="коля" />
          </List>
        </Grid>
        <Grid style={{ marginLeft: "10px" }} item sm={6}>
          messages
        </Grid>
      </Grid>
    </Container>
  );
};
