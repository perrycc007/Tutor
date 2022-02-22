import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SimpleAccordion = (props) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.title}</Typography>
          <Typography>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            {props.description}
          </Typography>
          <Typography>
            {props.description}
          </Typography>
            <button onClick={props.clicked}>
                {props.isFav ? 'Remove from Favorites' : 'To Favorites'}
            </button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SimpleAccordion;
