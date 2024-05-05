import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

//@ts-expect-error use CDN
const sforce = window.sforce;

const Phone = () => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  const handleChangePanelWidth = () => {
    sforce.opencti.setSoftphonePanelWidth({
      widthPX: isExpand ? 350 : 900,
      callback: (response: any) => {
        if (response.success) {
          setIsExpand(!isExpand);
        }
      },
    });
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          my: 2,
          ml: 2,
        }}
      >
        <TextField fullWidth id="standard-basic" variant="standard" />
        <IconButton onClick={handleChangePanelWidth} size="small">
          <ArrowForwardIosIcon
            sx={{ ...(isExpand && { transform: "rotateY(180deg)" }) }}
            color="action"
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Phone;
