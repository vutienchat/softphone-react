import PhoneIcon from "@mui/icons-material/Phone";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PersonIcon from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import LeadIcon from "../../assets/icons/Lead";
import Typography from "@mui/material/Typography";

const PhoneContent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ borderLeft: (theme) => `1px solid ${theme.palette.divider}` }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiButtonBase-root": {
              minHeight: "auto",
            },
          }}
        >
          <Tab
            icon={
              <Box
                sx={{
                  backgroundColor: "#9050e9",
                  color: "#ffffff",
                  borderRadius: 1,
                  height: 24,
                  width: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InsertChartIcon sx={{ fontSize: 20 }} />
              </Box>
            }
            iconPosition="start"
            label={
              <Typography variant="subtitle2" sx={{ textTransform: "none" }}>
                Thống kê
              </Typography>
            }
          />
          <Tab
            icon={
              <Box
                sx={{
                  backgroundColor: "#3ba755",
                  color: "#ffffff",
                  borderRadius: 1,
                  height: 24,
                  width: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PhoneIcon sx={{ fontSize: 20 }} />
              </Box>
            }
            iconPosition="start"
            label={
              <Typography variant="subtitle2" sx={{ textTransform: "none" }}>
                Hàng đợi
              </Typography>
            }
          />
          <Tab
            icon={
              <LeadIcon
                sx={{
                  backgroundColor: "#1b96ff",
                  color: "#ffffff",
                  borderRadius: 1,
                }}
              />
            }
            iconPosition="start"
            label={
              <Typography variant="subtitle2" sx={{ textTransform: "none" }}>
                Tạo lead
              </Typography>
            }
          />
          <Tab
            icon={
              <Box
                sx={{
                  backgroundColor: "#ff5d2d",
                  color: "#ffffff",
                  borderRadius: 1,
                  height: 24,
                  width: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PersonIcon sx={{ fontSize: 20 }} />
              </Box>
            }
            iconPosition="start"
            label={
              <Typography variant="subtitle2" sx={{ textTransform: "none" }}>
                Thông tin
              </Typography>
            }
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default PhoneContent;
