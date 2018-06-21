import React from 'react'
import PropTypes from 'prop-types'

class FormItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            header: '',
            description: '',
            importance: null,
            haveToFinishDate: null 
        }
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <p>Header: </p>
                        <input type="text" defaultValue={this.state.header} onChange={(e) => this.setState({header: e.target.value})}/>
                    </div>
                    <div>
                        <p>Header: </p>
                        <textarea type="text" defaultValue={this.state.description} onChange={(e) => this.setState({description: e.target.value})}></textarea>
                    </div>
                    <div> 
                        <p>Importance</p>
                    </div>
                </form>
            </div>
        )
    }
}

FormItem.propTypes = {
    item: PropTypes.object
}

export default FormItem