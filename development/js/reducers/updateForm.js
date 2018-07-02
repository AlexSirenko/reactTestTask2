export const isUpdateFormOpen = (state = false, action) => {
    switch (action.type) {
        case 'UPDATE_FORM_TOGGLE': 
            return !state
        default:
            return state
    }
}