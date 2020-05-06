import moment from "moment";
export const INITIAL_DATA = [
    {
        mph: 40,
        time: 1,
        lat: 0,
        long:0,
        routeId: 1,
        currentMile:1

    },
    {
        mph: 45,
        time: 2,
        lat: 0,
        long:0,
        routeId: 1,
        currentMile:1

    },
    {
        mph: 50,
        time: 3,
        lat: 0,
        long:0,
        routeId: 1,
        currentMile:1

    },
    {
        mph: 55,
        time: 4,
        lat: 0,
        long:0,
        routeId: 1,
        currentMile:1

    },
    {
        mph: 45,
        time: 5,
        lat: 0,
        long:0,
        routeId: 1,
        currentMile:1

    },
    {
        mph: 50,
        time: 6,
        lat: 0,
        long:0,
        routeId: 1,
        currentMile:1

    },
    {
        mph: 55,
        time: 7,
        lat: 0,
        long:0,
        routeId: 1,
        currentMile:1

    },
    

]

function GetCurrentDate(x){
    return moment().format("MMM Do YY")
  }
  
  function GetCurrentTime(x){

    return moment().format("LTS")
  }