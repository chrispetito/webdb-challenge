import React from 'react'
import { getProjects } from '../actions'
import { connect } from 'react-redux'
import { Link, BrowserRouter as Router } from 'react-router-dom'

class ProjectBoard extends React.Component {
    componentDidMount() {
        this.props.getProjects()
    }

    render() {
        return(
            <div className='project-container'>
                {this.props.projects.map(project => {
                    return(
                        <div className='project-card' to={`/projects/${project.id}`} key={project.id}>
                            <h1>{project.name}</h1>
                            <h4>{project.description}</h4>
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