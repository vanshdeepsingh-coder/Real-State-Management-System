import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PropertyDisplayCard from "./PropertyDisplayCard";
import { PropertyPriceType, LatestProperties } from "@/types/property";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useTheme } from "@mui/material/styles";

import dynamic from 'next/dynamic'

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
      street: "1234 Maple Avenue, Anytown, USA",
      title: "Tranquil Haven",
      description: "Stunning beachfront villa with panoramic ocean views, private pool, and direct access to the golden sandy beach",
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
      numberOfBedrooms: 5,
      price: 1000000,
      priceType: PropertyPriceType.PerAnnum,
      street: "5678 Elm Street, Cityville, USA",
      title: "Serene Retreat",
      description: "Charming suburban home with a lush backyard garden, spacious living areas, and a cozy fireplace for those chilly evenings.",
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
      numberOfBathrooms: 2,
      numberOfBedrooms: 2,
      price: 250000,
      priceType: PropertyPriceType.PerAnnum,
      street: "9101 Oak Lane, Suburbia, USA",
      title: "Enchanted Oasis",
      description: "Luxurious penthouse apartment in the heart of downtown, offering breathtaking city skyline views, modern finishes, and access to a rooftop pool",
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
            "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
          propertyId: "3",
          UpdatedAt: new Date(),
          verified: true,
        },
      ],
      locality: "Ketu",
      numberOfBathrooms: 3,
      numberOfBedrooms: 6,
      price: 700000,
      priceType: PropertyPriceType.PerAnnum,
      street: "2468 Pinecrest Road, Countryside, USA",
      title: "Blissful Abode",
      description: "Quaint country cottage nestled in a peaceful countryside setting, featuring a picturesque garden, exposed wooden beams, and a cozy fireplace.",
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
            "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",
          propertyId: "3",
          UpdatedAt: new Date(),
          verified: true,
        },
      ],
      locality: "Ketu",
      numberOfBathrooms: 4,
      numberOfBedrooms: 8,
      price: 10000000,
      priceType: PropertyPriceType.PerAnnum,
      street: "13579 Willow Court, Lakeside, USA",
      title: "Harmony Haven",
      description: "Contemporary urban loft with an open floor plan, floor-to-ceiling windows, and a sleek gourmet kitchen, perfect for the modern city dweller.",
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
            "https://images.pexels.com/photos/1693946/pexels-photo-1693946.jpeg?auto=compress&cs=tinysrgb&w=600",
          propertyId: "3",
          UpdatedAt: new Date(),
          verified: true,
        },
      ],
      locality: "Ketu",
      numberOfBathrooms: 2,
      numberOfBedrooms: 5,
      price: 900000,
      priceType: PropertyPriceType.PerAnnum,
      street: "8642 Cedar Street, Mountainville, USA",
      title: "Idyllic Sanctuary",
      description: "Expansive ranch-style estate on sprawling acres of land, boasting a private tennis court, horse stables, and a spacious outdoor patio for entertaining.",
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
            marginTop="5vh"
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
            marginTop:"5vh"
          }}
          onClick={()=>location.href="/properties"}
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
              on-click={()=>console.log("harry")}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default dynamic (()=>Promise.resolve(LatestProperties), {ssr:false})
