export const addItem = (item) => ({
    type: 'ADD_ITEM',
    item
})

export const deleteItem = (id) => ({
    type: 'DELETE_ITEM',
    id
})

export const onClickUpdateItem = (id) => ({
    type: 'ON_CLICK_UPDATE_ITEM',
    id
})

export const updateItem = (item) => ({
    type: 'UPDATE_ITEM',
    item
})

export const completeItem = (id) => ({
    type: 'COMPLETE_ITEM',
    id
})

export const addFormToggle = () => ({
    type: 'ADD_FORM_TOGGLE'
})