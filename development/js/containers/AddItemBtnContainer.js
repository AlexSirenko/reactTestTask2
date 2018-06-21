import React from 'react'
import { connect } from 'react-redux'

import AddItemBtn from '../components/AddItemBtn';
import { addFormToggle } from '../actions/index'

const mapDispatchToProps = dispatch => {
    return {
        onBtnClick: () => dispatch(addFormToggle())
    }
}

const AddItemBtnContainer = connect(
    null,
    mapDispatchToProps
)(AddItemBtn)

export default AddItemBtnContainer