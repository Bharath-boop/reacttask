import React from 'react'

function Card({data}) {
    return  <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">{data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={data.isUser?"":"text-muted"}><span className="fa-li"><i className={data.isUser?"fas fa-check":"fas fa-times"}></i></span>{data.plan!=="FREE"?<strong>{data.user}</strong>:data.user}</li>
              <li className={data.isStorage?"":"text-muted"}><span className="fa-li"><i className={data.isStorage?"fas fa-check":"fas fa-times"}></i></span>{data.storgae}</li>
              <li className={data.isProject?"":"text-muted"}><span className="fa-li"><i className={data.isProject?"fas fa-check":"fas fa-times"}></i></span>{data.project}</li>
              <li className={data.isAccess?"":"text-muted"}><span className="fa-li"><i className={data.isAccess?"fas fa-check":"fas fa-times"}></i></span>{data.access}</li>
              <li className={data.ispProject?"":"text-muted"}><span className="fa-li"><i className={data.ispProject?"fas fa-check":"fas fa-times"}></i></span>{data.pProject}</li>
              <li className={data.isSupport?"":"text-muted"}><span className="fa-li"><i className={data.isSupport?"fas fa-check":"fas fa-times"}></i></span>{data.support}</li>
              <li className={data.isDomain?"":"text-muted"}><span className="fa-li"><i className={data.isDomain?"fas fa-check":"fas fa-times"}></i></span>{data.plan==="Pro"?<><strong>Unlimited </strong>{data.domain}</>:data.domain}</li>
              <li className={data.isReport?"":"text-muted"}><span className="fa-li"><i className={data.isReport?"fas fa-check":"fas fa-times"}></i></span>{data.report}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div> 
}

export default Card