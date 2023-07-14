import Typography from "@mui/material/Typography"
import Image from 'next/image'
import property_image_1 from '../../../property_images/Chhattisgarh/i1.jpg'
import property_image_2 from '../../../property_images/Chhattisgarh/i2.jpg'
import property_image_3 from '../../../property_images/Chhattisgarh/i3.jpg'
import property_image_4 from '../../../property_images/Chhattisgarh/i4.jpg'
import property_image_5 from '../../../property_images/Chhattisgarh/i5.jpg'

import {Title} from '../../../form'
import {Address} from '../../../form'
import {City} from '../../../form'
import {value_check} from '../../../form'

export let value="11"
 
function addNewCard(){
  if(value_check!=value) return null;
  else{
    console.log(File)
    return (
        <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_1} alt="Card image cap"/>

                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Address} {City}</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Go somewhere</a>
                </div>
            </Typography>
    );
  }
}


export function PropertyCards(){
    return (
        <>
            <Typography className="card" sx={{width:"20rem",flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_1} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Tranquil Haven Retreat</h5>
                    <p className="card-text">123, Green View Apartments, Vijayawada<br/>Contact No: 94673-10298</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹1.5 crore</a>
                </div>

            </Typography>

            <Typography className="card" sx={{width:"20rem",flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_2} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Serene Meadows Estate</h5>
                    <p className="card-text">456, Rose Street, Guntur<br/>Contact No: 94673-10298</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹3.2 crore</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_3} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Sunset Vista Villas</h5>
                    <p className="card-text">789, Lakeview Colony, Visakhapatnam<br/>Contact No: 94673-10298</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹75 lakhs</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_4} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Whispering Pines Hideaway</h5>
                    <p className="card-text">321, Sunrise Avenue, Rajahmundry<br/>Contact No: 94673-10298</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹1.4 crore</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_5} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Radiant Sunflower Manor</h5>
                    <p className="card-text">654, Palm Grove Road, Tirupati<br/>Contact No: 94673-10298</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹1 crore</a>
                </div>
            </Typography>

            {addNewCard()}
        </>
    );
}

export default PropertyCards;