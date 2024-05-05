import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import { useState } from "react";

const PhoneContent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ borderLeft: "1px solid" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon position tabs example"
      >
        <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="start" />
        <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="start" />
        <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="start" />
        <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="start" />
      </Tabs>
    </Box>
  );
};

export default PhoneContent;
