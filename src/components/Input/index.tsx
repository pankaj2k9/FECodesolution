import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import { styled, Icon } from "@mui/material";
import { Search } from "@mui/icons-material";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Index = ({ value, onChange }: InputProps) => {
  return (
    <FormControl fullWidth sx={{ m: 0 }} variant="standard">
      <StyledInput
        id="standard-adornment-amount"
        value={value}
        placeholder="Search for a country ..."
        onChange={onChange}
        startAdornment={
          <InputAdornment position="start">
            {" "}
            <Icon component={Search} />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default Index;

const StyledInput = styled(Input)(({ theme }) => ({
  padding: theme.spacing(1),
  background: theme.palette.background.paper,
  width: "100%",
  maxWidth: "450px",
  color: theme.palette.secondary.contrastText,
  borderRadius: "5px",
  fontSize: "18px",
  fontWeight: "300",
  boxShadow: theme.shadows[1],
  "&:before": {
    display: "none",
  },
  "&:after": {
    display: "none",
  },

  "&::placeholder": {
    textOverflow: "ellipsis !important",
    color: theme.palette.secondary.contrastText,
  },
}));
