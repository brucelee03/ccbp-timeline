import {Component} from 'react'
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

class TimelineView extends Component {
  constructor(props) {
    super(props)
    this.state = {timelineItemsList: props.timelineItemsList}
  }

  render() {
    const {timelineItemsList} = this.state

    return (
      <div className="time-line-view-container">
        <h1 className="main-heading">
          MY JOURNEY OF
          <br />
          <span className="academy-name">CCBP 4.0</span>
        </h1>
        <div className="timeline-view-container">
          <Chrono
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
            scrollable={{scrollbar: true}}
            theme={{
              primary: '#0967d2',
              secondary: '#ffffff',
              cardBgColor: '#ffffff',
              titleColor: '#0967d2',
              titleColorActive: '#ffffff',
            }}
            classNames={{
              controls: 'my-controls',
            }}
          >
            {timelineItemsList.map(item =>
              item.categoryId === 'PROJECT' ? (
                <ProjectTimelineCard
                  key={item.id}
                  projectTitle={item.projectTitle}
                  description={item.description}
                  duration={item.duration}
                  projectUrl={item.projectUrl}
                  imageUrl={item.imageUrl}
                />
              ) : (
                <CourseTimelineCard
                  key={item.id}
                  courseTitle={item.courseTitle}
                  description={item.description}
                  duration={item.duration}
                  tagsList={item.tagsList}
                />
              ),
            )}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
