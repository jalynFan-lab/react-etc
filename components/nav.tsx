import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const Nav = () => {
  return (
    <Box
      sx={{
        typography: "body1",
        "& > :not(style) + :not(style)": {
          ml: 2,
        },
      }}
    >
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/superHeros'>
        <a>SuperHeros</a>
      </Link>
      <Link href='/rQSuperHeros'>
        <a>RQSuperHeros</a>
      </Link>
    </Box>
  );
};

export default Nav;
