import "./App.css";
import SocialButton from "./components/Button";
import {
  Container,
  Typography,
  ThemeProvider,
  Grid,
  Avatar,
} from "@mui/material";
import AnimatedCard from "./components/AnimatedButton";
import data from "./data.json";
import theme from "./Theme";
import { Icon } from "@mui/material";
import { loadCSS } from "fg-loadcss";
import React from "react";

function App() {
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
      // Inject before JSS
      document.querySelector("#font-awesome-css") || document.head.firstChild
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container direction="column" alignItems="center" justify="center">
          <Avatar
            src={data.avatar}
            variant="logo"
            sx={{ width: 200, height: "auto" }}
          />
          <Typography variant="username">{data.username}</Typography>
          <Typography variant="description">{data.description}</Typography>

          <br />
          {data.links.map((link) => (
            //<SocialButton key={link.name} name={link.name} link={link.link} />
            <AnimatedCard name={link.name} link={link.link} />
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
