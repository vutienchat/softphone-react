import Box from "@mui/material/Box";
import Phone from "./Phone";
import PhoneContent from "./PhoneContent";

const SoftPhone = () => {
  return (
    <Box
      sx={{ height: "100%", display: "grid", gridTemplateColumns: "300px 1fr" }}
    >
      <Phone />
      <PhoneContent />
    </Box>
  );
};

export default SoftPhone;
