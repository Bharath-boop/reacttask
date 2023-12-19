import React from 'react'

function Card(props) {
  if(props.cardData.h5=="free"){
    return  <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.cardData.h5}</h5>
            <h6 className="card-price text-center">{props.cardData.h6}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.li1}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.li2}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.li3}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.li4}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.li5}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.li6}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.li7}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.li8}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  }
  else if(props.cardData.h5=="plus"){
    return  <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.cardData.h5}</h5>
            <h6 className="card-price text-center">{props.cardData.h6}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>{props.cardData.li1}</strong> </li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.li2}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.li3}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.li4}</li>
              <li ><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.li5}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.li6}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.li7}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.li8}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  }
  else{
    return  <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{props.cardData.h5}</h5>
        <h6 className="card-price text-center">{props.cardData.h6}<span className="period">/month</span></h6>
        <hr/>
        <ul className="fa-ul">
          <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>{props.cardData.li1}</strong></li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.li2}</li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.li3}</li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.li4}</li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.li5}</li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.li6}</li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited </strong>{props.cardData.li7}</li>
          <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.li8}</li>
        </ul>
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>
  }
    
  
}

export default Card