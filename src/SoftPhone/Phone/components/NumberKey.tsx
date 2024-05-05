import type { FC } from "react";
import ButtonBase from "@mui/material/ButtonBase";
import Box from "@mui/material/Box";
import type { ButtonBaseProps } from "@mui/material";

const NumberKey: FC<ButtonBaseProps> = ({ children, sx, ...rest }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <ButtonBase
        sx={{
          width: 50,
          height: 50,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: "50%",
          fontSize: 20,
          ...sx,
        }}
        {...rest}
      >
        {children}
      </ButtonBase>
    </Box>
  );
};

export default NumberKey;
