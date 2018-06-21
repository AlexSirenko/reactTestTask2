import React from 'react'
import { connect } from 'react-redux'

import { onClickUpdateItem } from '../actions/index'

import ObjectListFilters from '../components/ObjectListFilters'

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickUpdateItem: (id) => dispatch(onClickUpdateItem(id)),
        onClickDeleteItem: (id) => dispatch(deleteItem(id))
    }
}

const ObjectListFiltersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ObjectListFilters)

export default ObjectListFiltersContainer