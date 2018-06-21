export const isFormOpen = (state = false, action) => {
    switch (action.type) {
        case 'ADD_FORM_TOGGLE': 
            return !state
        default:
            return state
    }
}