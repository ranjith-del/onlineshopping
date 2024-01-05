
import BannerImg from "./BannerImg"
import Navbar from "./Navbar";
import {Box,styled} from "@mui/material";

const Component=styled(Box)`
padding:10px;
background:#F2F2F2;
`;

const Home=()=>{
    return(
        <div>
        <Navbar />
        <Component>
        <BannerImg />
        </Component>
        </div>
    )
}

export default Home;