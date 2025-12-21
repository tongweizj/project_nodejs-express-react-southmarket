import React, { useState, useEffect } from "react";
import { CircularProgress, Grid, Typography } from "@mui/material";

import { useAuth } from '/src/context/AuthContext.jsx';
import { list } from "/src/services/api-listing.js";
import ListingCard from "/src/components/ListingCard/ListingCard.jsx";
import "./MyListings.css";

const MyListings = () => {
  const { isAuthenticated } = useAuth();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      setLoading(false);
      return;
    }

    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchListings = async () => {
      try {
        const data = await list(signal);
        if (data.error) {
          console.error("Error fetching listings:", data.error);
        } else {
          const userListings = data.filter(
            (listing) => listing.postedBy._id === isAuthenticated.user._id
          );
          setListings(userListings);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Failed to fetch listings:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchListings();

    return () => {
      abortController.abort();
    };
  }, [isAuthenticated]);

  const handleListingDeleted = (listingId) => {
    setListings((prevListings) =>
      prevListings.filter((listing) => listing._id !== listingId)
    );
  };

  return (
    <div
      className="listing-list-container"
      style={{ minHeight: "80vh", padding: "1rem" }}
    >
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <CircularProgress />
        </div>
      ) : listings.length > 0 ? (
        <>
          <Typography
            variant="h4"
            component="div"
            fontWeight="bold"
            textAlign="center"
          >
            My Listings
          </Typography>
          <Grid container justifyContent="center" alignItems="center">
            {listings.map((listing) => (
              <Grid item xs={12} sm={6} md={4} sx={{ mb: -3, ml: -3 }} key={listing._id}>
                <ListingCard
                  listing={listing}
                  onDeleteSuccess={() => handleListingDeleted(listing._id)}
                />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Typography
          variant="h6"
          color="textSecondary"
          align="center"
          style={{ marginTop: "50px" }}
        >
          You have no listings posted.
        </Typography>
      )}
    </div>
  );
};

export default MyListings;
