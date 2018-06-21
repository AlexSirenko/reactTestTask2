import React from 'react'
import { connect } from 'react-redux'

import { updateItem } from '../actions/index'

import UpdateItem from '../components/UpdateItem'

const mapStateToProps = state => {
    const id = state.updateItemId;
    const item = state.items.filter((item) => item.id == id)[0];

    return {
        item: item
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateItem: (item) => dispatch(updateItem(item))
    }
}

const UpdateItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateItem)

export default UpdateItemContainer