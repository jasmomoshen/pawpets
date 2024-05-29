import React from 'react';
import { Grid, Box } from '@mui/material';
import List from './List/List';
import Map from './Map/Map';
import Header from './Header/Header';

const MapDashboard = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header />
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>
        </Box>
    );
};

export default MapDashboard;
