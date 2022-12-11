import React from "react";
import  './Loader.css'


export default function Loader({variant= 'lds_wrapper', color ='lds-roller'}){
  return (
    <div
      className={`${variant}`}
    >
      <div className={`${color}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

  );
};
