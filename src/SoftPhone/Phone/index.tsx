import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  isExpand: boolean;
  onChangePanelWidth: () => void;
}

const Phone = (props: Props) => {
  const { isExpand, onChangePanelWidth } = props;

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
        <IconButton onClick={onChangePanelWidth} size="small">
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
