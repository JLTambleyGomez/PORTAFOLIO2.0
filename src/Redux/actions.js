

export const CLEAN_USER="CLEAN_USER";
export const ERROR = "ERROR";
export const CLEAR_DATA = "CLEAR_DATA";
export const CLEAN_MESSAGE = "CLEAN_MESSAGE";
export const DARKMODE = "DARKMODE"
export const LENGUAJE = "LENGUAJE"

export const clean_user=()=>{
  return{
    type: "CLEAN_USER"
  }
}


export function clearMessage() {
  return function (dispatch) {
    return dispatch({
      type: "CLEAN_MESSAGE",
    });
  };
}

export const lenguaje =(data)=>{
  localStorage.setItem("lenguaje",data)

  return {
    type: "LENGUAJE",
    payload : data
  }
}

export const editprofile =(data)=>{
 return {
  type: "EDITPROFILE",
  payload:data
 }
}



export const darkmode =(data)=>{
  localStorage.setItem("darkmode",data)
  return {
    type: "DARKMODE",
    payload: data
  };
}

//////////////////////////////////////////APP////////////////////////////////////////////
