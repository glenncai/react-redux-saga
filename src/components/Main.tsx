import { FC, useEffect } from 'react';
import { useAppDispatch } from '../data/hooks/useAppDispatch.ts';
import { useAppSelector } from '../data/hooks/useAppSelector.ts';
import {
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Grid,
} from '@mui/material';
import { addToCart, removeFromCart, emptyCart } from '../data/actions/cartAction';
import { getProductList } from '../data/actions/productAction';
import { DataType } from '../data/actions/type';

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const productData: DataType[] = useAppSelector(state => state.productReducer);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Button type="button" variant="contained" onClick={() => dispatch(emptyCart())}>
          Empty Card
        </Button>
      </Box>
      <Grid container spacing={2}>
        {productData.map(product => (
          <Grid item xs={4} key={product.id}>
            <Card>
              <CardMedia component="img" alt={product.name} height="140" image={product.photo} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.color}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.brand}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => dispatch(addToCart(product))}>
                  Add To Cart
                </Button>
                <Button size="small" onClick={() => dispatch(removeFromCart(product))}>
                  Remove From Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Main;
