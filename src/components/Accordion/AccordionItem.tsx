import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Box from "../common/Box";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderTop: "1px solid rgba(255,255,255,0.3)",
  "&:last-child": {
    borderBottom: "1px solid rgba(255,255,255,0.3)",
  },
  "&:before": {
    display: "none",
  },
  backgroundColor: "transparent",
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  paddingLeft: 0,
  paddingRight: 0,
  alignItems: "center",
  marginLeft: 0,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingLeft: 0,
  paddingRight: 0
}));

const AccordionItem = ({
  data,
  onChange,
  expanded,
  panel,
}: {
  panel: string;
  data: any;
  onChange: (expanded: any) => void;
  expanded?: string | boolean;
}) => {
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      onChange(newExpanded ? panel : false);
    };

  return (
    <Accordion expanded={panel === expanded} onChange={handleChange(panel)}>
      <AccordionSummary
        aria-controls={`${panel}d-content`}
        id={`${panel}d-header`}
      >
        <Box cssClasses={["py-3"]}>
          <h4 className="text-white d-inline fw-bold">{data.title}</h4>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <p className="text-sm text-white">{data.description}</p>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
