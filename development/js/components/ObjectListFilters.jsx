import React from 'react'
import PropTypes from 'prop-types'

import ObjectItemContainer from '../containers/ObjectItemContainer'
import Filters from './Filters'

class ObjectListFilters extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            completed: 'ALL',
            importance: 'ALL',
            expire: 'ALL'
        }
        this.initialItems = this.props.items;
    }

    componentWillReceiveProps(nextProps) {
        this.initialItems = nextProps.items;
    }

    onChangeFilter = (filters) => {
        this.setState(filters);
    }

    handleFilterComplete = (filter, items) => {
        switch (filter) {
            case 'ALL':
                return items;
            case 'COMPLETED':
                return items.filter(item => item.completed == true)
            case 'INCOMPLETED':
                return items.filter(item => item.completed == false)
            default:
                return items;
        }
    }
    handleFilterImportance = (filter, items) => {
        switch (filter) {
            case 'ALL':
                return items;
            case 'LOW':
                return items.filter(item => item.importance == 'LOW')
            case 'MIDDLE':
                return items.filter(item => item.importance == 'MIDDLE')
            case 'HIGH':
                return items.filter(item => item.importance == 'HIGH')
            default:
                return items;
        }
    }

    handleFilterExpire = (filter, items) => {
        switch (filter) {
            case 'ALL':
                return items;
            case 'NOT_EXPIRED':
                return items.filter(item => !item.haveToFinishDate || item.haveToFinishDate - Date.now() > 0)
            case 'ALREADY':
                return items.filter(item => item.haveToFinishDate && item.haveToFinishDate - Date.now() < 0)
            case 'TODAY':
                return items.filter(item => item.haveToFinishDate && item.haveToFinishDate - Date.now() > 0 && item.haveToFinishDate - Date.now() < 86400000)
            case 'IN_3_DAYS':
                return items.filter(item => item.haveToFinishDate && item.haveToFinishDate - Date.now() > 0 && item.haveToFinishDate - Date.now() < 86400000 * 3)
            case 'IN_5_DAYS':
                return items.filter(item => item.haveToFinishDate && item.haveToFinishDate - Date.now() > 0 && item.haveToFinishDate - Date.now() < 86400000 * 5)
            default:
                return items;
        }
    }

    render() {
        const initialItems = this.initialItems;
        let items = [];
        items = this.handleFilterComplete(this.state.completed, initialItems);
        items = this.handleFilterImportance(this.state.importance, items);
        items = this.handleFilterExpire(this.state.expire, items);

        let insertedItems = items.map(item => <ObjectItemContainer key={item.id} item={item} />)

        return (
            <div>
                <Filters onChangeFilter={this.onChangeFilter} />
                <div>
                    <div>
                        Count Items: {insertedItems.length}
                    </div>
                    {insertedItems}
                </div>
            </div>
        )
    }
}

ObjectListFilters.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.object
    )
}

export default ObjectListFilters