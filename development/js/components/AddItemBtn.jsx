import React from 'react'
import PropTypes from 'prop-types'

class AddItemBtn extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onBtnClick}>Add Item</button>
            </div>
        )
    }
}

AddItemBtn.propTypes = {
    onBtnClick: PropTypes.func
}

export default AddItemBtn