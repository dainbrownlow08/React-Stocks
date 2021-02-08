import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card">
      <div className="card-body" onClick={() => props.handleEvent(props.data)}>
        <h5 className="card-title">{
            props.data.name
          }</h5>
        <p className="card-text">{
            `${props.data.ticker} : ${props.data.price}`
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
