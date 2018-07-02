import React from 'react'
import PropTypes from 'prop-types'

import AddItemContainer from '../containers/AddItemContainer'
import AddItemBtnContainer from '../containers/AddItemBtnContainer'
import ObjectListFiltersContainer from '../containers/ObjectListFiltersContainer'
import UpdateItemContainer from '../containers/UpdateItemContainer'
import Header from './Header'

class Application extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const addItem = this.props.isFormOpen ? <AddItemContainer /> : null;
        const updateItem = this.props.isUpdateFormOpen ? <UpdateItemContainer /> : null;

        return (
            <div>
                <div className='container'>
                    <Header />
                    <ObjectListFiltersContainer />
                    <AddItemBtnContainer />
                    {addItem}
                    {updateItem}
                </div>
            </div>
        )
    }
}

Application.propTypes = {
    isFormOpen: PropTypes.bool,
    isUpdateFormOpen: PropTypes.bool
}

export default Application