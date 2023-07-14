import Typography from "@mui/material/Typography"
import Image from 'next/image'

import property_image_1 from "../../../property_images/Bihar/i11.jpg"
import property_image_2 from "../../../property_images/Assam/i13.jpg"
import property_image_3 from "../../../property_images/Bihar/i13.jpg"
import property_image_4 from "../../../property_images/Assam/i14.jpg"
import property_image_5 from "../../../property_images/Bihar/i15.jpg"

export function PropertyCards(){
    return (
        <>
            <Typography className="card" sx={{width:"20rem",flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_1} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Enchanting Forest Cabin</h5>
                    <p className="card-text">145 Motihari Road, Motihari<br/>Contact Number: +91 96123 766788</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹1.5 crore</a>
                </div>

            </Typography>

            <Typography className="card" sx={{width:"20rem",flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_2} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Luxurious Skyline Penthouse</h5>
                    <p className="card-text">78 Saharsa Colony, Saharsa<br/>Contact Number: +91 6756 52809</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹3.4 crore</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_3} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Coastal Charm Villa</h5>
                    <p className="card-text">562 Munger Street, Munger<br/>Contact Number: +91 88910 35356</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹2.75 crore</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_4} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Quaint Countryside Cottage</h5>
                    <p className="card-text">321 Aurangabad Nagar, Aurangabad<br/>Contact Number: +91 99534 12898</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹1.67 crore</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_5} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Modern Suburban Townhouse</h5>
                    <p className="card-text">789 Nawada Road, Nawada<br/>Contact Number: +91 87912 66456</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹2.1 crore</a>
                </div>
            </Typography>
        </>
    );
}

export default PropertyCards;