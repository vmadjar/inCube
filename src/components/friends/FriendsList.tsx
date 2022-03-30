import { Container, Skeleton, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useGetPostsQuery } from "../../features/users/usersApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Friend } from "./Friend";
import { FriendsAppBar } from "./FriendsAppBar";
import { setNumPage } from "../../features/users/pageSlice";


const useStyles = makeStyles({
  container: {
    marginTop: 75,
    paddingTop: 25,
  },
  friend: {
    padding: "10px",
    border: "1px solid teal",
    borderRadius: "10px",
  },
});

export const FriendsList = () => {
  const classes = useStyles();
  const numPage = useAppSelector(state => state.pages.page)
  const dispatch = useAppDispatch()
  
  const { data, isLoading, error } = useGetPostsQuery(numPage);
  const totalusers: number | undefined = data?.totalCount
  
  const handlePage = (page: number) => {
   dispatch( setNumPage(page))
  }


  return (
    <Container className={classes.container}>
      <FriendsAppBar handlePage={handlePage}  totalusers = {totalusers}/>

    {isLoading ? (
      <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
    ) : error ? <div>{error}</div> : (
      data?.items.map((user, index) => (
        <Friend key={index} user = {user} />
      ))
      )
    }
    </Container>
  );
};
