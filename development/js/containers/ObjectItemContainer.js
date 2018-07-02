import React from 'react'
import { connect } from 'react-redux'

import { updateFormToggle, onClickUpdateItem, deleteItem, completeItem } from '../actions/index'

import ObjectItem from '../components/ObjectItem'

const mapStateToProps = (state, ownProps) => {
    return {
        item: ownProps.item,
        key: ownProps.item.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateClick: (id) => {
            dispatch(updateFormToggle());
            dispatch(onClickUpdateItem(id));
        },
        onDeleteClick: (id) => dispatch(deleteItem(id)),
        onCompleteClick: (id) => dispatch(completeItem(id))
    }
}

const ObjectItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ObjectItem)

export default ObjectItemContainer