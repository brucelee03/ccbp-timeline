import './index.css'

import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectTitle, description, duration, projectUrl, imageUrl} = props

  return (
    <div className="project-timeline-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="title-card">
        <h2 className="project-title">{projectTitle}</h2>
        <div className="duration">
          <AiFillCalendar className="icon" />
          <p className="duration-text">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <div className="project-footer">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-link"
        >
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
