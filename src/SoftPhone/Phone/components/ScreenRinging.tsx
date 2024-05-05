import PhoneIcon from "@mui/icons-material/Phone";

import NumberKey from "./NumberKey";

interface Props {
  onAnswerCall: () => void;
}

const ScreenRinging = (props: Props) => {
  const { onAnswerCall } = props;
  return (
    <div>
      <NumberKey
        sx={{ backgroundColor: "#28a745", color: "#fff" }}
        onClick={onAnswerCall}
      >
        <PhoneIcon fontSize="large" />
      </NumberKey>
    </div>
  );
};

export default ScreenRinging;
