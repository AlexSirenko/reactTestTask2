import React from 'react'
import { connect } from 'react-redux'

import { addItem } from '../actions/index'

import AddItem from '../components/AddItem'

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: (item) => dispatch(addItem(item))
    }
}

const AddItemContainer = connect(
    null,
    mapDispatchToProps
)(AddItem)

export default AddItemContainer