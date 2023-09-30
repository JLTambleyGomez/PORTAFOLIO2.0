import {
  CLEAN_MESSAGE, CLEAR_DATA,ERROR,
 CLEAN_USER,DARKMODE,LENGUAJE,

} from "./actions";
let initialState = {
  ////////////////////////////////
  candles:null,
  prices:null,
  activeStreams:null,
  ////////////////////////////////
  user:null,
  login:false,
  error: "",
  message: "",
  darkmode: false,
  lenguaje: "ES",
};


function rootReducer(state = initialState, action) {
  switch (action.type) {
 /////////////////////////APP/////////////////////////////////////////////
    


     case LENGUAJE :
      return {
        ...state,
        lenguaje: action.payload
      }

     case DARKMODE:
      return{
        ...state,
        darkmode: action.payload
      }
  

      case CLEAN_USER:
        return{
          ...state,
          user: null,
        }

    
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAN_MESSAGE:
      return {
        ...state,
        error: "",
        message:"",
      };
    case CLEAR_DATA:
      return {
        ...state,
        candles: null,
      };
     
   
    default:
      return state;
  }
}

export default rootReducer;
