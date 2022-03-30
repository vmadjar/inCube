import {
  AppBar,
  Box,
  InputBase,
  Pagination,
  PaginationItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  search: {
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
    width: "50%",
    opacity: 0.5,
    "&:hover": {
      opacity: 0.9,
    },
  },
  input: {
    marginLeft: 10,
  },
});

type FriendsAppBarPropsType = {
  totalusers: number | undefined,
  handlePage: (page: number) => void
};

export const FriendsAppBar = (props: FriendsAppBarPropsType) => {
  const classes = useStyles();
  
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ marginBottom: "15px", borderRadius: "15px" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            My Friends: {props.totalusers}
          </Typography>
          {props.totalusers ?  <Pagination
            count={Math.ceil(props.totalusers / 10)}
            renderItem={(item) => (
              <PaginationItem
              onClickCapture={() => {props.handlePage(item.page)}}
                 {...item}
              />
            )}
          /> : <div>грузится список пользователей</div>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
