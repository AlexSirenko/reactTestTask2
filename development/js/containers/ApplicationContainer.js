import React from 'react'
import { connect } from 'react-redux'

import { addItem } from '../actions/index'

import Application from '../components/Application'

const mapStateToProps = state => {
    return {
        isFormOpen: state.isFormOpen,
        isUpdateFormOpen: state.isUpdateFormOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: (item) => dispatch(addItem(item))
    }
}

const ApplicationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Application)

export default ApplicationContainer