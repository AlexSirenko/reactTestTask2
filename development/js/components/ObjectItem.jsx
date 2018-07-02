import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames';

class ObjectItem extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return true;
    }

    onCompleteChange = () => {
        let item = this.props.item;
        this.props.onCompleteClick(item.id);
    }

    render() {
        const item = this.props.item;
        const itemState = item.completed ? 'Completed in ' + item.finishDate : 'expires in' + (item.haveToFinishDate - Date.now());

        const itemHeaderClasses = classnames({
            'item-header': true,
            'completed' :  item.completed
        })

        return (
            <div className='object-item-container'>

                <div className={itemHeaderClasses}>
                    <label className='input-container'>
                        <input type="checkbox" defaultChecked={item.completed} onChange={this.onCompleteChange} />
                        <span className='checkmark'></span>
                    </label>
                    <h4 className='header-text'>{item.header}</h4>
                    <div className='contrals'>
                        <div className='update' onClick={() => this.props.onUpdateClick(item.id)}></div>
                        <div className='delete' onClick={() => this.props.onDeleteClick(item.id)}></div>
                    </div>
                </div>

                <div>
                    <div className="item-state">
                        <p>State: {itemState}</p>
                        <p>Importance: {item.importance}</p>
                    </div>

                    <div className='description'>
                        <p>{item.description}</p>
                    </div>

                    <div className='item-footer'>
                        <p>Created: {item.createDate}</p>
                        <p>Have to finish: {item.haveToFinishDate}</p>
                    </div>
                </div>
            </div>
        )
    }
}

ObjectItem.propTypes = {
    item: PropTypes.object,
    onUpdateClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
    onCompleteClick: PropTypes.func
}

export default ObjectItem