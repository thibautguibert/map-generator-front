import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface ISelectorProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

function Selector({ options, value, onChange }: ISelectorProps): JSX.Element {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="selector">Base biome</InputLabel>
      <Select labelId="selector" value={value} label="Base biome" onChange={handleChange}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Selector;
