//expand
export function expand(vessel) {
  return {
    type: "EXPAND",
    vessel
  }
}

//Keep track of window size
export function windowResize(height, width){
  return{
    type: "UPDATE_DIMS",
    height,
    width
  }
}

//Toggle Clicked
export function toggle(id){
  return {
    type: "TOGGLE",
    id
  }
}

//show more
export function showMore(post){
  return {
    type: "SHOW_MORE",
    post
  }
}

//enter 
export function enter(vessel){
  return {
    type: "ENTER",
    vessel
  }
}