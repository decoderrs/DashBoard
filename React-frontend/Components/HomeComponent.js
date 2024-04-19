import * as d3 from "d3";
import React from 'react';
import { useState } from "react";
import { Loading } from "./LoadingComponent";
import CountryChart from "./Country";
import IntensityChart from "./IntensityChart";
import LikelihoodRadarChart from "./Likelihood";
import RegionChart from "./RegionChart";

export default function Home(props) {
  const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));

  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading></Loading>
        </div>
      </div>

    )
  }
  else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    )
  }
  else if (props.countries == null) {
    return (<div></div>);
  }

  function onMouseMove(event) {
    const [x, y] = d3.pointer(event);
    setData(data.slice(-200).concat(Math.atan2(x, y)));
  }

  return (

    // console.log('reach here :', [1].concat(Object.keys(props.countries[0]))),
      <>
      <CountryChart countries={props.countries} />
      <IntensityChart countries={props.countries} />
      <LikelihoodRadarChart countries={props.countries} />
      <RegionChart countries={props.countries} />
    </>
  );
}