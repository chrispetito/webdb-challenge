import React from 'react'
import { getProjects } from '../actions'
import { connect } from 'react-redux'

class ProjectBoard extends React.Component {
    componentDidMount() {
        this.props.getProjects()
    }

    render() {
        return(
            <div>
                {this.props.projects.map(project => {
                    return(
                        <div>
                            <h1>{project.name}</h1>
                            </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    projects: state.projects
})

export default connect(mapStateToProps, { getProjects })(ProjectBoard)