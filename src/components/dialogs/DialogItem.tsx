import React from "react";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

type DialogItemType = {
  name: string,
  message: string, 
  time: string
}

export const DialogItem = (props: DialogItemType) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt={props.name}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvbtvXRflM9pJyLqrX8sFpnBniTDu5cMg1ng&usqp=CAU"
          />
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
             {props.message} {props.time}
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};
