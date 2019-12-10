import { CHANGE_CONFIG, CHANGE_STATUS_MENTOR } from "../type";

const config = localStorage.getItem( "config" )
let initilized = JSON.parse( config );
if( !initilized ){
    initilized = {
        status: false,
    }
}


function config(state = initilized, action) {
  switch (action.type) {
    case CHANGE_STATUS_MENTOR:
        state = {...state, status: action.payload};
        localStorage.setItem( "config", JSON.stringify( state ) )
      return state;
    default:
      return state;
  }
}

export default config;
