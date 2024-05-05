import Box from "@mui/material/Box";
import Phone from "./Phone";
import PhoneContent from "./PhoneContent";
import { useState } from "react";

//@ts-expect-error use CDN
const sforce = window.sforce;

const SoftPhone = () => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  const handleChangePanelWidth = () => {
    setIsExpand(!isExpand);
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
    <Box
      sx={{ height: "100%", display: "grid", gridTemplateColumns: "350px 1fr" }}
    >
      <Phone isExpand={isExpand} onChangePanelWidth={handleChangePanelWidth} />
      {isExpand && <PhoneContent />}
    </Box>
  );
};

export default SoftPhone;
