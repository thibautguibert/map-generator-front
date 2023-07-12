import styled from "@emotion/styled";
import { Checkbox, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import { topRow } from "@styles/index.style";
import { ChangeEvent, useEffect, useState } from "react";

const CheckboxContainer = styled.div`
  ${topRow}
`;

const ErrorText = styled.div`
  color: red;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
`;

interface ICheckboxGroupProps {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
}

function CheckboxGroup({ options, value, onChange }: ICheckboxGroupProps) {
  const [error, setError] = useState(false);
  useEffect(() => {
    setError(value.length === 0);
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;
    const newValue = checked ? [...value, name] : value.filter((item) => item !== name);
    onChange(newValue);
  };

  return (
    <FormGroup>
      <FormLabel component="legend">Pick at least one type of biome:</FormLabel>
      <CheckboxContainer>
        {options.map((option) => (
          <FormControlLabel
            key={option}
            control={<Checkbox onChange={handleChange} name={option} checked={value.includes(option)} />}
            label={option}
          />
        ))}
      </CheckboxContainer>
      {error && <ErrorText>Please select at least one option</ErrorText>}
    </FormGroup>
  );
}

export default CheckboxGroup;
