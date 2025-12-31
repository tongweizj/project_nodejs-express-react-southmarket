// src/features/cart/CartView.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Paper,
  Divider,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { IMAGE_BASE_URL } from '/src/config';

const CartView = ({
  items,
  subtotal,
  tax,
  total,
  totalItems,
  onIncrement,
  onDecrement,
  onRemove,
  onCheckout
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const shipping = 5;

  const handleCheckout = () => {
    onCheckout();
    setShowAlert(true);
  };

  const handleAlertDismiss = () => {
    setShowAlert(false);
  };

  return (
    <Box sx={{ margin: "0 auto", padding: "2rem", maxWidth: "1200px" }}>
      {showAlert && (
        <Dialog open onClose={handleAlertDismiss}>
          <DialogTitle>Purchase Complete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Thanks for your purchase!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAlertDismiss}>Dismiss</Button>
          </DialogActions>
        </Dialog>
      )}

      <Typography variant="h4" textAlign="center" fontWeight="bold" mb={3}>
        Your Cart
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {items.map((item) => (
            <Paper key={item._id} sx={{ p: 2, mb: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                  <img
                    src={`${IMAGE_BASE_URL}/${item.images[0]}`}
                    alt={item.name}
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item xs={5}>
                  <Typography>{item.name}</Typography>
                  <Typography>${item.price.toFixed(2)}</Typography>
                </Grid>

                <Grid item xs={2}>
                  <IconButton onClick={() => onDecrement(item._id)}>
                    <Remove />
                  </IconButton>
                  {item.quantity}
                  <IconButton onClick={() => onIncrement(item._id)}>
                    <Add />
                  </IconButton>
                </Grid>

                <Grid item xs={2}>
                  <IconButton color="error" onClick={() => onRemove(item._id)}>
                    <Delete />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography>Subtotal ({totalItems} items)</Typography>
            <Typography>${subtotal.toFixed(2)}</Typography>
            <Typography>Tax: ${(subtotal*tax).toFixed(2)}</Typography>
            <Typography>Total: ${total?.toFixed(2)}</Typography>

            <Button
              fullWidth
              variant="contained"
              onClick={handleCheckout}
              disabled={items.length === 0}
            >
              Checkout
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartView;
