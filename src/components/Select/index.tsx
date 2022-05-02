import React from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

interface SelectProps {
  value: string;
  onChange: (e: SelectChangeEvent<unknown>) => void;
}
const Index = ({ value, onChange }: SelectProps) => {
  return (
    <FormControl sx={{ m: 0, minWidth: 120 }}>
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        input={<BootstrapInput />}
      >
        <StyledMenuItem value="">Filter by region</StyledMenuItem>
        <StyledMenuItem value="Africa">Africa</StyledMenuItem>
        <StyledMenuItem value="America">America</StyledMenuItem>
        <StyledMenuItem value="Asia">Asia</StyledMenuItem>
        <StyledMenuItem value="Europe">Europe</StyledMenuItem>
        <StyledMenuItem value="Ocenia">Ocenia</StyledMenuItem>
      </Select>
    </FormControl>
  );
};

export default Index;

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  fontSize: "18px",
  fontWeight: "300",
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    width: "250px",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid transparent",
    fontSize: 18,
    lineHeight: "25px",
    padding: theme.spacing(1.2, 1.5),
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    boxShadow: theme.shadows[1],
    fontFamily: ['"Nunito Sans", sans-serif', "Arial", "sans-serif"].join(","),
    "&:focus": {
      borderRadius: 5,
      borderColor: "transparent",
      boxShadow: "none",
    },
  },
}));
