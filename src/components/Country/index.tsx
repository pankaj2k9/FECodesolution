import React from "react";
import Grid from "@mui/material/Grid";
import { Country } from "../../utils/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Index = ({ CountryData }: { CountryData: Country }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardActionArea component={RouterLink} to={`/${CountryData.cioc}`}>
          <CardMedia
            component="img"
            height="200px"
            image={CountryData.flags.svg}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h2" >
            {CountryData.name.common}
            </Typography>
            <Typography variant="subtitle2" >
              Population: <Typography variant="body2" display={'inline'} >{CountryData.population}</Typography>
            </Typography>
            <Typography variant="subtitle2" >
              Region: <Typography variant="body2" display={'inline'} >{CountryData.region}</Typography>
            </Typography>
            <Typography variant="subtitle2" >
              Capital: <Typography variant="body2" display={'inline'} >{CountryData.capital}</Typography>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Index;
