import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const ViewProperty = () => {
 const [property, setProperty] = useState([])

    const getAllProperty=async()=>{

        const res= await axios.get("/property/getproperty/" +localStorage.getItem("id"));
        console.log(res.data.data);
        setProperty(res.data.data);
    }

    useEffect(()=>{
        getAllProperty()
    },[])
  return (
    <div>
      <div className="content-wrapper" style={{ minHeight: 422 }}>
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        
        <h1>Property Show</h1>
      </div>
    </div>
    {/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    {/* Default box */}
    <div className="card card-solid">
      <div className="card-body pb-0">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
            <div className="card bg-light d-flex flex-fill">
              <div className="card-header text-muted border-bottom-0">
                {
                        property.map?.((prop)=>{
                                <li>{prop.property_name}</li>
                        })
                }
              </div>
              <div className="card-body pt-0">
                <div className="row">
                  <div className="col-7">
                    <h2 className="lead">
                      <b>Nicole Pearson</b>
                    </h2>
                    <p className="text-muted text-sm">
                      <b>Description: </b> 
                      {
                        property.map((prop)=>{
                            {prop.description}
                        })
                      }
                    </p>
                    <ul className="ml-4 mb-0 fa-ul text-muted">
                      <li className="small">
                        <span className="fa-li">
                          <i className="fas fa-lg fa-building" />
                        </span>{" "}
                        {/* Address: Demo Street 123, Demo City 04312, NJ */}
                        {
                            property.map((prop)=>{
                                {prop.address}
                            })
                        }
                      </li>
                      <li className="small">
                        <span className="fa-li">
                          <i className="fas fa-lg fa-phone" />
                        </span>{" "}
                       {
                        property.map((prop)=>{
                            {prop.basePrice}
                        })
                       }
                      </li>
                    </ul>
                  </div>
                  <div className="col-5 text-center">
                    <img
                      src="/img/user1-128x128.jpg"
                      alt="user-avatar"
                      className="img-circle img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="text-right">
                  <a href="#" className="btn btn-sm bg-teal">
                    <i className="fas fa-comments" />
                  </a>
                  {/* <a href="#" className="btn btn-sm btn-primary"> */}
                  <Link to='updateproperty'></Link>
                    
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
            <div className="card bg-light d-flex flex-fill">
              <div className="card-header text-muted border-bottom-0">
                Digital Strategist
              </div>
              <div className="card-body pt-0">
                <div className="row">
                  <div className="col-7">
                    <h2 className="lead">
                      <b>Nicole Pearson</b>
                    </h2>
                    <p className="text-muted text-sm">
                      <b>About: </b> Web Designer / UX / Graphic Artist / Coffee
                      Lover{" "}
                    </p>
                    <ul className="ml-4 mb-0 fa-ul text-muted">
                      <li className="small">
                        <span className="fa-li">
                          <i className="fas fa-lg fa-building" />
                        </span>{" "}
                        Address: Demo Street 123, Demo City 04312, NJ
                      </li>
                      <li className="small">
                        <span className="fa-li">
                          <i className="fas fa-lg fa-phone" />
                        </span>{" "}
                        Phone #: + 800 - 12 12 23 52
                      </li>
                    </ul>
                  </div>
                  <div className="col-5 text-center">
                    <img
                      src="../../dist/img/user2-160x160.jpg"
                      alt="user-avatar"
                      className="img-circle img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="text-right">
                  <a href="#" className="btn btn-sm bg-teal">
                    <i className="fas fa-comments" />
                  </a>
                  <a href="#" className="btn btn-sm btn-primary">
                    <i className="fas fa-user" /> View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>     */}
          {/* <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
            <div className="card bg-light d-flex flex-fill">
              <div className="card-header text-muted border-bottom-0">
                Digital Strategist
              </div>
              <div className="card-body pt-0">
                <div className="row">
                  <div className="col-7">
                    <h2 className="lead">
                      <b>Nicole Pearson</b>
                    </h2>
                    <p className="text-muted text-sm">
                      <b>About: </b> Web Designer / UX / Graphic Artist / Coffee
                      Lover{" "}
                    </p>
                    <ul className="ml-4 mb-0 fa-ul text-muted">
                      <li className="small">
                        <span className="fa-li">
                          <i className="fas fa-lg fa-building" />
                        </span>{" "}
                        Address: Demo Street 123, Demo City 04312, NJ
                      </li>
                      <li className="small">
                        <span className="fa-li">
                          <i className="fas fa-lg fa-phone" />
                        </span>{" "}
                        Phone #: + 800 - 12 12 23 52
                      </li>
                    </ul>
                  </div>
                  <div className="col-5 text-center">
                    <img
                      src="../../dist/img/user1-128x128.jpg"
                      alt="user-avatar"
                      className="img-circle img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="text-right">
                  <a href="#" className="btn btn-sm bg-teal">
                    <i className="fas fa-comments" />
                  </a>
                  <a href="#" className="btn btn-sm btn-primary">
                    <i className="fas fa-user" /> View Profile
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
            <div className="card bg-light d-flex flex-fill">
              <div className="card-header text-muted border-bottom-0">
                Digital Strategist
              </div>
              <div className="card-body pt-0">
                <div className="row">
                  <div className="col-7">
                    <h2 className="lead">
                      <b>Nicole Pearson</b>
                    </h2>
                    <p className="text-muted text-sm">
                      <b>About: </b> Web Designer / UX / Graphic Artist / Coffee
                      Lover{" "}
                    </p>
                    <ul className="ml-4 mb-0 fa-ul text-muted">
                      <li className="small">
                        <span className="fa-li">
                          <i className="fas fa-lg fa-building" />
                        </span>{" "}
                        Address: Demo Street 123, Demo City 04312, NJ
                      </li>
                      <li className="small">
                        <span className="fa-li">
                          <i className="fas fa-lg fa-phone" />
                        </span>{" "}
                        Phone #: + 800 - 12 12 23 52
                      </li>
                    </ul>
                  </div>
                  <div className="col-5 text-center">
                    <img
                      src="../../dist/img/user2-160x160.jpg"
                      alt="user-avatar"
                      className="img-circle img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="text-right">
                  <a href="#" className="btn btn-sm bg-teal">
                    <i className="fas fa-comments" />
                  </a>
                  <a href="#" className="btn btn-sm btn-primary">
                    <i className="fas fa-user" /> View Profile
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
            <div className="card bg-light d-flex flex-fill">
              <div className="card-header text-muted border-bottom-0">
                Digital Strategist
              </div>
              <div className="card-body pt-0">
                <div className="row">
                  <div className="col-7">
                    <h2 className="lead">
                      <b>Nicole Pearson</b>
                    </h2>
                    <p className="text-muted text-sm">
                      <b>About: </b> Web Designer / UX / Graphic Artist / Coffee
                      Lover{" "}
                    </p>
                    <ul className="ml-4 mb-0 fa-ul text-muted">
                      <li className="small">
                        <span className="fa-li">
                          <i className="fas fa-lg fa-phone" />
                        </span>{" "}
                        Phone #: + 800 - 12 12 23 52
                      </li>
                    </ul>
                  </div>
                  <div className="col-5 text-center">
                    <img
                      src="../../dist/img/user1-128x128.jpg"
                      alt="user-avatar"
                      className="img-circle img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="text-right">
                  <a href="#" className="btn btn-sm bg-teal">
                    <i className="fas fa-comments" />
                  </a>
                  <a href="#" className="btn btn-sm btn-primary">
                    <i className="fas fa-user" /> View Profile
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
            <div className="card bg-light d-flex flex-fill">
              <div className="card-header text-muted border-bottom-0">
                Digital Strategist
              </div>
              <div className="card-body pt-0">
                <div className="row">
                  <div className="col-7">
                    <h2 className="lead">
                      <b>Nicole Pearson</b>
                    </h2>
                    <p className="text-muted text-sm">
                      <b>About: </b> Web Designer / UX / Graphic Artist / Coffee
                      Lover{" "}
                    </p>
                    <ul className="ml-4 mb-0 fa-ul text-muted">
                      <li className="small">
                        <span className="fa-li">
                          <i className="fas fa-lg fa-building" />
                        </span>{" "}
                        Address: Demo Street 123, Demo City 04312, NJ
                      </li>
                      <li className="small">
                        <span className="fa-li">
                          <i className="fas fa-lg fa-phone" />
                        </span>{" "}
                        Phone #: + 800 - 12 12 23 52
                      </li>
                    </ul>
                  </div>
                  <div className="col-5 text-center">
                    <img
                      src="../../dist/img/user1-128x128.jpg"
                      alt="user-avatar"
                      className="img-circle img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="text-right">
                  <a href="#" className="btn btn-sm bg-teal">
                    <i className="fas fa-comments" />
                  </a>
                  <a href="#" className="btn btn-sm btn-primary">
                    <i className="fas fa-user" /> View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
            <div className="card bg-light d-flex flex-fill">
              <div className="card-header text-muted border-bottom-0">
                Digital Strategist
              </div>
              <div className="card-body pt-0">
                <div className="row">
                  <div className="col-7">
                    <h2 className="lead">
                      <b>Nicole Pearson</b>
                    </h2>
                    <p className="text-muted text-sm">
                      <b>About: </b> Web Designer / UX / Graphic Artist / Coffee
                      Lover{" "}
                    </p>
                    <ul className="ml-4 mb-0 fa-ul text-muted">
                      <li className="small">
                        <span className="fa-li">
                          <i className="fas fa-lg fa-building" />
                        </span>{" "}
                        Address: Demo Street 123, Demo City 04312, NJ
                      </li>
                    </ul>
                  </div>
                  <div className="col-5 text-center">
                    <img
                      src="../../dist/img/user1-128x128.jpg"
                      alt="user-avatar"
                      className="img-circle img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="text-right">
                  <a href="#" className="btn btn-sm bg-teal">
                    <i className="fas fa-comments" />
                  </a>
                  <a href="#" className="btn btn-sm btn-primary">
                    <i className="fas fa-user" /> View Profile
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
            <div className="card bg-light d-flex flex-fill">
              <div className="card-header text-muted border-bottom-0">
                Digital Strategist
              </div>
              <div className="card-body pt-0">
                <div className="row">
                  <div className="col-7">
                    <h2 className="lead">
                      <b>Nicole Pearson</b>
                    </h2>
                    <p className="text-muted text-sm">
                      <b>About: </b> Web Designer / UX / Graphic Artist / Coffee
                      Lover{" "}
                    </p>
                    <ul className="ml-4 mb-0 fa-ul text-muted">
                      <li className="small">
                        <span className="fa-li">
                          <i className="fas fa-lg fa-building" />
                        </span>{" "}
                        Address: Demo Street 123, Demo City 04312, NJ
                      </li>
                      <li className="small">
                        <span className="fa-li">
                          <i className="fas fa-lg fa-phone" />
                        </span>{" "}
                        Phone #: + 800 - 12 12 23 52
                      </li>
                    </ul>
                  </div>
                  <div className="col-5 text-center">
                    <img
                      src="../../dist/img/user1-128x128.jpg"
                      alt="user-avatar"
                      className="img-circle img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="text-right">
                  <a href="#" className="btn btn-sm bg-teal">
                    <i className="fas fa-comments" />
                  </a>
                  <a href="#" className="btn btn-sm btn-primary">
                    <i className="fas fa-user" /> View Profile
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
            <div className="card bg-light d-flex flex-fill">
              <div className="card-header text-muted border-bottom-0">
                Digital Strategist
              </div>
              <div className="card-body pt-0">
                <div className="row">
                  <div className="col-7">
                    <h2 className="lead">
                      <b>Nicole Pearson</b>
                    </h2>
                    <p className="text-muted text-sm">
                      <b>About: </b> Web Designer / UX / Graphic Artist / Coffee
                      Lover{" "}
                    </p>
                    <ul className="ml-4 mb-0 fa-ul text-muted">
                      <li className="small">
                        <span className="fa-li">
                          <i className="fas fa-lg fa-building" />
                        </span>{" "}
                        Address: Demo Street 123, Demo City 04312, NJ
                      </li>
                      <li className="small">
                        <span className="fa-li">
                          <i className="fas fa-lg fa-phone" />
                        </span>{" "}
                        Phone #: + 800 - 12 12 23 52
                      </li>
                    </ul>
                  </div>
                  <div className="col-5 text-center">
                    <img
                      src="../../dist/img/user2-160x160.jpg"
                      alt="user-avatar"
                      className="img-circle img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="text-right">
                  <a href="#" className="btn btn-sm bg-teal">
                    <i className="fas fa-comments" />
                  </a>
                  <a href="#" className="btn btn-sm btn-primary">
                    <i className="fas fa-user" /> View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
     
      
    </div>
    
  </section>
  
</div>

    </div>
  )
}
