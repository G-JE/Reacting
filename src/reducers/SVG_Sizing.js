const Sizing = (state = {}, action) => {
    switch (action.type){
        case "UPDATE_DIMS":
            console.log('window resize', action.height, 'x', action.width)
            return Object.assign({}, state, { mainHeight: action.height, mainWidth: action.width}
         )
         default: return state;

    }
}

export default Sizing