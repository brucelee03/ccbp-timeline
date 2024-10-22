import './index.css'

import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseTitle, description, duration, tagsList} = props
  return (
    <div className="course-timeline-card">
      <div className="title-card">
        <h2 className="course-title">{courseTitle}</h2>
        <div className="duration">
          <AiFillClockCircle className="icon" />
          <p className="duration-text">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(tag => (
          <li className="tag-item">
            <p className="tag-name">{tag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
