import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import { LocationOnOutlined } from '@mui/icons-material';
import Rating from '@mui/material';

import { styled } from '@mui/system';
import { Box } from '@mui/material';

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px',
}));

const MapContainer = styled(Box)(({ theme }) => ({
    height: '85vh',
    width: '100%',
}));

const MarkerContainer = styled('div')(({ theme }) => ({
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': {
        zIndex: 2,
    },
}));

const Pointer = styled('div')(({ theme }) => ({
    cursor: 'pointer',
}));






const Map = () => {

    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates = { lat: 0, lng: 0 };

    return (
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBiHG0yDcGnMY3DBuE68w3CpMex5e84akU' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >
            </GoogleMapReact>

        </MapContainer>
    )
}

export default Map;
