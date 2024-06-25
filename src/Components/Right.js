import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Right = () => {
  return (
    <Box flex={2} p={2}>
      <Box position="fixed">
        <Typography variant="p" fontWeight="800">
          Online
        </Typography>
        <AvatarGroup max={10}>
          <Avatar
            alt="Remy Sharp"
            src="https://rukminim2.flixcart.com/image/850/1000/k63xle80/tattoo/j/h/d/440-ordershock-original-imafzn9ayhangdeq.jpeg?q=20&crop=false"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://img.mensxp.com/media/content/2024/Mar/1_65eab1cd56df8.jpeg?w=720&h=1280&cc=1"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://i.pinimg.com/236x/0b/11/81/0b11814a2a85126c755ce96d88593e1c.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg?crop=0.66653xw:1xh;center,top&resize=640:*"
          />
        </AvatarGroup>
        <Typography margin={2}>Latest photos</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://scontent.fmaa6-1.fna.fbcdn.net/v/t39.30808-6/445029402_1196596731500684_3887736796476379990_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qJg8anelOHkQ7kNvgGWC4m8&_nc_ht=scontent.fmaa6-1.fna&oh=00_AYDj-P1GgI6HhSkzzbpg1_e73DpdFsbr98PQPx-cGRPXZg&oe=667F2924"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://scontent.fmaa6-1.fna.fbcdn.net/v/t39.30808-6/430300751_1059750991761267_1226164367877505360_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Mw8mSaelWPwQ7kNvgE-PH6D&_nc_ht=scontent.fmaa6-1.fna&oh=00_AYD8KVqJ7uZZaLSnvapM2R5TOjF2-UwK9L7sVE-glvjYMg&oe=667F2440"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  ></Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://scontent.fmaa6-1.fna.fbcdn.net/v/t39.30808-1/309596214_194284089661564_5541638024735025861_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oef9Aqzzp6kQ7kNvgGoqzK4&_nc_ht=scontent.fmaa6-1.fna&oh=00_AYDfi6xnVtm2huoMKWx4lu8fLldKfFW1dpPRjQRWjVYKfA&oe=667F1F67"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Right;
