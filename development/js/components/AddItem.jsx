import React from 'react'
import PropTypes from 'prop-types'

import FormItem from './FormItem'

class AddItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <h4>Fill rows for creating new item:</h4>
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