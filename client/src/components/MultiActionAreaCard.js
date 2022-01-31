import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import img from "../images/pro.jpg";

const styles = { float: "left", margin: "30px 70px" };

function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={styles}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.nameOfProperty}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ex
            obcaecati nemo aliquid officiis labore eaque voluptatibus fugit
            harum. Natus eius minima praesentium saepe quasi necessitatibus
            iusto quam dolores nihil.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default MultiActionAreaCard;
