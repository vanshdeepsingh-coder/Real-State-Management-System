import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Search from "./Search";
import LatestProperties from "./LatestProperties";
import SlidingImage from './SlidingImage'
import InformationBox from './InformationBox'

import dynamic from 'next/dynamic'

const StyledHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
}));

const Home = () => {
  return (
    <Box sx={{ pt: "4rem" }}>
      {/* FIRST SECTION */}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
        px={5}
      >
        <Grid item xs={12} md={6}>
          <Box>
            <StyledHeading variant="h2">
              Find your dream home with Property Forager
            </StyledHeading>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Search />
        </Grid>
      </Grid>
      {<InformationBox/>}
      <Box sx={{ mt: 6 }}>
          <SlidingImage/>
      </Box>
      <LatestProperties />
    </Box>
  );
};

export default dynamic (()=>Promise.resolve(Home), {ssr:false})
