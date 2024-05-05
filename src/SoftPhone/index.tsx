import Box from "@mui/material/Box";
import Phone from "./Phone";
import PhoneContent from "./PhoneContent";
import { useState } from "react";

//@ts-expect-error use CDN
const sforce = window.sforce;

const SoftPhone = () => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  const handleChangePanelExpand = (isExpand: boolean) => {
    // setIsExpand(isExpand);
    sforce.opencti.setSoftphonePanelWidth({
      widthPX: isExpand ? 900 : 350,
      callback: (response: any) => {
        if (response.success) {
          setIsExpand(isExpand);
        }
      },
    });
  };

  return (
    <Box
      sx={{ height: "100%", display: "grid", gridTemplateColumns: "348px 1fr" }}
    >
      <Phone
        isExpand={isExpand}
        onChangePanelExpand={handleChangePanelExpand}
      />
      {isExpand && <PhoneContent />}
    </Box>
  );
};

export default SoftPhone;
