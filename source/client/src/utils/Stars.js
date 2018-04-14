import React from 'react';
import SVGInline from "react-svg-inline"
import star from '../assets/icons/filters/star.svg';
import { forEach } from 'lodash';


let fiveStars = [],
    fourStars = [],
    threeStars = [],
    twoStars = [];

forEach([1, 2, 3, 4 ,5], function(value) {
    fiveStars.push(<SVGInline  key={`five-stars-${value}`} svg={ star } fill="#FFBB00" width="12px"/>);
});

forEach([1, 2, 3, 4], function(value) {
    fourStars.push(<SVGInline  key={`four-stars-${value}`} svg={ star } fill="#FFBB00" width="12px"/>);
});

forEach([1, 2, 3], function(value) {
    threeStars.push(<SVGInline  key={`three-stars-${value}`} svg={ star } fill="#FFBB00" width="12px"/>);
});

forEach([1, 2], function(value) {
    twoStars.push(<SVGInline  key={`two-stars-${value}`} svg={ star } fill="#FFBB00" width="12px"/>);
});

let stars;
export default stars = {
    "2": twoStars,
    "3": threeStars,
    "4": fourStars,
    "5": fiveStars
}