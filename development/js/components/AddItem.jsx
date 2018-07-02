import React from 'react'
import PropTypes from 'prop-types'

import FormItem from './FormItem'

class AddItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='add-item-container'>
                <div className='header'>
                    <h4>Add Item</h4>
                </div>
                <FormItem item={null} onSubmitFunc={this.props.onAddItem} closeDialog = {this.props.onCloseAddItem}/>
            </div>
        )
    }
}

AddItem.propTypes = {
    onAddItem: PropTypes.func,
    onCloseAddItem: PropTypes.func
}

export default AddItem