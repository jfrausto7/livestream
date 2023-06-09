import React from "react";
import FooterItems from "./FooterItems";
import styled from "styled-components";
import { Container, Grid, Box, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  //Icons are wrapped in IconButton to allow link redirects
  return (
    <FooterContainer>
      <Box>
        <Container maxWidth="lg">
          <Grid container direction="row" spacing={5}>
            <FooterItems />
          </Grid>
          <Box>
            <IconButton disabled={true}>
              <FacebookIcon alt="Facebook logo" />
            </IconButton>
            <IconButton disabled={true}>
              <TwitterIcon alt="Twitter logo" />
            </IconButton>
            <IconButton disabled={true}>
              <InstagramIcon alt="Instagram logo" />
            </IconButton>
            <IconButton
              href="https://github.com/jfrausto7/livestreamMVP"
              target="_blank"
              rel="noreffer"
              alt="Github logo with link to the project repository"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
          <Box>Purrfect &reg; {new Date().getFullYear()}</Box>
        </Container>
      </Box>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding: 20px;
  background: #3b93ff;
  color: #fff;
`;
//grey color background: #ced0ce;
// blue background: #5297dd;
