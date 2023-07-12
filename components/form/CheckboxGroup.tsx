import styled from "@emotion/styled";
import { Checkbox, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import { topRow } from "@styles/index.style";
import { ChangeEvent } from "react";

const CheckboxContainer = styled.div`
  ${topRow}
`;

interface ICheckboxGroupProps {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
}

function CheckboxGroup({ options, value, onChange }: ICheckboxGroupProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;
    const newValue = checked ? [...value, name] : value.filter((item) => item !== name);
    onChange(newValue);
  };
  return (
    <FormGroup>
      <FormLabel component="legend">Pick at least one type of biome</FormLabel>
      <CheckboxContainer>
        {options.map((option) => (
          <FormControlLabel
            key={option}
            control={<Checkbox onChange={handleChange} name={option} checked={value.includes(option)} />}
            label={option}
          />
        ))}
      </CheckboxContainer>
    </FormGroup>
  );
}

export default CheckboxGroup;
