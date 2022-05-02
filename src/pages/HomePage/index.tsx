import React from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { Country } from "../../utils/types";
import { styled, useMediaQuery } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { useTheme, Box } from "@mui/material";
import CountryItem from "../../components/Country";
import Pagination from "@mui/material/Pagination";
import usePagination from "../../hooks/Pagination";
import Alert from "@mui/material/Alert";
import { SelectChangeEvent } from "@mui/material/Select";
import { baseApi } from "../../utils/api";
import Input from "../../components/Input";
import Select from "../../components/Select";
const PER_PAGE = 20;

interface CountryListProps {
  loading: boolean;
  error: any;
  countries: Country[];
}
const CountryList = ({ countries, loading, error }: CountryListProps) => {
  const [page, setPage] = React.useState<number>(1);

  const count = Math.ceil(countries.length / PER_PAGE);
  const _DATA = usePagination(countries, PER_PAGE);

  const handleChange = (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
  };

  if (error) {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Alert severity="error">{error.message}</Alert>
      </Grid>
    );
  }

  return (
    <>
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
        <>
          <StyledItemListGrid container spacing={3}>
            {_DATA.currentData().map((country: Country) => (
              <CountryItem key={country.name.common} CountryData={country} />
            ))}
            <PaginationWarpper
              container
              direction="row"
              justifyContent="center"
            >
              <Pagination
                count={count}
                size="large"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
            </PaginationWarpper>
          </StyledItemListGrid>
        </>
      )}
    </>
  );
};
const Index: React.FC = () => {
  const theme = useTheme();
  const [error, setError] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [region, setRegion] = React.useState<string>("");
  const [text, setText] = React.useState<string>("");

  React.useEffect(() => {
    loadCountries();
  }, []);

  const loadCountries = async () => {
    setError(null);
    setLoading(true);
    try {
      const api = `${baseApi}all`;
      const response = await axios.get(api);
      setCountries(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const loadCountriesByRegion = async (region: string) => {
    setError(null);
    setLoading(true);
    try {
      const api = `${baseApi}region/${region}`;
      const response = await axios.get(api);
      setCountries(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const loadCountriesByName = async (name: string) => {
    setError(null);
    setLoading(true);
    try {
      const api = `${baseApi}name/${name}`;
      const response = await axios.get(api);
      setCountries(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  const onRegionChangeHandler = (event: SelectChangeEvent<unknown>) => {
    setRegion(event.target.value as string);
    if (event.target.value) {
      loadCountriesByRegion(event.target.value as string);
    } else {
      loadCountries();
    }
  };

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    if (event.target.value) {
      loadCountriesByName(event.target.value);
    } else {
      loadCountries();
    }
  };

  return (
    <Layout>
      <>
        <Grid container spacing={3} mb={theme.spacing(3)}>
          <Grid item xs={12} sm={6}>
            <Input value={text} onChange={onSearchHandler} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <StyledBox>
              <Select value={region} onChange={onRegionChangeHandler} />
            </StyledBox>
          </Grid>
        </Grid>
        <CountryList loading={loading} error={error} countries={countries} />
      </>
    </Layout>
  );
};

export default Index;

const StyledItemListGrid = styled(Grid)(({ theme }) => {
  const matches = useMediaQuery("(max-width:767px)");
  return {
    padding: matches ? theme.spacing(0, 2) : theme.spacing(0),
  };
});
const StyledBox = styled(Box)(({ theme }) => {
  const matches = useMediaQuery("(max-width:767px)");
  return {
    flexGrow: 1,
    display: "flex",
    justifyContent: matches ? "flex-start" : "flex-end",
  };
});
const PaginationWarpper = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3, 0),
  "&ul": {
    justifyContent: "center",
  },
}));
