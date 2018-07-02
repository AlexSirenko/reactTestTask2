import { combineReducers } from 'redux'

import { items } from './items'
import { isFormOpen } from './addForm'
import { updateItemId } from './onClickUpdateItem'
import { isUpdateFormOpen } from './updateForm'

export const reducer = combineReducers({
    items,
    isFormOpen,
    isUpdateFormOpen,
    updateItemId
});