import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames';

class ObjectItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            opened: false
        }
    }

    shouldComponentUpdate() {
        return true;
    }

    onCompleteChange = () => {
        let item = this.props.item;
        this.props.onCompleteClick(item.id);
    }

    getDayFromMilliseconds = (milli) => Math.floor(milli / (1000 * 60 * 60 * 24))
    getDateFromMilliseconds = (milli) => {
        let date = new Date(milli);
        let day  = date.getDate() > 9 ? date.getDate() : '0'+ date.getDate();
        let month = date.getMonth() > 9 ? date.getMonth() : '0'+ date.getMonth();
        return date.getFullYear() + '.'+month+'.'+day;
    }
    handleOpenItem = () => {
        this.setState((prevState) => {
            return { opened: !prevState.opened }
        });
    }
    render() {
        const item = this.props.item;
        const itemState = item.completed ? 'Completed in ' + item.finishDate : 'expires in' + (item.haveToFinishDate - Date.now());
        const itemExpire = item.haveToFinishDate ? 'IN ' + this.getDayFromMilliseconds(item.haveToFinishDate - Date.now()) + ' DAYS' : 'N A';
        const itemContainer = classnames({
            'object-item-container': true,
            [item.importance+'-importance-container']: true,
            'completed': item.completed
        })
        const itemHeaderClasses = classnames({
            'item-header': true,
            'completed': item.completed
        })
        const clockExpireClasses = classnames({
            'time-expire': true,
            'time-not-expired': item.haveToFinishDate - Date.now() > 0,
            'time-expired': item.haveToFinishDate - Date.now() < 0
        })
        const mainContent = classnames({
            'main-description': true,
            'd-none': !this.state.opened
        })

        const importanceBtn = classnames({
            'importance-btn': true,
            [item.importance.toLowerCase()+'-btn']: true,
            ['active-importance-btn-' + item.importance.toLowerCase()]: true
        });

        return (
            <div className={itemContainer}>

                <div className={itemHeaderClasses}>
                    <label className='input-container'>
                        <input type="checkbox" defaultChecked={item.completed} onChange={this.onCompleteChange} />
                        <span className='checkmark'></span>
                    </label>
                    <h4 className='header-text'>{item.header}</h4>
                    <div className='btn-open' onClick={this.handleOpenItem}>Open</div>
                    <div className='expire'>
                        {item.completed ? null : <div><span className={clockExpireClasses}></span><p>{itemExpire}</p></div>}
                    </div>
                    <div className='contrals'>
                        <div className='update' onClick={() => this.props.onUpdateClick(item.id)}></div>
                        <div className='delete' onClick={() => this.props.onDeleteClick(item.id)}></div>
                    </div>
                </div>

                <div className={mainContent}>
                    <div className='description'>
                        <h5>Description: </h5>
                        <p>{item.description}</p>
                    </div>
                    <div>
                        <h5>Importance: </h5>
                        <button className={importanceBtn}>{item.importance}</button>
                    </div>
                    <div className='item-footer'>
                        <h5>Created on {this.getDateFromMilliseconds(item.createDate)}</h5>
                        
                        <h5>Have to finish on {this.getDateFromMilliseconds(item.haveToFinishDate)}</h5>
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