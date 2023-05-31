import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PropertyDisplayCard from "./PropertyDisplayCard";
import { PropertyPriceType, LatestProperties } from "@/types/property";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useTheme } from "@mui/material/styles";

const latestProperties: LatestProperties = {
  properties: [
    {
      id: "1",
      images: [
        {
          id: "#1",
          CreatedAt: new Date(),
          CreatedByUserId: "#1",
          imageURL:
            "https://assets.website-files.com/5f9bf5434935847cbda09d74/5f9c347883399277897ddabf_naomi-ellsworth-EMPLSuvDuhQ-unsplash(1).jpg",
          propertyId: "1",
          UpdatedAt: new Date(),
          verified: true,
        },
      ],
      locality: "Ketu",
      numberOfBathrooms: 3,
      numberOfBedrooms: 3,
      price: 500000,
      priceType: PropertyPriceType.PerAnnum,
      street: "37 Ire-akari, Agiliti",
      title: "Building One",
      description: "This is a very nice apartment",
      totalLandArea: 375,
    },
    {
      id: "2",
      images: [
        {
          id: "#1",
          CreatedAt: new Date(),
          CreatedByUserId: "#1",
          imageURL:
            "https://assets.website-files.com/5f9bf5434935847cbda09d74/5f9c322408933b37baa1210d_reddgio-9Xw82nx788Y-unsplash(1)-p-1080.jpeg",
          propertyId: "2",
          UpdatedAt: new Date(),
          verified: true,
        },
      ],
      locality: "Ketu",
      numberOfBathrooms: 3,
      numberOfBedrooms: 3,
      price: 500000,
      priceType: PropertyPriceType.PerAnnum,
      street: "37 Ire-akari, Agiliti",
      title: "Building One",
      description: "This is a very nice apartment",
      totalLandArea: 375,
    },
    {
      id: "3",
      images: [
        {
          id: "#1",
          CreatedAt: new Date(),
          CreatedByUserId: "#1",
          imageURL:
            "https://assets.website-files.com/5f9bf5434935847cbda09d74/5f9c2eeb38b8244496585ebe_ralph-ravi-kayden-2d4lAQAlbDA-unsplash(1)-p-1080.jpeg",
          propertyId: "3",
          UpdatedAt: new Date(),
          verified: true,
        },
      ],
      locality: "Ketu",
      numberOfBathrooms: 3,
      numberOfBedrooms: 3,
      price: 500000,
      priceType: PropertyPriceType.PerAnnum,
      street: "37 Ire-akari, Agiliti",
      title: "Building One",
      description: "This is a very nice apartment",
      totalLandArea: 375,
    },
    {
      id: "4",
      images: [
        {
          id: "#1",
          CreatedAt: new Date(),
          CreatedByUserId: "#1",
          imageURL:
            "https://assets.website-files.com/5f9bf5434935847cbda09d74/5f9c2eeb38b8244496585ebe_ralph-ravi-kayden-2d4lAQAlbDA-unsplash(1)-p-1080.jpeg",
          propertyId: "3",
          UpdatedAt: new Date(),
          verified: true,
        },
      ],
      locality: "Ketu",
      numberOfBathrooms: 3,
      numberOfBedrooms: 3,
      price: 500000,
      priceType: PropertyPriceType.PerAnnum,
      street: "37 Ire-akari, Agiliti",
      title: "Building One",
      description: "This is a very nice apartment",
      totalLandArea: 375,
    },
    {
      id: "5",
      images: [
        {
          id: "#1",
          CreatedAt: new Date(),
          CreatedByUserId: "#1",
          imageURL:
            "https://assets.website-files.com/5f9bf5434935847cbda09d74/5f9c2eeb38b8244496585ebe_ralph-ravi-kayden-2d4lAQAlbDA-unsplash(1)-p-1080.jpeg",
          propertyId: "3",
          UpdatedAt: new Date(),
          verified: true,
        },
      ],
      locality: "Ketu",
      numberOfBathrooms: 3,
      numberOfBedrooms: 3,
      price: 500000,
      priceType: PropertyPriceType.PerAnnum,
      street: "37 Ire-akari, Agiliti",
      title: "Building One",
      description: "This is a very nice apartment",
      totalLandArea: 375,
    },
    {
      id: "6",
      images: [
        {
          id: "#1",
          CreatedAt: new Date(),
          CreatedByUserId: "#1",
          imageURL:
            "https://assets.website-files.com/5f9bf5434935847cbda09d74/5f9c2eeb38b8244496585ebe_ralph-ravi-kayden-2d4lAQAlbDA-unsplash(1)-p-1080.jpeg",
          propertyId: "3",
          UpdatedAt: new Date(),
          verified: true,
        },
      ],
      locality: "Ketu",
      numberOfBathrooms: 3,
      numberOfBedrooms: 3,
      price: 500000,
      priceType: PropertyPriceType.PerAnnum,
      street: "37 Ire-akari, Agiliti",
      title: "Building One",
      description: "This is a very nice apartment",
      totalLandArea: 375,
    },
  ],
};
const LatestProperties: FC = () => {
  const theme = useTheme();

  return (
    <Box mt={2} sx={{ py: 2, px: { xs: 2, sm: 6 } }}>
      <Box
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
      >
        <Box textAlign="left">
          <Typography
            textAlign="center"
            fontWeight={500}
            variant="h3"
            component="h2"
          >
            Latest Properties
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "center", md: "left" },
              color: "gray",
              fontWeight: 500,
              mt: 1,
            }}
          >
            Check out some of our latest properties
          </Typography>
        </Box>

        <PrimaryButton
          sx={{
            ":hover": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
              border: "none",
            },
            border: `2px solid ${theme.palette.primary.main}`,
          }}
          disableElevation
          variant="outlined"
        >
          View All Properties
        </PrimaryButton>
      </Box>
      <Grid mt={2} spacing={4} container>
        {latestProperties.properties.map((p) => (
          <Grid xs={12} md={6} lg={4} item key={p.id}>
            <PropertyDisplayCard
              id={p.id}
              images={p.images}
              locality={p.locality}
              numberOfBathrooms={p.numberOfBathrooms}
              numberOfBedrooms={p.numberOfBedrooms}
              price={p.price}
              priceType={p.priceType}
              street={p.street}
              title={p.title}
              description={p.description}
              totalLandArea={p.totalLandArea}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestProperties;
