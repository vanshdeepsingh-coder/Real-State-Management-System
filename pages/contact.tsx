import Layout from "@/components/Layout/Layout";
import Input from "@mui/material/Input"
import image from './image/image36.jpg'
import dynamic from 'next/dynamic'

export function ContactUs() {
  return (
    <Layout pageTitle="Contact Us">
      <div style={{display:"flex", backgroundImage:`url(${image.src})`, backgroundSize:"100% 100%", flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100vw",height:"700px" }}>
        <div style={{display:"flex",flexDirection:"column",borderRadius:"10px",justifyContent:"center",alignItems:"center",backgroundColor:"white",width:"70vw", height:"600px", marginBottom:"60px"}}>
        <form style={{backgroundColor:"white",width:"60vw", height:"530px"}}>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <Input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Select your State</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>Andhra Pradesh</option>
      <option>Arunachal Pradesh</option>
      <option>Assam</option>
      <option>Bihar</option>
      <option>Goa</option>
      <option>Gujarat</option>
      <option>Haryana</option>
      <option>Himachal Pradesh</option>
      <option>Jharkhand</option>
      <option>Karnataka</option>
      <option>Kerala</option>
      <option>Madhya Pradesh</option>
      <option>Maharashtra</option>
      <option>Manipur</option>
      <option>Meghalaya</option>
      <option>Mizoram</option>
      <option>Nagaland</option>
      <option>Odisha</option>
      <option>Punjab</option>
      <option>Rajasthan</option>
      <option>Sikkim</option>
      <option>Tamil Nadu</option>
      <option>Telangana</option>
      <option>Tripura</option>
      <option>Uttar Pradesh</option>
      <option>Uttarakhand</option>
      <option>West Bengal</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect2">Please select your reason</label>
    <select multiple className="form-control" id="exampleFormControlSelect2">
      <option>Enquire company stats</option>
      <option>Check for property</option>
      <option>Upload your property</option>
      <option>Check our website</option>
      <option>Any bug in our website</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Type anything you want to say</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
  </div>

  <div style={{display:"flex", justifyContent:"space-around", width:"50%",marginLeft:"17.8vw", marginTop:"4%"}}>
  <div className="col-12">
    <button type="submit" className="btn btn-primary" style={{width:"75px"}}>Submit</button>
  </div>

  <div className="col-12" style={{marginRight:"25%"}}>
    <button type="reset" className="btn btn-primary" style={{width:"75px"}}>Reset</button>
  </div>
  </div>
</form>
</div>
</div>
    </Layout>
  );
}

export default dynamic (()=>Promise.resolve(ContactUs), {ssr:false})