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
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg" paddingBottom={2} paddingTop={2}>
          Now in its 7th year, MVHacks is one of the Bay Area's top high school hackathons. Hackers of all skill levels are welcome to compete, individually or as a group!
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
          <IconButton size="lg" variant="solid" color="primary" sx={{width: "100%"}} onClick={() => {
            window.location.href = "/signup"
          }}>
              Sign Up
            <ChevronRight />
          </IconButton>
        {/*</Box>*/}
      </Box>
    </div>
  );
};

export default Hero;
