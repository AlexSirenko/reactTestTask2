export const updateItemId = (state = null, action) => {
    switch(action.type){
        case 'ON_CLICK_UPDATE_ITEM': 
            return action.id
        default: 
            return state
    }
}