import React from 'react'
import { connect } from 'react-redux'

import ObjectListFilters from '../components/ObjectListFilters'

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const ObjectListFiltersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ObjectListFilters)

export default ObjectListFiltersContainer