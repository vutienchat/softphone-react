import { createSvgIcon } from "@mui/material";

const LeadIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    focusable="false"
    data-key="lead"
    aria-hidden="true"
    viewBox="0 0 1000 1000"
  >
    <g>
      <path
        fill="currentColor"
        d="M780 440H220c-20 0-28 25-11 36l146 94c7 5 11 14 8 22l-55 183c-6 20 20 34 35 19l142-150c8-9 22-9 30 0l142 150c14 15 40 1 35-19l-55-183c-2-8 1-17 8-22l146-94c17-11 9-36-11-36z"
      ></path>
      <circle fill="currentColor" cx="500" cy="290" r="90"></circle>
    </g>
  </svg>,
  "Lead"
);

export default LeadIcon;
