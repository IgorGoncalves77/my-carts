import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/core/Alert";
import Produto from "./Produto";

export default function MeuCarrinho({ data }) {
  if (data.length !== 0) {
    const valorTotal = data.totalizers[0].value / 100;
    const valorDescontos = data.totalizers[1].value / 100;
    const valorFinal = valorTotal + valorDescontos;

    function Frete() {
      if (valorFinal > 10) {
        return (
          <div>
            <Alert severity="success" sx={{ mb: 2 }}>
              Parabéns, sua compra tem frete grátis!
            </Alert>
          </div>
        );
      } else {
        return <></>;
      }
    }
    return (
      <div>
        <Grid container spacing={{ xs: 3, md: 3 }} sx={{ mt: 3, mb: 3 }}>
          <Paper elevation={10} sx={{ margin: 4, padding: 4, borderRadius: 2 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
              fontWeight="bold"
            >
              Meu Carrinho
            </Typography>
            <Divider />
            {data.items.map((item, index) => {
              return (
                <Grid item key={index}>
                  <Produto item={item} />
                </Grid>
              );
            })}
            <Divider />
            <Grid>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight="bold"
                sx={{ mt: 2, display: "inline-block" }}
              >
                Total:
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight="bold"
                sx={{ mt: 2, float: "right" }}
              >
                {valorFinal.toFixed(2)}
              </Typography>
            </Grid>
            <Frete />
            <Divider />
            <Button
              variant="contained"
              color="primary"
              fontWeight="bold"
              fullWidth
              sx={{ mt: 2 }}
            >
              Finalizar compra
            </Button>
          </Paper>
        </Grid>
      </div>
    );
  } else {
    return <div></div>;
  }
}
