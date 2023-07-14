import Typography from "@mui/material/Typography"
import Image from 'next/image'

import property_image_1 from "../../../property_images/Maharashtra/i16.jpg"
import property_image_2 from "../../../property_images/Maharashtra/i19.jpg"
import property_image_5 from "../../../property_images/Maharashtra/i18.jpg"
import property_image_4 from "../../../property_images/Maharashtra/i19.jpg"
import property_image_3 from "../../../property_images/Arunachal_Pradesh/i20.jpg"

export function PropertyCards(){
    return (
        <>
            <Typography className="card" sx={{width:"20rem",flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_1} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Hidden Forest Retreat</h5>
                    <p className="card-text">78 Karimganj Colony, Karimganj<br/>Contact Number: +91 99123 456788</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹2.1 crore</a>
                </div>

            </Typography>

            <Typography className="card" sx={{width:"20rem",flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_2} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Luxury Penthouse Living</h5>
                    <p className="card-text">234 Sonitpur Nagar, Tezpur<br/>Contact Number: +91 6654 32109</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹1.1 crore</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_3} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Coastal Dream Villa</h5>
                    <p className="card-text">901 Dhemaji Road, Dhemaji<br/>Contact Number: +91 58901 33356</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹3.56 crore</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_4} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Idyllic Country Cottage</h5>
                    <p className="card-text">543 Karbi Anglong Street, Karbi Anglong<br/>Contact Number: +91 72543 11098</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹4.55 crore</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_5} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Sustainable Eco-Cabin</h5>
                    <p className="card-text">456 Tinsukia Lane, Tinsukia<br/>Contact Number: +91 98901 23456</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹6.24 crore</a>
                </div>
            </Typography>
        </>
    );
}

export default PropertyCards;