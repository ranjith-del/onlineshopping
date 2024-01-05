import { AppBar, Toolbar, styled, Box } from "@mui/material";
import Searchbar from "./Searchbar";
import Cart from "./Cart";

const  Bar=styled(AppBar)`
background-color:grey;
`;
const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Component = styled(Box)`
  margin-left: 12%;
`;


const Header = () => {
  const logoURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMCY364pAOrjOzboSGNQLbO5JunnKxD15JLIlYb_kwWdPB1PLtdmtqgxzM3w9xq5m23A&usqp=CAU";

  return (
    <Bar>
      <Toolbar style={{ minHeight: 55 }}>
        <Component>
          <img src={logoURL} alt="logo" style={{ width: 90 }} />
          <Box style={{ display: "flex" }}>
            
          </Box>
        </Component>
        <Searchbar />
        <Box>
            <Cart />
        </Box>
      </Toolbar>
    </Bar>
  );
};

export default Header;
