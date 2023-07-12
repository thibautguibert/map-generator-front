import styled from "@emotion/styled";
import { FormControl, Slider, Input, InputLabel } from "@mui/material";
import { topRow } from "@styles/index.style";

const MuiInput = styled(Input)`
  width: 3rem;
`;

const Container = styled.div`
  ${topRow}
  margin-top: 0.5rem;
  gap: 0.75rem;
`;

interface IInputSliderProps {
  value: number;
  setValue: (value: number) => void;
  min: number;
  max: number;
  label: string;
}

function InputSlider({ value, setValue, min, max, label }: IInputSliderProps): JSX.Element {
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < min) {
      setValue(min);
    } else if (value > max) {
      setValue(max);
    }
  };

  return (
    <FormControl>
      <InputLabel id="input-slider">{label}</InputLabel>
      <Container>
        <Slider value={value} onChange={handleSliderChange} aria-labelledby="input-slider" min={min} max={max} />
        <MuiInput
          value={value}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          disableUnderline
          inputProps={{
            min,
            max,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
      </Container>
    </FormControl>
  );
}

export default InputSlider;
