// import React, { useState } from "react";
// import MuiAccordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const AccordionComponent = ({ data }) => {
//   const [expanded, setExpanded] = useState(false);

//   // Handle accordion expansion
//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <div>
//       {data.map((item, index) => (
//         <MuiAccordion
//           key={index}
//           expanded={expanded === index} // check if this accordion is expanded
//           onChange={handleChange(index)}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls={`panel${index}-content`}
//             id={`panel${index}-header`}
//             sx={{
//               backgroundColor: expanded === index ? "#59dab2" : "inherit", // apply #59dab2 when expanded
//               transition: "background-color 0.3s ease", // smooth transition
//             }}
//           >
//             {item.title}
//           </AccordionSummary>
//           <AccordionDetails>{item.content}</AccordionDetails>
//         </MuiAccordion>
//       ))}
//     </div>
//   );
// };

// export default AccordionComponent;

// import React, { useState } from "react";
// import MuiAccordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const AccordionComponent = ({ data }) => {
//   const [expanded, setExpanded] = useState(false);

//   // Handle accordion expansion
//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <div>
//       {data.map((item, index) => (
//         <MuiAccordion
//           key={index}
//           expanded={expanded === index} // check if this accordion is expanded
//           onChange={handleChange(index)}
//           sx={{
//             marginBottom: "16px", // Add margin between accordion items
//             padding: "10px",
//             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls={`panel${index}-content`}
//             id={`panel${index}-header`}
//             sx={{
//               backgroundColor: expanded === index ? "#59dab2" : "inherit", // apply #59dab2 when expanded
//               transition: "background-color 0.3s ease", // smooth transition
//             }}
//           >
//             {item.title}
//           </AccordionSummary>
//           <AccordionDetails>{item.content}</AccordionDetails>
//         </MuiAccordion>
//       ))}
//     </div>
//   );
// };

// export default AccordionComponent;

// import React, { useState } from "react";
// import MuiAccordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const AccordionComponent = ({ data }) => {
//   const [expanded, setExpanded] = useState(false);

//   // Handle accordion expansion
//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <div>
//       {data.map((item, index) => (
//         <MuiAccordion
//           key={index}
//           expanded={expanded === index} // check if this accordion is expanded
//           onChange={handleChange(index)}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls={`panel${index}-content`}
//             id={`panel${index}-header`}
//             sx={{
//               backgroundColor: expanded === index ? "#59dab2" : "inherit", // apply #59dab2 when expanded
//               transition: "background-color 0.3s ease", // smooth transition
//             }}
//           >
//             {item.title}
//           </AccordionSummary>
//           <AccordionDetails>{item.content}</AccordionDetails>
//         </MuiAccordion>
//       ))}
//     </div>
//   );
// };

// export default AccordionComponent;

import React, { useState } from "react";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionComponent = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  // Handle accordion expansion
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((item, index) => (
        <MuiAccordion
          key={index}
          expanded={expanded === index} // check if this accordion is expanded
          onChange={handleChange(index)}
          sx={{
            marginBottom: "16px", // Add margin between accordion items
            padding: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              backgroundColor: expanded === index ? "#59dab2" : "inherit", // apply #59dab2 when expanded
              transition: "background-color 0.3s ease", // smooth transition
            }}
          >
            {item.title}
          </AccordionSummary>
          <AccordionDetails>{item.content}</AccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
};

export default AccordionComponent;
