import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
      toolbar: {
          display: "flex",
          justifyContent: "space-between"
      },
      search: {
          display: "flex",
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: "white",
          width: "50%",
          opacity: 0.5,
          '&:hover': {
            opacity: 0.9
          },
      },
      input: {
          marginLeft: 10
      },
      icons:{
          display: "flex",
          alignItems: 'center',
      },
      badge:{
          marginRight: 20
      }
})