import { Box ,Typography,styled} from "@mui/material"
import {ShoppingCart} from "@mui/icons-material"
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Wrapper=styled(Box)`
display:flex;
`;

const Container=styled(Box)`
display:flex;
margin-left:270px;
`;

const Cart=()=>{
    return(
            <Wrapper>
            <Container>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </Container>
            <Box style={{marginLeft:20}}>
            <SupportAgentIcon />
            </Box>
            <Box>24x7 Customer care</Box>
            </Wrapper>
            
            
        
    )
}
export default Cart;