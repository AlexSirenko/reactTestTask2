export const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                action.item
            ]
        case 'DELETE_ITEM':
            return state.filter((item) => {
                return item.id != action.id
            })
        case 'UPDATE_ITEM':
            return state.map((item) => {
                if (item.id == action.item.id) {
                    return action.item;
                }
                return item;
            })
        case 'COMPLETE_ITEM': 
            state.forEach((item)=> {
                if(item.id == action.id){
                    item.completed = !item.completed;
                }
            })
            return [
                ...state
            ]
        default:
            return state
    }
}