import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { AnswerQuestionsWrapper, DividerWrapper, FAQConrainer, InputWrapper, QnAWrapper, SendQuestionWrapper } from '../../../styles/carInfoStyle';

export default function QnAComponent() {
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
    <div style={{display: "flex", justifyContent: "center"}}>
      <FAQConrainer>
         <AnswerQuestionsWrapper>
        <QnAWrapper $marginTop37>
          <p>Name</p>
          <h3>Question Lorem ipsum dolor sit amet ?</h3>
          <DividerWrapper></DividerWrapper>
      
        </QnAWrapper>
        <QnAWrapper>
          <p>Name</p>
          <h3>Question Lorem ipsum dolor sit amet ?</h3>
          <DividerWrapper></DividerWrapper>
      
        </QnAWrapper>
        <QnAWrapper>
          <p>Name</p>
          <h3>Question Lorem ipsum dolor sit amet ?</h3>
          <DividerWrapper></DividerWrapper>
      
        </QnAWrapper>
        <QnAWrapper>
          <p>Name</p>
          <h3>Question Lorem ipsum dolor sit amet ?</h3>
          <DividerWrapper></DividerWrapper>
      
        </QnAWrapper>
        <QnAWrapper>
          <p>Name</p>
          <h3>Question Lorem ipsum dolor sit amet ?</h3>
          <DividerWrapper></DividerWrapper>
      
        </QnAWrapper>
         </AnswerQuestionsWrapper>
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