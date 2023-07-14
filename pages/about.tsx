import Layout from "@/components/Layout/Layout";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import {useEffect,useState} from "react"
import image from "./image/image1.jpeg"
import image3 from "./image/image3.jpeg"
import image4 from "./image/image4.jpg"
import image5 from "./image/image5.jpg"
import image6 from "./image/image6.jpg"
import image7 from "./image/image7.jpg"
import image8 from "./image/image8.jpg"
import image9 from "./image/image9.jpeg"
import image10 from "./image/image10.jpg"
import image11 from "./image/image11.jpg"
import image12 from "./image/image12.jpg"
import image13 from "./image/image13.jpg"
import image14 from "./image/image14.png"
import image15 from "./image/image15.jpg"
import image16 from "./image/image16.jpg"
import image17 from "./image/image17.jpg"
import image18 from "./image/image18.jpg"
import image19 from "./image/image19.jpg"
import image20 from "./image/image20.jpg"
import image21 from "./image/image21.jpg"
import image22 from "./image/image22.jpg"
import image23 from "./image/image23.jpg"
import image24 from "./image/image24.jpg"
import image25 from "./image/image25.png"
import image26 from "./image/image26.jpeg"
import image27 from "./image/image27.png"
import image28 from "./image/image28.jpeg"
import image29 from "./image/image29.jpeg"
import image30 from "./image/image30.jpg"
import image31 from "./image/image31.jpeg"
import image32 from "./image/image32.jpg"
import image33 from "./image/image33.jpg"
import image34 from "./image/image34.jpg"
import image35 from "./image/image35.jpg"


import { styled } from "@mui/material/styles";
import dynamic from 'next/dynamic'

export function About() {

   const check=() =>{
    if(typeof window==='undefined') return true;
    return false;
  }

  const StyledHeading = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
  }));

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  const [heading1,setheading1]=useState("Discover the Art of Real Estate")
  const [heading2,setheading2]=useState("Transforming Spaces, Inspiring Lives")
  const [heading3,setheading3]=useState("Find Your Perfect Place to Call Home")
  const [heading4,setheading4]=useState("Making Property Dreams a Reality")

  const [picture1, setPicture1]=useState(image4);
  const [picture2, setPicture2]=useState(image5);
  const [picture3, setPicture3]=useState(image6);
  const [picture4,setPicture4]=useState(image7);


  const [content1,setContent1]=useState("Welcome to Property Forager, your ultimate destination for finding your dream property. We understand that searching for the perfect property can be a time-consuming and overwhelming process. That's why we have created an innovative platform that combines advanced technology with personalized service to simplify your property search and help you find the ideal home or investment opportunity.At Property Forager, we believe that finding the perfect property should be an exciting and rewarding experience.")

  const [content2,setContent2]=useState("At Property Forager, we believe that finding the perfect property should be an exciting and rewarding experience. That's why we've built a user-friendly website that empowers you to explore, discover, and connect with the world of real estate. Our mission is to simplify the property search process, provide you with valuable insights, and help you make informed decisions.With an extensive and diverse range of listings, Property Forager offers a comprehensive selection of properties that cater to various preferences and budgets.")

  const [content3,setContent3]=useState("Beyond our extensive listings, Property Forager is committed to creating a vibrant community of real estate enthusiasts, professionals, and industry experts. We foster an environment where knowledge sharing, networking, and collaboration thrive. Our forums and interactive features allow you to engage in discussions, seek advice, and connect with like-minded individuals who share your passion for real estate.We understand that navigating the real estate market can be complex, which is why we provide plenty of resources to support you in your journey.")

  const [content4,setContent4]=useState("Join the Property Forager community today and unlock a world of real estate opportunities. Whether you're searching for your dream home or seeking to make lucrative investments, we are here to guide you on your path to success. Trust Property Forager as your reliable partner in your real estate journey and let us help you forge a prosperous future in the world of property. Our dedicated support team is readily available to address any questions or concerns you may have, providing prompt assistance whenever you need it.")

  function change1(){
      setheading1("How do we Organize")
      setheading2("Check our Managers")
      setheading3("Check our Staff")
      setheading4("Our property Management")

      setPicture1(image8)
      setPicture2(image9)
      setPicture3(image10)
      setPicture4(image11)

      setContent1("Property Forager is a comprehensive website that offers a range of useful features to help individuals and businesses efficiently manage their properties. One of the key aspects of the website is its ability to organize property checklists. Whether you're a landlord or a property manager, keeping track of various tasks and inspections can be challenging. Property Forager simplifies this process by providing customizable checklists that allow you to create, manage, and monitor property-related tasks.")

      setContent2("In addition to organizing property checklists, Property Forager also offers features to streamline the management of your team. With dedicated sections for managers and staff, the website provides a centralized platform for communication and collaboration. Managers can assign tasks, set deadlines, and track progress, all within the intuitive interface of Property Forager. This enables efficient delegation of responsibilities, ensuring that everyone in your team is aware of their duties and can contribute to the smooth running of operations.")

      setContent3("Property Forager recognizes the importance of efficient staff management, and therefore provides a range of tools to support this aspect of property management. The website allows you to create and maintain a comprehensive database of staff members, including their contact information, roles, and qualifications. This makes it easy to assign appropriate tasks to the right individuals, ensuring that you have the right staff members for specific jobs. Property Forager also offers features for scheduling and tracking staff availability")

      setContent4("When it comes to property management, Property Forager offers a robust and user-friendly system. The website provides a centralized platform to store and organize property information, including lease agreements, rental payment records, and maintenance history. This enables you to access vital property data at any time, ensuring that you have a complete overview of your properties and can make informed decisions. Property Forager also allows you to generate reports and analytics, providing valuable insights.")
  }

  function change2(){
    setheading1("Welcome to the Foundation Page")
    setheading2("Starting of the beginning")
    setheading3("The Struggle for Surviving")
    setheading4("Achieving Success")

    setPicture1(image12)
    setPicture2(image13)
    setPicture3(image14)
    setPicture4(image15)

    setContent1("Welcome to the Foundation Page of Property Forager! This page marks the starting point of our journey, where we laid the groundwork for a platform dedicated to revolutionizing property management. Like any endeavor, our beginnings were filled with challenges and struggles, but our determination to create something exceptional kept us moving forward.In the early stages of development, we faced skepticism and doubts from those who questioned the need for yet another property management platform.")

    setContent2("The struggle for surviving in the competitive world of property management was real. We understood the pain points faced by property owners, landlords, and managers, who often found themselves overwhelmed by the complexities of managing multiple properties efficiently. Recognizing the need for a comprehensive solution, we embarked on a mission to develop a platform that would simplify property management and empower individuals and businesses in this industry.However, we saw an opportunity to make a significant impact.")

    setContent3("Through countless hours of research, development, and collaboration with industry experts, we refined our vision and forged ahead. Our team encountered numerous obstacles along the way, but we persevered, knowing that the rewards of achieving success would far outweigh the challenges we faced.With unwavering determination, we pushed the boundaries of innovation, constantly seeking new ways to enhance the property management experience. We listened to the feedback and insights of property owners and managers.")

    setContent4("And now, we can proudly say that we have achieved success. Property Forager has become a trusted name in the realm of property management, offering a wide array of features and tools that streamline operations, enhance productivity, and drive success. Our commitment to excellence and continuous improvement has allowed us to evolve into a platform that meets the diverse needs of property owners and managers, catering to both residential and commercial properties. we embraced the challenges as opportunities for growth and improvement.")
  }

  function change3(){
    setheading1("How our company works")
    setheading2("Take a simple tour")
    setheading3("Make your property online")
    setheading4("Buy or Sell")

    setPicture1(image16)
    setPicture2(image17)
    setPicture3(image18)
    setPicture4(image19)

    setContent1("Welcome to the Working Page of Property Forager! Here, we provide a comprehensive overview of how our company operates and the range of services we offer to empower property owners, buyers, and sellers At Property Forager, we have revolutionized the way properties are managed and transacted. Our platform offers a seamless and efficient experience for individuals and businesses involved in the real estate industry.Join us on the Working Page of Property Forager, where we empower property owners.")

    setContent2("To get started, we invite you to take a simple tour of our platform. Our guided tour will walk you through the various features and functionalities, giving you a firsthand glimpse of how Property Forager can simplify your property management or transaction processes.For property owners, we provide a convenient and hassle-free way to make your property available online. Through our platform, you can easily create property listings, showcasing the unique features and attributes of your property to potential buyers or tenants")

    setContent3("For property owners, we provide a convenient and hassle-free way to make your property available online. Through our platform, you can easily create property listings, showcasing the unique features and attributes of your property to potential buyers or tenants. Our intuitive tools enable you to upload photos, add detailed descriptions, and set desired pricing, ensuring that your property stands out in the market.Take control of your real estate journey and unlock the full potential of your properties with Property Forager.")

    setContent4("If you are looking to buy or sell a property, Property Forager is your trusted partner. Our platform facilitates seamless transactions by connecting buyers and sellers in a transparent and efficient manner. You can explore a wide range of available properties, filter search results based on your preferences, and communicate directly with property owners or agents. Our goal is to make the buying or selling process as smooth as possible, providing you with the necessary tools and resources to make informed decisions.")
  }

  function change4(){
    setheading1("Check our different branches")
    setheading2("Welcome to our Indian Branch")
    setheading3("Welcome to our American Branch")
    setheading4("Welcome to our Europe Branch")

    setPicture1(image20)
    setPicture2(image21)
    setPicture3(image22)
    setPicture4(image23)

    setContent1("Welcome to the Branch Page of Property Forager! We are delighted to welcome you to our Indian, American, and European branches, where we provide tailored solutions to meet the specific requirements of each region's real estate market.At each branch of Property Forager, we prioritize understanding the local market dynamics and regulations to provide a tailored experience for our customers. We have localized our platform and services to ensure that you have access")

    setContent2("At our Indian branch, we understand the diverse and dynamic nature of the Indian real estate industry. With our deep knowledge of the local market trends, regulations, and cultural nuances, we are well-equipped to assist property owners, buyers, and sellers in India. Whether you are looking to rent out your property, find your dream home, or invest in real estate, our Indian branch offers a range of services to meet your needs.ensuring a seamless experience for our customers across the United States.")

    setContent3("Welcome to our American branch, where we cater to the vibrant and vast real estate market in the United States. With our extensive network of properties, agents, and resources, we provide comprehensive solutions for property management, buying, and selling. Our American branch combines cutting-edge technology with an in-depth understanding of the local market dynamics, ensuring a seamless experience for our customers across the United States.")

    setContent4("We also extend a warm welcome to our European branch, where we navigate the diverse landscapes of the European real estate market. From bustling cities to serene countryside, our European branch caters to the unique requirements of each country and region. With our extensive database of properties and our expertise in European real estate trends, we offer a platform where property owners, buyers, and sellers can connect and transact with confidence. to region-specific property listings, resources, and support.")
  }

  function change5(){
    setheading1("Our Partners")
    setheading2("Climb Real Estate")
    setheading3("Courtland Partners")
    setheading4("Equity Point Real Estate")

    setPicture1(image24)
    setPicture2(image25)
    setPicture3(image26)
    setPicture4(image27)

    setContent1("Welcome to the Partners Page of Property Forager! We are proud to collaborate with esteemed partners who share our vision of transforming the property management industry. Together, we strive to provide innovative solutions and exceptional services to our valued customers.On the Partners Page of Property Forager, you will discover more about our esteemed partners and the synergies we create. Together, we are committed to pushing boundaries, embracing technological advancements, and providing a platform")

    setContent2("One of our esteemed partners is Climb Real Estate, a renowned real estate brokerage firm known for its expertise in the market. Their deep understanding of the industry and commitment to client satisfaction align perfectly with our mission at Property Forager. By joining forces, we combine our strengths to deliver comprehensive solutions that meet the diverse needs of property owners, buyers, and sellers.")

    setContent3("Another esteemed partner is Courtland Partners, a leading investment advisory and management firm specializing in real estate. Their extensive knowledge and experience in the field of real estate investment complement our platform's capabilities, providing valuable insights and guidance to our users. Together, we empower investors to make informed decisions and maximize their returns in the ever-changing real estate market.Courland Partners have been very good partners to us.")

    setContent4("Equity Point Real Estate is another valued partner we are honored to work with. As a prominent property management company, Equity Point Real Estate brings a wealth of expertise in managing residential and commercial properties. Their commitment to excellence and dedication to customer satisfaction aligns perfectly with our values at Property Forager. Through our collaboration, we offer property owners a seamless and efficient platform to manage their properties effectively.")
  }

  function change6(){
    setheading1("Our Future Planning")
    setheading2("Expanding the Business")
    setheading3("Introducing Artifical Intelligence")
    setheading4("Collaborating with Premiere Property Group")

    setPicture1(image28)
    setPicture2(image29)
    setPicture3(image30)
    setPicture4(image31)

    setContent1("Welcome to the Future Planning Page of Property Forager! Here, we share our exciting visions and strategies for the future as we continue to evolve and innovate in the property management industry.Our future planning also encompasses continuous research and development, staying at the forefront of technological advancements, and adapting to evolving customer needs. We are committed to refining our platform, introducing new features, and improving user experiences based on feedback and market trends.")

    setContent2("Expanding our business is a key aspect of our future planning. We aim to broaden our reach and establish a strong presence in new markets, both domestically and internationally. By expanding into untapped regions, we can connect property owners, buyers, and sellers from diverse backgrounds, creating a truly global network of real estate transactions and management.where we share our aspirations and chart a path towards a more seamless, intelligent, and rewarding property management experience.")

    setContent3("Introducing Artificial Intelligence (AI) is another pivotal element of our future plans. We recognize the immense potential of AI in streamlining processes, improving efficiency, and enhancing user experiences. Through AI-powered features and algorithms, we will further automate routine tasks, offer intelligent property recommendations, and provide valuable insights to our users, empowering them to make data-driven decisions.")

    setContent4("Collaborating with Premiere Property Group is a significant part of our future strategy. We believe in the power of partnerships to foster growth and innovation. By joining forces with Premiere Property Group, a renowned real estate agency with a stellar reputation, we aim to leverage their expertise, industry insights, and market reach to further enhance our platform's offerings and deliver even greater value to our customers.")
  }

  function change7(){
    setheading1("Others")
    setheading2("Trust with employees")
    setheading3("Invest in our stocks")
    setheading4("How we deal with customers")

    setPicture1(image32)
    setPicture2(image33)
    setPicture3(image34)
    setPicture4(image35)

    setContent1("Welcome to the Others Page of Property Forager, where we shed light on additional aspects that make us unique and contribute to our success in the property management industry.On Property Forager, we emphasize the values that underpin our success: trust with employees, investment opportunities, and customer-centricity. These aspects reflect our commitment to creating a positive work culture, offering growth opportunities, and providing outstanding service to our customers.")

    setContent2("Trust with our employees is a cornerstone of our company culture. We believe in fostering an environment of transparency, open communication, and mutual respect. By nurturing trust, we empower our employees to bring their best selves to work, fostering collaboration, innovation, and a shared commitment to delivering exceptional service to our customers. We value the diverse perspectives and expertise that our team members bring, and we strive to create a supportive and inclusive workplace where everyone can thrive.")

    setContent3("Investing in our stocks is a testament to our belief in the future of Property Forager. As we grow and expand, we offer opportunities for investors to become part of our journey. By investing in our stocks, individuals can share in our success and contribute to the realization of our vision. We are dedicated to maintaining transparency and providing accurate information to our investors, ensuring that they are well-informed about the progress, achievements, and prospects of Property Forager.")

    setContent4("How we deal with our customers is of utmost importance to us. We prioritize providing exceptional customer service and building long-lasting relationships with our clients. We understand that each customer is unique, with specific needs and goals. Therefore, we take a personalized approach, listening attentively to their requirements and tailoring our solutions to meet their expectations. Our dedicated customer support team is readily available to address inquiries, provide guidance, and resolve any concerns promptly and efficiently.")
  }


  const display = () =>{
    if(check()) return false;

    if(screenSize.dynamicWidth >= 566){
      return (
        <Box sx={{marginLeft:"0.5vw", width:"99vw",marginBottom:"5px", display:"flex", flexDirection:"row", flexWrap:"wrap",alignItems:"center",justifyConent:"flex-start"}}>
        <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:"rgb(137,118,205)", width:"20%",height:"7vh"}}>About us</Typography>
        <Button onClick={change1} sx={{flexGrow:"2",width:"20%",height:"7vh"}}>Origination</Button>
        <Button onClick={change2} sx={{flexGrow:"2",width:"20%",height:"7vh"}}>Foundation </Button>
        <Button onClick={change3} sx={{flexGrow:"2",width:"20%",height:"7vh"}}>Working </Button>
        <Button onClick={change4} sx={{flexGrow:"2",width:"20%",height:"7vh"}}>Branches </Button>
        <Button onClick={change5} sx={{flexGrow:"2",width:"20%",height:"7vh"}}>Partners </Button>
        <Button onClick={change6} sx={{flexGrow:"3",width:"20%",height:"7vh"}}>Future Planning </Button>
        <Button onClick={change7} sx={{flexGrow:"3",width:"20%",height:"7vh"}}>Others </Button>
        </Box>
      );
    }
    else if(screenSize.dynamicWidth >=480){
      return (
        <Box sx={{marginLeft:"2vw", width:"95vw",marginBottom:"5px", display:"flex", flexDirection:"row", flexWrap:"wrap",alignItems:"center",justifyConent:"flex-start"}}>
        <Typography sx={{display:"flex",fontSize:"75%",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:"rgb(137,118,205)", width:"20%",height:"7vh"}}>About us</Typography>
        <Button onClick={change1} sx={{fontSize:"75%",flexGrow:"2",width:"20%",height:"7vh"}}>Origination</Button>
        <Button onClick={change2} sx={{fontSize:"75%",flexGrow:"2",width:"20%",height:"7vh"}}>Foundation </Button>
        <Button onClick={change3} sx={{fontSize:"75%",flexGrow:"2",width:"20%",height:"7vh"}}>Working </Button>
        <Button onClick={change4} sx={{fontSize:"75%",flexGrow:"2",width:"20%",height:"7vh"}}>Branches </Button>
        <Button onClick={change5} sx={{fontSize:"75%",flexGrow:"2",width:"20%",height:"7vh"}}>Partners </Button>
        <Button onClick={change6} sx={{fontSize:"75%",flexGrow:"3",width:"20%",height:"7vh"}}>Future Planning </Button>
        <Button onClick={change7} sx={{fontSize:"75%",flexGrow:"3",width:"20%",height:"7vh"}}>Others </Button>
        </Box>
      );
    }
    else{
      return(
        <Box sx={{marginLeft:"2vw", width:"95vw",marginBottom:"5px", display:"flex", flexDirection:"row", flexWrap:"wrap",alignItems:"center",justifyConent:"flex-start"}}>
        <Typography sx={{display:"flex",fontSize:"60%",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:"rgb(137,118,205)", width:"20%",height:"7vh"}}>About us</Typography>
        <Button onClick={change1} sx={{fontSize:"60%",flexGrow:"2",width:"20%",height:"7vh"}}>Origination</Button>
        <Button onClick={change2} sx={{fontSize:"60%",flexGrow:"2",width:"20%",height:"7vh"}}>Foundation </Button>
        <Button onClick={change3} sx={{fontSize:"60%",flexGrow:"2",width:"20%",height:"7vh"}}>Working </Button>
        <Button onClick={change4} sx={{fontSize:"60%",flexGrow:"2",width:"20%",height:"7vh"}}>Branches </Button>
        <Button onClick={change5} sx={{fontSize:"60%",flexGrow:"2",width:"20%",height:"7vh"}}>Partners </Button>
        <Button onClick={change6} sx={{fontSize:"60%",flexGrow:"3",width:"20%",height:"7vh"}}>Future Planning </Button>
        <Button onClick={change7} sx={{fontSize:"60%",flexGrow:"3",width:"20%",height:"7vh"}}>Others </Button>
        </Box>
      );
    }
  }

  function func2(){
    if(check()) return false;

    if(screenSize.dynamicWidth < 1000){
      return (
        <Typography sx={{backgroundSize:"100% 100%",width:"100vw", height:"460vh",border:"", marginLeft:"",marginTop:"2vw", textAlign:"center"}}>

        <StyledHeading variant="h5" sx={{marginTop:"5%",marginBottom:"5%", fontFamily:"Lilita One, cursive"}}>{heading1}</StyledHeading>

      <Typography className="overflow-auto" sx={{backgroundImage:`url(${image.src})`,backgroundSize:"100% 100%",width:"100vw",height:"50vh", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"},fontFamily:"Dancing Script, cursive",fontSize:"28px",color:"white"}}>
      <p>{content1}</p>
      </Typography>

      <Typography sx={{backgroundImage:`url(${picture1.src})`,backgroundSize:"100% 100%",width:"100w",height:"50vh", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
      </Typography>

      <StyledHeading variant="h5" sx={{marginTop:"4vh",marginBottom:"5%", fontFamily:"Lilita One, cursive"}}>{heading2}</StyledHeading>

      <Typography className="overflow-auto" sx={{backgroundImage:`url(${image.src})`,backgroundSize:"100% 100%",width:"100vw",height:"50vh", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"},fontFamily:"Dancing Script, cursive",fontSize:"28px",color:"white"}}>
      <p>{content2}</p>
      </Typography>

      <Typography sx={{backgroundImage:`url(${picture2.src})`,backgroundSize:"100% 100%",width:"100w",height:"50vh", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
      </Typography>

      <StyledHeading variant="h5" sx={{marginTop:"4vh",marginBottom:"5%", fontFamily:"Lilita One, cursive"}}>{heading3}</StyledHeading>

      <Typography className="overflow-auto" sx={{backgroundImage:`url(${image.src})`,backgroundSize:"100% 100%",width:"100vw",height:"50vh", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"},fontFamily:"Dancing Script, cursive",fontSize:"28px",color:"white"}}>
      <p>{content3}</p>
      </Typography>

      <Typography sx={{backgroundImage:`url(${picture3.src})`,backgroundSize:"100% 100%",width:"100w",height:"50vh", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
      </Typography>

      <StyledHeading variant="h5" sx={{marginTop:"4vh",marginBottom:"5%", fontFamily:"Lilita One, cursive"}}>{heading4}</StyledHeading>

      <Typography className="overflow-auto" sx={{backgroundImage:`url(${image.src})`,backgroundSize:"100% 100%",width:"100vw",height:"50vh", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"},fontFamily:"Dancing Script, cursive",fontSize:"28px",color:"white"}}>
      <p>{content4}</p>
      </Typography>

      <Typography sx={{backgroundImage:`url(${picture4.src})`,backgroundSize:"100% 100%",width:"100w",height:"50vh", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
      </Typography>
      </Typography>
      );
    }
    else{
      return (
        <Typography sx={{backgroundSize:"100% 100%",width:"100vw", height:"260vh",border:"", marginLeft:"",marginTop:"2vw", textAlign:"center"}}>

        <StyledHeading variant="h3" sx={{marginTop:"5%",marginBottom:"5vh", fontFamily:"Lilita One, cursive"}}>{heading1}</StyledHeading>

        <Typography className="overflow-auto" sx={{backgroundImage:`url(${image.src})`,backgroundSize:"100% 100%",fontFamily:"Dancing Script, cursive",fontSize:"30px",color:"white",fontWeight:"10",display:"inline-block",width:"71.5vw",height:"44vh",marginLeft:"1vw",float:"left", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
        <p>{content1}</p>
        </Typography>

        <Typography sx={{backgroundImage:`url(${picture1.src})`,backgroundSize:"100% 100%",display:"inline-block",width:"25vw",height:"44vh",marginRight:"1.3vw",float:"right", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
        </Typography>

        <StyledHeading variant="h3" sx={{marginTop:"54.5vh",marginBottom:"5vh",fontFamily:"Lilita One, cursive"}}>{heading2}</StyledHeading>

        <Typography className="overflow-auto" sx={{backgroundImage:`url(${image3.src})`,fontFamily:"Dancing Script, cursive",fontSize:"30px",backgroundSize:"100% 100%",display:"inline-block",width:"71.5vw", height:"44vh",float:"right",marginTop:"1vw",marginRight:"1.3vw", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}, color:"white"}}>
        <p>{content2}</p>
        </Typography>

        <Typography sx={{backgroundImage:`url(${picture2.src})`,backgroundSize:"100% 100%",display:"inline-block",width:"25vw", height:"44vh",float:"left",marginTop:"1vw",marginLeft:"1vw", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
        </Typography>

        <StyledHeading variant="h3" sx={{marginTop:"58vh",marginBottom:"5vh",fontFamily:"Lilita One, cursive"}}>{heading3}</StyledHeading>

        <Typography className="overflow-auto"sx={{backgroundImage:`url(${image.src})`,fontFamily:"Dancing Script, cursive",fontSize:"30px",backgroundSize:"100% 100%",display:"inline-block",width:"71.5vw",height:"44vh",marginLeft:"1vw",marginTop:"1vw",float:"left", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"},color:"white"}}>
        <p>{content3}</p>
        </Typography>

        <Typography sx={{backgroundImage:`url(${picture3.src})`,fontFamily:"Dancing Script, cursive",fontSize:"30px",backgroundSize:"100% 100%",display:"inline-block",width:"25vw",height:"44vh",marginRight:"1.3vw",marginTop:"1vw",float:"right", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
        </Typography>

        <StyledHeading variant="h3" sx={{marginTop:"58vh",marginBottom:"5vh",fontFamily:"Lilita One, cursive"}}>{heading4}</StyledHeading>

        <Typography className="overflow-auto" sx={{backgroundImage:`url(${image3.src})`,fontFamily:"Dancing Script, cursive",fontSize:"30px",backgroundSize:"100% 100%",display:"inline-block",width:"71.5vw", height:"44vh",float:"right",marginTop:"1vw",marginRight:"1.3vw", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"},color:"white"}}>
        <p>{content4}</p>
        </Typography>

        <Typography sx={{backgroundImage:`url(${picture4.src})`,fontFamily:"Dancing Script, cursive",fontSize:"30px",backgroundSize:"100% 100%",display:"inline-block",width:"25vw", height:"44vh",float:"left",marginTop:"1vw",marginLeft:"1vw", transition:"all 0.3s", ":hover":{transform:"scale(1.05)"}}}>
        </Typography>

        </Typography>
      );
    }
  }

  return (
    <Layout pageTitle="About">
     <Box sx={{}}>
      {display()}
      {func2()}
     </Box>

    </Layout>
  );
}

export default dynamic (()=>Promise.resolve(About), {ssr:false})
