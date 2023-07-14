import Typography from "@mui/material/Typography"
import Image from 'next/image'
import property_image_6 from '../../../property_images/Andhra_Pradesh/property_image_6.jpg'
import property_image_7 from '../../../property_images/Andhra_Pradesh/property_image_7.jpg'
import property_image_8 from '../../../property_images/Andhra_Pradesh/property_image_8.jpg'
import property_image_9 from '../../../property_images/Andhra_Pradesh/property_image_9.jpg'
import property_image_10 from '../../../property_images/Andhra_Pradesh/property_image_10.jpg'

export function PropertyCards(){
    return (
        <>
            <Typography className="card" sx={{width:"20rem",flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_6} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Majestic Mountain Lodge</h5>
                    <p className="card-text">987, Oceanic Heights, Kakinada<br/>Contact No: 83145-74589</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹91 lakhs</a>
                </div>

            </Typography>

            <Typography className="card" sx={{width:"20rem",flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_7} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Coastal Breeze Oasis</h5>
                    <p className="card-text">234, Silver Sands, Nellore<br/>Contact No: 83145-74589</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹88 lakhs</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_8} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Enchanted Forest Retreat</h5>
                    <p className="card-text">567, Emerald Gardens, Anantapur<br/>Contact No: 83145-74589</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹2.6 crore</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_9} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Harmony Cove Cottage</h5>
                    <p className="card-text">432, Ruby Lane, Vizianagaram<br/>Contact No: +91 90123 45678</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹1.1 crore</a>
                </div>
            </Typography>

            <Typography className="card" sx={{width:"20rem", flexGrow:"0.2", marginTop:"1rem", marginBottom:"1rem", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
                <Image className="card-img-top" style={{width:"100%", height:"65%"}} src={property_image_10} alt="Card image cap"/>

                <div className="card-body" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
                    <h5 className="card-title">Blissful Bayview Mansion</h5>
                    <p className="card-text">890, Sapphire Enclave, Kadapa<br/>Contact No: 83145-74589</p>
                    <a href="#" className="btn btn-primary" style={{backgroundColor:"rgb(137,118,205)"}}>Expected Price: ₹82 lakhs</a>
                </div>
            </Typography>
        </>
    );
}

export default PropertyCards;