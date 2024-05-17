import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { AskedQuestionsWrapper, FAQConrainer, InputWrapper, SendQuestionWrapper } from '../../../styles/carInfoStyle';

export default function FAQComponent() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_o5ao8bp', 'template_o1ptwpj', form.current, {
            publicKey: 'm413NYcWa48YEs7hQ',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert("Your message is sent")
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert("fail")
            },
          );
      };
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <FAQConrainer>
      <AskedQuestionsWrapper>
      
        <Accordion sx={{borderRadius: "10px", border: "none", boxShadow: "none", boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:"#006DAB"}}/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{fontWeight: "550"}}>How to order camping car?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{borderRadius: "10px", border: "none", boxShadow: "none", boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:"#006DAB"}}/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{fontWeight: "550"}}>Does my money returns if i cancel order?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{borderRadius: "10px", border: "none", boxShadow: "none", boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:"#006DAB"}}/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{fontWeight: "550"}}>Frequently asked questions </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{borderRadius: "10px", border: "none", boxShadow: "none", boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:"#006DAB"}}/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography  sx={{fontWeight: "550"}}>Do Camping Places are avaliable on weekends?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{borderRadius: "10px", border: "none", boxShadow: "none", boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:"#006DAB"}}/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography  sx={{fontWeight: "550"}}>Is there any driving experience requirements for caravans</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{borderRadius: "10px", border: "none", boxShadow: "none", boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:"#006DAB"}}/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography  sx={{fontWeight: "550"}}>Frequently asked questions </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </AskedQuestionsWrapper>
      <SendQuestionWrapper>
          <InputWrapper>
          <h2>Have you got a question</h2>
      <form
      ref={form}
      onSubmit={sendEmail}
      style={{width: "100%"}}
      >
            <Box
          sx={{
            width: "100%",
            border: "none",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
          }}
      >
        <TextField  name="user_name"fullWidth required label="Your name" id="fullWidth" sx={{border: "none",  backgroundColor: "#FAFAFA",}}/>
        <TextField name="user_email" fullWidth required label="Your email" id="fullWidth" sx={{border: "none", backgroundColor: "#FAFAFA",}}/>
        <Textarea name="message" required placeholder="Your question" minRows={5} sx={{backgroundColor: "#FAFAFA",}}/>
        <Button type="submit" value="Send" sx={{height:"50px"}}>Send question</Button>
      </Box>
      </form>
         </InputWrapper>
      </SendQuestionWrapper>
      </FAQConrainer>
    </div>
  );
}