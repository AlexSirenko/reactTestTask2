import React from 'react'
import PropTypes from 'prop-types'

class AddItemBtn extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='add-btn' onClick={this.props.onBtnClick}>
                <div className='horizontal'></div>
                <div className='vertical'></div>
            </div>
        )
    }
}

AddItemBtn.propTypes = {
    onBtnClick: PropTypes.func
}

export default AddItemBtn