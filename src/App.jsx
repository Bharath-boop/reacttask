import React from 'react'
import Card from './assets/components/Card'
function App() {
  let data=[{
    h5:"free",
    h6:"$0",
    li1:"Single User",
    li2:"5 GB Storage",
    li3:"Unlimited Public Projects",
    li4:"Community Access",
    li5:"Unlimited Private Projects",
    li6:"Dedicated phone Support",
    li7:"Free subdomain",
    li8:"Monthly Status Report"
  },
  {
    h5:"plus",
    h6:"$9",
    li1:"5 Users",
    li2:"50GB Storage",
    li3:"Unlimited Public Projects",
    li4:"Community Access",
    li5:"Unlimited Private Projects",
    li6:"Dedicated Phone Support",
    li7:"Free Subdomain",
    li8:"Monthly Status Reports"
  },
  {
    h5:"Pro",
    h6:"$49",
    li1:"Unlimited Users",
    li2:"150GB Storage",
    li3:"Unlimited Public Projects",
    li4:"Community Acces",
    li5:"Unlimited Private Projects",
    li6:"Dedicated Phone Support",
    li7:"Free Subdomain",
    li8:"Monthly Status Reports"
  }]
  return <>
 <section className="pricing py-5">
  <div className="container">
    <div className="row">
     {
     data.map((e,i)=>{
      return <Card cardData={e} key={i}/>
     })
     }
    </div>
  </div>
</section>
 </>
}

export default App