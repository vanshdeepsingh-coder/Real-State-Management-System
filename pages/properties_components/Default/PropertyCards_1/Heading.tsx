import { experimentalStyled as styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography"

export function Heading(){
    const StyledHeading = styled(Typography)(({ theme }) => ({
        fontWeight: 500,
      }));
      
    return (
        <StyledHeading style={{display:"flex", justifyContent:"center", marginTop:"3vh", marginBottom:"2vh",fontFamily:"Lilita One"}} variant="h2">Find your dream home with Property Forager</StyledHeading>
    );
}

export default Heading;