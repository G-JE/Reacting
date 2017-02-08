import Boston from '../data/Boston'
import React from 'react-dom'
var d3 = require('d3')
var geo = require('d3-geo')

let bostonMap = {}

bostonMap.create = function(el, props, state) {

    const node = el

var svg = d3.select( el )
  .append( "svg" )
  .attr( "width", 500 )
  .attr( "height", 500 );

var g = svg.append( "g" );

var albersProjection = d3.geoAlbers()
  .scale( 140000 )
  .rotate( [71.057,0] )
  .center( [0, 42.313] )
  .translate( [250, 250] );

var geoPath = d3.geoPath()
    .projection( albersProjection );

g.selectAll( "path" )
  .data( Boston.features )
  .enter()
  .append( "path" )
  .attr( "fill", "white" )
  .attr('stroke','red')
  .attr( "d", geoPath );
}

bostonMap.destroy = (el) => {
    this.remove()
}

export default bostonMap