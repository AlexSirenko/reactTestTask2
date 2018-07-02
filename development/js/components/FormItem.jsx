import React from 'react'
import PropTypes from 'prop-types'

class FormItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.onCreateSetState();
    }

    onCreateSetState = () => {
        if (this.props.item != null) {
            let item = this.props.item;
            return {
                header: item.header,
                description: item.description,
                importance: item.importance,
                haveToFinishDate: item.haveToFinishDate,
                btn: 'Update'
            }
        }

        return {
            header: '',
            description: '',
            importance: 'LOW',
            haveToFinishDate: Date.now(),
            btn: 'Add'
        }
    }

    handleSubmit = () => {
        let state = this.state;
        let item = this.props.item;
        let newItem = {};

        if (item != null) {
            newItem = {
                id: item.id,
                header: state.header,
                description: state.description,
                importance: state.importance,
                haveToFinishDate: state.haveToFinishDate,
                createDate: item.createDate,
                completed: item.completed,
                finishDate: null
            }
        } else {
            newItem = {
                id: +Date.now(),
                header: state.header,
                description: state.description,
                importance: state.importance,
                haveToFinishDate: state.haveToFinishDate,
                createDate: Date.now(),
                completed: false,
                finishDate: null
            }
        }

        this.props.onSubmitFunc(newItem);
        this.props.closeDialog();
    }

    onChangeDateTime = (e) => {
        this.setState({
            haveToFinishDate: +new Date(e.target.value)
        })
    }

    getCorrectFormatDate = (date) => {
        date = new Date(date);
        let year = date.getFullYear();
        let month = date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth();
        let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();

        return year + '-' + month + '-' + day;
    }

    render() {
        return (
            <div>
                <div>
                    <p>Header: </p>
                    <input type="text" defaultValue={this.state.header} onChange={(e) => this.setState({ header: e.target.value })} />
                </div>
                <div>
                    <p>Description: </p>
                    <textarea type="text" defaultValue={this.state.description} onChange={(e) => this.setState({ description: e.target.value })}></textarea>
                </div>
                <div>
                    <p>Importance: </p>
                    <button onClick={() => this.setState({ importance: 'LOW' })}>LOW</button>
                    <button onClick={() => this.setState({ importance: 'MIDDLE' })}>MIDDLE</button>
                    <button onClick={() => this.setState({ importance: 'HIGH' })}>HIGH</button>
                </div>
                <div>
                    <p>Have to finish datetime: </p>
                    <input type="date" defaultValue={this.getCorrectFormatDate(this.state.haveToFinishDate)} onChange={(e) => this.onChangeDateTime(e)} />
                </div>
                <button onClick={this.handleSubmit}>{this.state.btn}</button>
            </div>
        )
    }
}

FormItem.propTypes = {
    item: PropTypes.object,
    onSubmitFunc: PropTypes.func,
    closeDialog: PropTypes.func
};

export default FormItem