'use client'

import Header from '@/core_comp/header/Header';
import Footer from '@/core_comp/footer/Footer'
import { Heading2,Heading3, Grid,Flex,Anchor,Typography } from '@/design_system';

export default function Home() {
  return (
    <>
    <Header/>
    <main> 
    <Grid column="1fr minmax(auto,70ch) 1fr" gap={"16px"}>
      <section>
       
        <Heading2 textAlign="center" margin="1rem 0 0 1rem">Thrive not just survive.</Heading2>
      
   
        <Anchor target="_blank" href="https://calendly.com/aaron_smith1/30min">
        <Heading3 color="hsl(var(--palette-blue-45))" textAlign="center" margin="1rem 0 0 1rem">Start the Conversation.</Heading3>
        </Anchor>
        </section>   
        <section>
          <Heading2>Mission</Heading2>
          <Typography>Our mission simply is to ensure that every doctor has one person to leverage their career. </Typography>
        </section>
        <section>
          <Heading2>Why?</Heading2>
          <Typography>Mentorship has always been an important in getting the most out of a career in medicine. </Typography>

<Typography>In the most recent NHS Staff Survey 35.3% of doctors reported feeling burnt out because of their work, combined with the most recent national training survey reporting 39% felt burntout to a high or very high degree. </Typography>

<Typography>When the recommendations of the most recent parlimentary committee to burnout is an overhaul of workforce there is little doctors can do day to day to combat this. The idea of a firm and togetherness is diminishing with each passing year.</Typography>

<Typography>To combat this we all need someone who we can consistently turn to that is uniquely there to support you as an individual. </Typography>

<Typography>The truth is that we don’t always don’t have access to the those that really can drive progression in your career. Ever felt that you don’t have someone in your corner to push you and your career forward? </Typography>

        </section>
        <section>
        <Heading2>Who are we?</Heading2>
        <Typography>We are a group of passionate clinicians who really care about supporting every doctor throughout their career.</Typography>

        </section>
        <section>
        <Heading2>Get in touch</Heading2>
        <Typography>Be apart of the change we need. </Typography>
        <Typography> Reach out to start the conversation and help build the future we want to see for doctors in the NHS.</Typography>
        </section>
        <section>
        <Heading2>Newsletter</Heading2>
        <Typography>
        No spam  just news, updates and opportunities to get involved into your inbox.
        </Typography>
        </section>
        </Grid>
    </main>
    <Footer/>
    </>
  );
}
