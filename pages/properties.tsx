import {value} from '../components/Home/SearchBar'
import Andhra_Pradesh from './properties_components/Andhra Pradesh/Andhra_Pradesh';
import Default from './properties_components/Default/Default'
import Arunachal_Pradesh from './properties_components/Arunachal Pradesh/Arunachal Pradesh'
import Assam from './properties_components/Assam/Assam'
import Bihar from './properties_components/Bihar/Bihar'
import Chhattisgarh from './properties_components/Chhattisgarh/Chhattisgarh'
import Goa from './properties_components/Goa/Goa'
import Gujarat from './properties_components/Gujarat/Gujarat'
import Haryana from './properties_components/Haryana/Haryana'
import Himachal_Pradesh from './properties_components/Himachal Pradesh/Himachal Pradesh'
import Jharkhand from './properties_components/Jharkhand/Jharkhand'
import Karnataka from './properties_components/Karnataka/Karnataka'
import Kerala from './properties_components/Kerala/Kerala'
import Madhya_Pradesh from './properties_components/Madhya Pradesh/Madhya Pradesh'
import Maharashtra from './properties_components/Maharashtra/Maharashtra'
import Manipur from './properties_components/Manipur/Manipur'
import Meghalaya from './properties_components/Meghalaya/Meghalaya'
import Mizoram from './properties_components/Mizoram/Mizoram'
import Nagaland from './properties_components/Nagaland/Nagaland'
import Odisha from './properties_components/Odisha/Odisha'
import Punjab from './properties_components/Punjab/Punjab'
import Rajasthan from './properties_components/Rajasthan/Rajasthan'
import Sikkim from './properties_components/Sikkim/Sikkim'
import Tamil_Nadu from './properties_components/Tamil Nadu/Tamil Nadu'
import Telangana from './properties_components/Telangana/Telangana'
import Tripura from './properties_components/Tripura/Tripura'
import Uttar_Pradesh from './properties_components/Uttar Pradesh/Uttar Pradesh'
import Uttarakhand from './properties_components/Uttarakhand/Uttarakhand'
import West_Bengal from './properties_components/West Bengal/West Bengal'

import dynamic from 'next/dynamic'


export function Properties() {

function DisplayProperties(value){
  value=value.toLowerCase()

  if(value==="") return <Default/>
  else if(value==="andhra pradesh") return <Andhra_Pradesh/>
  else if(value==="arunachal pradesh") return <Arunachal_Pradesh/>
  else if(value==="assam") return <Assam/>
  else if(value==="bihar") return <Bihar/>
  else if(value==="chhattisgarh") return <Chhattisgarh/>
  else if(value==="goa") return <Goa/>
  else if(value==="gujarat") return <Gujarat/>
  else if(value==="haryana") return <Haryana/>
  else if(value==="himachal pradesh") return <Himachal_Pradesh/>
  else if(value==="jharkhand") return <Jharkhand/>
  else if(value==="karnataka") return <Karnataka/>
  else if(value==="kerala") return <Kerala/>
  else if(value==="madhya pradesh") return <Madhya_Pradesh/>
  else if(value==="maharashtra") return <Maharashtra/>
  else if(value==="manipur") return <Manipur/>
  else if(value==="meghalaya") return <Meghalaya/>
  else if(value==="mizoram") return <Mizoram/>
  else if(value==="nagaland") return <Nagaland/>
  else if(value==="odisha") return <Odisha/>
  else if(value==="punjab") return <Punjab/>
  else if(value==="rajasthan") return <Rajasthan/>
  else if(value==="sikkim") return <Sikkim/>
  else if(value==="tamil nadu") return <Tamil_Nadu/>
  else if(value==="telangana") return <Telangana/>
  else if(value==="tripura") return <Tripura/>
  else if(value==="uttar pradesh") return <Uttar_Pradesh/>
  else if(value==="uttarakhand") return <Uttarakhand/>
  else if(value==="west bengal") return <West_Bengal/>
  else return <Default/>
  }

  return (
     DisplayProperties(value)
  );
}

export default dynamic (()=>Promise.resolve(Properties), {ssr:false})