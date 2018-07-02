export const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                action.item,
                ...state                
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
            return state.map((item)=> {
                if(item.id == action.id){
                    let finishDate = !item.completed ? Date.now() : null;
                    return Object.assign({}, item, {completed: !item.completed, finishDate: finishDate});
                }
                return item;
            })
        default:
            return state
    }
}