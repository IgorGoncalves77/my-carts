import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default function Produto({ item }) {
  const preco = item.price / 100;
  const precoVenda = item.sellingPrice / 100;
  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "#f0f2f58d",
        maxWidth: 600,
        mt: 2,
        mb: 2,
      }}
    >
      <CardMedia
        sx={{ maxWidth: 100, maxHeight: 100 }}
        component="img"
        image={item.imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          fontWeight="bold"
        >
          {item.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textDecoration: "line-through" }}
        >
          {preco}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontWeight="bold">
          {precoVenda}
        </Typography>
      </CardContent>
    </Card>
  );
}
