import { combineReducers } from 'redux'

import { items } from './items'
import { isFormOpen } from './addForm'
import { updateItemId } from './onClickUpdateItem'

export const reducer = combineReducers({
    items,
    isFormOpen,
    updateItemId
});