import React from 'react'
import PropTypes from 'prop-types'

import FormItem from './FormItem'

class UpdateItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <h4>Change data and save item.</h4>
                </div>
                <FormItem item={this.props.item} onSubmitFunc={this.props.onUpdateItem} closeDialog ={this.props.onCloseUpdateItem} />
            </div>
        )
    }
}

UpdateItem.propTypes = {
    item: PropTypes.object,
    onUpdateItem: PropTypes.func,
    onCloseUpdateItem: PropTypes.func
}

export default UpdateItem