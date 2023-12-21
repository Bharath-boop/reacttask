import React from 'react'
import Card from './assets/components/Card'
function App() {
  let data=[{
    plan:"FREE",
    price:"$0",
    user:"Single User",
    isUser:true,
    storgae:"5 GB Storage",
    isStorage:true,
    project:"Unlimited Public Projects",
    isProject:true,
    access:"Community Access",
    isAccess:true,
    pProject:"Unlimited Private Projects",
    ispProject:false,
    support:"Dedicated phone Support",
    isSupport:false,
    domain:"Free subdomain",
    isDomain:false,
    report:"Monthly Status Report",
    isReport:false
  },
  {
    plan:"plus",
    price:"$9",
    user:"5 Users",
    isUser:true,
    storgae:"50GB Storage",
    isStorage:true,
    project:"Unlimited Public Projects",
    isProject:true,
    access:"Community Access",
    isAccess:true,
    pProject:"Unlimited Private Projects",
    ispProject:true,
    support:"Dedicated Phone Support",
    isSupport:true,
    domain:"Free Subdomain",
    isDomain:true,
    report:"Monthly Status Reports",
    isReport:false
  },
  {
    plan:"Pro",
    price:"$49",
    user:"Unlimited Users",
    isUser:true,
    storgae:"150GB Storage",
    isStorage:true,
    project:"Unlimited Public Projects",
    isProject:true,
    access:"Community Acces",
    isAccess:true,
    pProject:"Unlimited Private Projects",
    ispProject:true,
    support:"Dedicated Phone Support",
    isSupport:true,
    domain:"Free Subdomain",
    isDomain:true,
    report:"Monthly Status Reports",
    isReport:true
  }]
  return <>
 <section className="pricing py-5">
  <div className="container">
    <div className="row">
     {
     data.map((e,i)=>{
      return <Card data={e} key={i}/>
     })
     }
    </div>
  </div>
</section>
 </>
}

export default App