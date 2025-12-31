import { Typography, Grid, Box, Button } from "@mui/material";
import ListingCard from "/src/components/ListingCard/ListingCard";
const FavoritesView = ({
    favoriteItems,
    removeFromFavorites
}) => {
    console.log(`favoriteItems:${favoriteItems}`)
    return (
        <div className="favorites-container">
            <Typography variant="h4" gutterBottom textAlign="center" fontWeight="bold">
                Your Favourites
            </Typography>
            {favoriteItems.length === 0 ? (
                <Typography variant="body1" textAlign="center">
                    You have no items in your favorites.
                </Typography>
            ) : (
                <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {favoriteItems.map((listing) => (
                        <Grid item xs={12} sm={6} md={4} key={listing._id}>
                            <Box
                                sx={{
                                    position: "relative",
                                    border: "1px solid #ccc",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    padding: "16px",
                                    backgroundColor: "#fff",
                                }}
                            >
                                <ListingCard listing={listing} />
                                <Button
                                    variant="outlined"
                                    color="error"
                                    sx={{ mt: 2, width: "100%" }}
                                    onClick={() => removeFromFavorites(listing._id)}
                                >
                                    Remove from Favorites
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
}

export default FavoritesView;