import Typography from "@mui/material/Typography"
import Image from 'next/image'

import property_image_4 from "../../../property_images/Bihar/i11.jpg"
import property_image_2 from "../../../property_images/Goa/i12.jpg"
import property_image_3 from "../../../property_images/Bihar/i13.jpg"
import property_image_1 from "../../../property_images/Goa/i14.jpg"
import property_image_5 from "../../../property_images/Bihar/i15.jpg"

export function PropertyCards(){
    return (
        <>
            <Typography className="card" sx={{width:"20rem",flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_1} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Majestic Historic Residence</h5>
                    <p className="card-text">234 Barpeta Nagar, Barpeta<br/>Contact Number: +91 92123 456788</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹5.1 crore</a>
                </div>

            </Typography>

            <Typography className="card" sx={{width:"20rem",flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_2} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Contemporary Urban Condot</h5>
                    <p className="card-text">901 Golaghat Road, Golaghat<br/>Contact Number: +91 77654 32109</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹10.1 crore</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_3} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Seaside Paradise Villa</h5>
                    <p className="card-text">678 Sivasagar Lane, Sivasagar<br/>Contact Number: +91 58901 23456</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹1.56 crore</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_4} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Cozy Mountain Chalet</h5>
                    <p className="card-text">543 Goalpara Street, Goalpara<br/>Contact Number: +91 72543 21098</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹2.45 crore</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_5} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Cozy Mountain Chalet</h5>
                    <p className="card-text">145 Dhubri Road, Dibrugarh<br/>Contact Number: +91 68901 23456</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹8.13 crore</a>
                </div>
            </Typography>
        </>
    );
}

export default PropertyCards;