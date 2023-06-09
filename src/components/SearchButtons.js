import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { PurrfectContext } from "../PurrfectProvider";
import { useContext } from "react";

export default function SearchButtons() {
  const { search, handleSearch } = useContext(PurrfectContext);

  return (
    <FormControl sx={{ mb: "0.5rem" }}>
      <FormLabel id="row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons-group-label"
        name="animalType"
        value={search.animalType}
        onChange={handleSearch}
      >
        <FormControlLabel value="cat" control={<Radio />} label="Cats" />
        <FormControlLabel value="dog" control={<Radio />} label="Dogs" />
      </RadioGroup>
    </FormControl>
  );
}
