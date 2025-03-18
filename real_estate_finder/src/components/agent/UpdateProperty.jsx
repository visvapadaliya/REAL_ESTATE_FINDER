import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const UpdateProperty = () => {
    const{register,handleSubmit}=useForm();

    const [states, setstates] = useState([]);
    const [cities, setcities] = useState([]);
    const [areas, setareas] = useState([]);
    const [category,setCategory]=useState([]);
    const navigate=useNavigate();

    const getAllStates=async()=>{

        const res=await axios.get("/state/allstate");
        // console.log(res.data);
        setstates(res.data.data);
    };

    const getCityByState=async(id)=>{

        const res =await axios.get("/city/getcitybystate/" + id);
        console.log("city response....",res.data);
        setcities(res.data.data);
    };

    const getAreaByCity =async(id)=>{

        const res=await axios.get("/area/getareabycity/" + id);
        console.log(res.data);
        setareas(res.data.data);

    };

    const getAllCategory=async()=>{

      const res= await axios.get("/category/allcat/")
      console.log("cataegory Feched",res.data);
      setCategory(res.data.data);

    };

  

    useEffect(()=>{
        getAllStates()
        getAllCategory()
    },[])

    const submintHandler=async(data)=>{

        const userId=localStorage.getItem("id");

        delete data._id;
        console.log(data);
        const res=await axios.put("/property/updateproperty/"+id,data);
        console.log(res.data);
    }
  return (
    <div>
    <form onSubmit={handleSubmit(submintHandler)}>
     
   
<section className="content-header">
<div className="container-fluid">
<div className="row mb-2">
  <div className="col-sm-6">
    <h1>Update Property</h1>
  </div>
 
</div>
</div>

</section>

<section className="content">
<div className="container-fluid">
<div className="row">
 
  <div className="col-md-6">
    
    <div className="card card-info">
      <div className="card-header">
        <h3 className="card-title">Property Book</h3>
      </div>

      
      <div className="card-body">
      <div className="form-group">

<select
className="select2bs4 select2-hidden-accessible"

placeholder="Select State"
style={{ width: "100%",height:"100%" }}
data-select2-id={23}
tabIndex={-1}
aria-hidden="true"
{...register("stateId")}
onChange={(event)=>{getCityByState(event.target.value);}}
>
<option>SELECT STATE</option>
{
   states?.map((state)=>{
       return <option key={state._id} value={state._id}>{state.name}</option>
   })
}
</select>

   </div>
   <p></p>

   <div className="form-group">

<select
className="select2bs4 select2-hidden-accessible"
style={{ width: "100%",height:"100%" }}
data-select2-id={23}
tabIndex={-1}
aria-hidden="true"
{...register("cityId")}
onChange={(event)=>{
getAreaByCity(event.target.value);
}}
>
<option>SELECT CITY</option>
{
cities?.map((city)=>{
   return <option key={city._id} value={city._id}>{city.name}</option>

})
}
</select>

  </div>
  <p></p>

  <div className="form-group">
  
<select
className="select2bs4 select2-hidden-accessible"


style={{ width: "100%",height:"100%" }}
data-select2-id={23}
tabIndex={-1}
aria-hidden="true"
{...register("areaId")}
>
<option>SELECT AREA</option>
{
areas?.map((area)=>{
   return <option key={area._id} value={area._id}>{area.name}</option>
})
}
</select>

  </div>
  <p></p>

  <div className="form-group">

<select
className="select2bs4 select2-hidden-accessible"
style={{ width: "100%",height:"100%" }}
data-select2-id={23}
tabIndex={-1}
aria-hidden="true"
onChange={(event)=>{getAllCategory(event.target.value)}}
{...register("categoryId")}
>
<option>SELECT CATEGORY</option>
{
category?.map((category)=>{
  return <option key={category._id} value={category._id}>{category.name}</option>
})

}

</select>

  </div>
{/* close drop down */}
<p></p>
        <div className="input-group mb-3">
          
          <div className="input-group-prepend">
            <span className="input-group-text">&#127969;</span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="property_name"
            // fdprocessedid="x29url"
            {...register("property_name")}
          />
        </div>

        <p></p>

        <div className="input-group mb-3">
          
          <div className="input-group-prepend">
            <span className="input-group-text">&#9776;</span>
          </div>
          <label htmlFor="exampleInputFile">
          <input type="file" 
          className="custom-file-input" 
          id="exampleInputFile" 
          {...register("image")} />
          </label>
        </div>
       

<p></p>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {/* <i className="fas fa-envelope" /> */}
              &#128205;
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="address"
            // fdprocessedid="kxsede"
            {...register("address")}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {/* <i className="fas fa-envelope" /> */}
              &#128238;
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="zipcode"
            // fdprocessedid="kxsede"
            {...register("zipcode")}
          />
        </div>
    {/* dropdowm */}
<p></p>


        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {/* <i className="fas fa-envelope" /> */}
              &#128221;
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="description"
            // fdprocessedid="kxsede"
            {...register("description")}
          />
        </div>

        <p></p>
        

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">&#128176;</span>
          </div>
          <input
            type="text"
            className="form-control"
            // fdprocessedid="cle88g"
            placeholder='Base Price'
            {...register("basePrice")}
          />
          {/* <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div> */}
        </div>
        <p></p>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">&#128719;</span>
          </div>
          <input
            type="number"
            className="form-control"
            min={1}
            // fdprocessedid="cle88g"
            placeholder='bedrooms'
            {...register("bedrooms")}
          />
          
        </div>
        <p></p>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">&#128705;</span>
          </div>
          <input
            type="number"
            min={1}
            className="form-control"
            // fdprocessedid="cle88g"
            placeholder='bathrooms'
            {...register("bathrooms")}
          />
          
        </div>
        <p></p>

        <div className="form-group">
        <select
          className="select2bs4 select2-hidden-accessible"
          style={{ width: "100%",height:"100%" }}
          data-select2-id={23}
          tabIndex={-1}
          aria-hidden="true"
          {...register("furnishingStatus")}
          >

<option>Furnished</option>
<option>Semi-Furnished</option>
<option>UnFurnished</option>
</select>

        </div>
        <p></p>
        <div className="form-group">
        <select
          className="select2bs4 select2-hidden-accessible"
          style={{ width: "100%",height:"100%" }}
          data-select2-id={23}
          tabIndex={-1}
          aria-hidden="true"
          {...register("status")}
        >
           <option>Available</option>
          <option>Sold</option>
          <option>Rented</option>
          </select>

        </div>

<p></p>

        
       
        <div className="input-group input-group-sm">
          
          
          <button
              type="submit"
              className="btn btn-info btn-flat"
              // fdprocessedid="u7igc"
            >
              Book Now
            </button>
        </div>
       
      </div>
    
    </div>
   
  </div>

</div>

</div>

</section>

</form>


</div>
  )
}
