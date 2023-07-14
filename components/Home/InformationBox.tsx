
import dynamic from 'next/dynamic'

export function InformationBox(){
    return (
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%", marginTop:"5vh"}}>
            <p style={{textAlign:"center", fontFamily:"Ysabeau Office", fontSize:"20px"}}>
            &nbsp; &nbsp; Welcome to Property Forager, where your real estate dreams become a captivating reality! Prepare to embark on a remarkable journey through a vast selection of properties that will leave you breathless. As the premier destination for seekers of exceptional homes, we have meticulously curated a collection of stunning listings that are sure to enchant and inspire. Whether you're a first-time buyer, an astute investor, or simply looking to upgrade your living space, our user-friendly interface and innovative search features will guide you seamlessly towards your perfect property match. Immerse yourself in the seamless fusion of cutting-edge technology and unrivaled expertise, as our team of seasoned professionals caters to your every need, providing unparalleled support and personalized recommendations. At Property Forager, we believe that every home holds a unique story, waiting to be discovered. So let the hunt begin and uncover the extraordinary possibilities that await you on this exhilarating real estate adventure.
            </p>
          </div>
    );  
};

export default dynamic (()=>Promise.resolve(InformationBox), {ssr:false})