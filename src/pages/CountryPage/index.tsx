import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../../components/Layout";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { ArrowRightAlt } from "@mui/icons-material";
import { Country } from "../../utils/types";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { styled, Icon, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import lookup from "country-code-lookup";
import { baseApi } from "../../utils/api";

const Index: React.FC = () => {
  const theme = useTheme();
  const params = useParams();
  const [error, setError] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [details, setDetails] = React.useState<Country | null>(null);
  React.useEffect(() => {
    if (params.country) {
      loadCountryDetails(params.country);
    }
  }, [params]);

  const loadCountryDetails = async (code: string) => {
    setLoading(true);
    try {
      const api = `${baseApi}alpha/${code}`;
      const response = await axios.get(api);
      setDetails(response.data[0]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  if (error) {
    return (
      <Layout>
         <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
           <Alert severity="error">{error.message}</Alert>
        </Grid>
      </Layout>
    );
  }
  return (
    <Layout>
      {loading ? (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress color="primary" />
        </Grid>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} mt={theme.spacing(1.5)} mb={theme.spacing(1)}>
            <StyledBackLink to="/">
              <Icon
                component={ArrowRightAlt}
                sx={{ transform: "rotate(180deg)" }}
              />{" "}
              &nbsp;Back
            </StyledBackLink>
          </Grid>
          <Grid item xs={12} sm={6}>
            <IMG src={details?.flags.svg} alt={details?.name.common} />
          </Grid>
          <StyledRightGrid item xs={12} sm={6} alignItems="center">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h1">
                  {details?.name.common}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2">
                  Native Name:{" "}
                  <Typography variant="body2" display={"inline"}>
                    {details?.population}
                  </Typography>
                </Typography>
                <Typography variant="subtitle2">
                  Population:{" "}
                  <Typography variant="body2" display={"inline"}>
                    {details?.population}
                  </Typography>
                </Typography>
                <Typography variant="subtitle2">
                  Region:{" "}
                  <Typography variant="body2" display={"inline"}>
                    {details?.region}
                  </Typography>
                </Typography>
                <Typography variant="subtitle2">
                  Sub Region:{" "}
                  <Typography variant="body2" display={"inline"}>
                    {details?.subregion}
                  </Typography>
                </Typography>
                <Typography variant="subtitle2">
                  Capital:{" "}
                  <Typography variant="body2" display={"inline"}>
                    {details?.capital}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2">
                  Top Level Domain:{" "}
                  <Typography variant="body2" display={"inline"}>
                    {details?.tld[0]}
                  </Typography>
                </Typography>
                <Typography variant="subtitle2">
                  Currencies:{" "}
                  <Typography variant="body2" display={"inline"}>
                    {details?.currencies &&
                      Object.entries(details?.currencies)[0][1].name}
                  </Typography>
                </Typography>
                <Typography variant="subtitle2">
                  Languages:{" "}
                  <Typography variant="body2" display={"inline"}>
                    {details?.languages &&
                      Object.entries(details?.languages).map((lang, index) =>
                        lang.length === index ? `${lang[1]}` : `${lang[1]}, `
                      )}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography variant="subtitle2">
                  Border Countries:{" "}
                  <Typography variant="body2" display={"inline"}>
                    {details?.borders &&
                      details.borders.map((border) => {
                        return (
                          <StyledLink key={border} to={`/${border}`}>
                            {lookup.byIso(border)?.country}
                          </StyledLink>
                        );
                      })}
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </StyledRightGrid>
        </Grid>
      )}
    </Layout>
  );
};

export default Index;

const IMG = styled("img")`
  width: 100%;
`;

const StyledRightGrid = styled(Grid)`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  textDecoration: "none",
  marginRight: theme.spacing(0.4),
  borderRadius: "2px",
  padding: theme.spacing(0.25, 1),
  color: theme.palette.secondary.main,
  fontSize: "12px",
  boxShadow: theme.shadows[1],
}));

const StyledBackLink = styled(Link)(({ theme }) => ({
  alignItems: "center",
  display: "inline-flex",
  backgroundColor: theme.palette.background.paper,
  textDecoration: "none",
  marginRight: theme.spacing(0.4),
  borderRadius: "4px",
  padding: theme.spacing(0.25, 1.5),
  color: theme.palette.secondary.main,
  fontSize: "14px",
  boxShadow: theme.shadows[1],
}));
