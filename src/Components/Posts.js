import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Share, MoreVert, Favorite, FavoriteBorder } from "@mui/icons-material";

import React from "react";

const Posts = () => {
  return (
    <>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Arjun "
          subheader="June 24, 2024"
        />
        <CardMedia
          component="img"
          width="300"
          height="200%"
          image="https://scontent.fmaa6-1.fna.fbcdn.net/v/t39.30808-6/401702066_998911271178573_4527132141607253058_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CSPChLEb2dcQ7kNvgGYPpPO&_nc_ht=scontent.fmaa6-1.fna&oh=00_AYA-F_lQVV5luT80ca1zQTRlLQ79q44EuQXIdhqkEBRxJA&oe=667F1ACF"
          alt="Paella dish"
          sx={{ backgroundPosition: "cover" }}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Arjun Reddy"
          subheader="September 14, 2023"
        />
        <CardMedia
          component="img"
          width="300"
          height="200%"
          image="https://scontent.fmaa6-1.fna.fbcdn.net/v/t39.30808-6/344388599_915378396346881_2900030408592036593_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Hk2_MUh6n-AQ7kNvgFLuYos&_nc_ht=scontent.fmaa6-1.fna&oh=00_AYDc_H-i4rwflgMWitmedyMxLvDiT6mFYdBmi6R0LeDiGQ&oe=667F39F1"
          alt="Paella dish"
          sx={{ backgroundPosition: "cover" }}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>{" "}
    </>
  );
};

export default Posts;
