import React from "react";
import { Box, Chip, Input } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Header from "./Header";
import {ArrowForward, ChevronRight} from "@mui/icons-material";
import Button from "@mui/joy/Button";

const Hero = () => {
  return (
    <div className={"two-col"}>
      <Box>
        <Chip size="lg" variant="outlined" color="neutral">
          MVHacks 7.0
        </Chip>
        <Header />
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg" paddingTop={2} paddingBottom={2}>
          Each year, high school hackers from across the Bay Area come together at MVHacks to create cool projects, learn from experts, and participate in 12 hours of hacking! Hackers of all skill levels are welcome to compete, individually or as a group. This year's event took place from 8 am to 8 pm Sunday, April 28th, 2024 in Mountain View's Hacker Dojo. <Box sx={{ fontWeight: 'bold' }} display='inline'>**You can now sign up to be alerted when details about MVHacks 8.0 are released. Additionally, applications to join the MVHacks team are now open and must be submitted by September 15th at 11:59 PM.</Box>
        </Typography>
        {/*<Box*/}
        {/*  action="https://api.web3forms.com/submit"*/}
        {/*  method="POST"*/}
        {/*  component="form"*/}
        {/*  sx={{*/}
        {/*    display: "flex",*/}
        {/*    gap: 1,*/}
        {/*    my: 2,*/}
        {/*    alignSelf: "stretch",*/}
        {/*    flexBasis: "80%",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <input*/}
        {/*    type="hidden"*/}
        {/*    name="access_key"*/}
        {/*    value="50e99b85-f308-4801-9635-b6e5c1459742"*/}
        {/*  />*/}
          {/*Access key is public anyway*/}
          {/*<input type="hidden" name="subject" value="New sign-up" />*/}
          {/*<input*/}
          {/*  type="hidden"*/}
          {/*  name="redirect"*/}
          {/*  value="https://web3forms.com/success"*/}
          {/*/>*/}
          {/*<input*/}
          {/*  type="checkbox"*/}
          {/*  name="botcheck"*/}
          {/*  id=""*/}
          {/*  style={{ display: "none" }}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*  required*/}
          {/*  autoFocus={true}*/}
          {/*  id="email"*/}
          {/*  name="email"*/}
          {/*  type="email"*/}
          {/*  size="lg"*/}
          {/*  placeholder="Get notified"*/}
          {/*  sx={{ flex: "auto" }}*/}
          {/*/>*/}
        <IconButton size="lg" variant="solid" color="primary" sx={{ width: "100%" }} onClick={() => {
          window.location.href = "https://tinyurl.com/mvh8interest"
        }}>
              Alert Me
            <ChevronRight />
          </IconButton>
        {/*</Box>*/}
      </Box>
    </div>
  );
};

export default Hero;
