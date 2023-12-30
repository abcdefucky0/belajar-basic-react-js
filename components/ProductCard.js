import React from "react"

const ProductCard = (props) => {
    return (
      <div className='card'>
        <img style={{
                    width : '100%', 
                    height  : '200px', 
                    borderRadius : '10px 0px 0 px'}} 
                    src={props.imageURL}  alt=''
                    />
        <div className='container'>
          <h4>
            <b>{props.name}</b>
          </h4>
          <p>{props.desc}</p>
        </div>
      </div>
    )
  } 

export default ProductCard