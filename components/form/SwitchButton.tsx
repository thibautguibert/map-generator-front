import { FormControlLabel, Switch } from "@mui/material";

function SwitchButton({
  value,
  label,
  onChange,
}: {
  value: boolean;
  label: string;
  onChange: (value: boolean) => void;
}): JSX.Element {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return <FormControlLabel control={<Switch value={value} onChange={handleChange} />} label={label} />;
}

export default SwitchButton;
