import { experimentalStyled as styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography"

export function Heading(){
    const StyledHeading = styled(Typography)(({ theme }) => ({
        fontWeight: 500,
      }));
      
    return (
        <StyledHeading style={{display:"flex", justifyContent:"center", marginTop:"6vh", marginBottom:"4vh",fontFamily:"Lilita One"}} variant="h3">Embrace Urban Living in Assam's Trendiest District</StyledHeading>
    );
}

export default Heading;