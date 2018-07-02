import React from 'react'
import PropTypes from 'prop-types'


class Filters extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            completed: 'ALL',
            importance: 'ALL',
            expire: 'ALL'
        }
    }

    handleMainChange = (e) => {
        let filters = {};
        filters = {
            completed: 'ALL',
            importance: 'ALL'
        };
        this.setState(filters);
        this.props.onChangeFilter(filters);
    }

    handleCompleteChange = (e) => {

        let filters = {
            ...this.state,
            completed: e.target.value,
        };

        this.setState(filters);
        this.props.onChangeFilter(filters);
    }

    handleImportanceChange = (e) => {
        let filters = {
            ...this.state,
            importance: e.target.value
        };

        this.setState(filters);
        this.props.onChangeFilter(filters);
    }

    handleExpireChange = (e) => {
        let filters = {
            ...this.state,
            expire: e.target.value,
        };

        this.setState(filters);
        this.props.onChangeFilter(filters);
    }

    render() {

        return (
            <div className='filters-container'>
                <div>
                    <p>
                        <button className='form-submit-btn' onClick={(e) => this.handleMainChange(e)}>Reset</button>
                    </p>
                </div>

                    <div>
                        <p>Completed:
                        <select value={this.state.completed} onChange={(e) => this.handleCompleteChange(e)}>
                                <option value="ALL">All</option>
                                <option value="COMPLETED">Completed</option>
                                <option value="INCOMPLETED">Incompleted</option>
                            </select>
                        </p>
                    </div>

                    <div>
                        <p>Importance:
                        <select value={this.state.importance} onChange={(e) => this.handleImportanceChange(e)}>
                                <option value="ALL">All</option>
                                <option value="LOW">Low</option>
                                <option value="MIDDLE">Middle</option>
                                <option value="HIGH">High</option>
                            </select>
                        </p>
                    </div>

                    <div>
                        <p>Expire:
                    <select value={this.state.expire} onChange={(e) => this.handleExpireChange(e)}>
                                <option value="ALL">All</option>
                                <option value="NOT_EXPIRED">Not expired</option>
                                <option value="ALREADY">Already</option>
                                <option value="TODAY">Today</option>
                                <option value="IN_3_DAYS">in 3 days</option>
                                <option value="IN_5_DAYS">In 5 days</option>
                            </select>
                        </p>
                    </div>
                </div>
                )
            }
        }
        
Filters.propTypes = {
                    onChangeFilter: PropTypes.func
            }
            
export default Filters