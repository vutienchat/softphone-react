import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Fragment } from "react/jsx-runtime";

import NumberKey from "./NumberKey";

const NUMBER_KEY = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];

interface Props {
  isExpand: boolean;
  onChangePanelExpand: (expand: boolean) => void;
}

const Dialpad = (props: Props) => {
  const { isExpand, onChangePanelExpand } = props;

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          my: 2,
          ml: 2,
        }}
      >
        <TextField fullWidth variant="standard" />
        <IconButton onClick={() => onChangePanelExpand(!isExpand)} size="small">
          <ArrowForwardIosIcon
            sx={{ ...(isExpand && { transform: "rotateY(180deg)" }) }}
            color="action"
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          px: 7,
          gap: 2.5,
        }}
      >
        {NUMBER_KEY.map((num) => (
          <NumberKey key={num}>{num}</NumberKey>
        ))}
        <Box sx={{ gridColumn: "span 3" }}>
          <NumberKey sx={{ backgroundColor: "#28a745", color: "#fff" }}>
            <PhoneIcon fontSize="large" />
          </NumberKey>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Dialpad;
