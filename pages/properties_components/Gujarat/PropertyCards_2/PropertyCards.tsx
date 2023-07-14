import Typography from "@mui/material/Typography"
import Image from 'next/image'

import property_image_1 from "../../../property_images/Gujarat/i6.jpg"
import property_image_2 from "../../../property_images/Gujarat/i7.jpg"
import property_image_5 from "../../../property_images/Gujarat/i8.jpg"
import property_image_4 from "../../../property_images/Gujarat/i9.jpg"
import property_image_3 from "../../../property_images/Gujarat/i10.jpg"

export function PropertyCards(){
    return (
        <>
            <Typography className="card" sx={{width:"20rem",flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_1} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Historic Elegance at its Finest</h5>
                    <p className="card-text">456 Purnia Lane, Purnia<br/>Contact Number: +91 69123 766788</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹76.5 lakhs</a>
                </div>

            </Typography>

            <Typography className="card" sx={{width:"20rem",flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_2} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Urban Living with Panoramic Views</h5>
                    <p className="card-text">234 Chapra Nagar, Chapra<br/>Contact Number: +91 7656 52809</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹74.2 lakhs</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_3} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Seaside Escape Villa</h5>
                    <p className="card-text">901 Hajipur Road, Hajipur<br/>Contact Number: +91 98910 35356</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹86.5 lakhs</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_4} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Cozy Mountain Getaway</h5>
                    <p className="card-text">678 Samastipur Lane, Samastipur<br/>Contact Number: +91 72534 12898</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹33.5 lakhs</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_5} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Vineyard Paradise Estate</h5>
                    <p className="card-text">543 Katihar Street, Katihar<br/>Contact Number: +91 85912 66456</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹61.2 lakhs</a>
                </div>
            </Typography>
        </>
    );
}

export default PropertyCards;