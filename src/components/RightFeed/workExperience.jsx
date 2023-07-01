import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork, MdEmail, MdLocationOn } from "react-icons/md";

const WorkExperience = ()=>{
    return <>
        <h2 style={{textAlign:"center"}}>Work Experience</h2>
        <VerticalTimeline
    layout='1-column-left'
    lineColor='#2196F3'
    >
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="May 2022 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdOutlineWork/>}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Allstate</h4>
    </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="July 2022 - April 2023 | 10 Months"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdOutlineWork/>}
  >
    <h3 className="vertical-timeline-element-title">Associate Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Allstate</h4>
    <p>
    - Worked on building NLU driven chatbots using AWS services and handled logic through lambda using NodeJS. Contributed to Production Deployments.
- Worked on : NodeJS, AWS, Git, CI/CD, Integrating APIs & Packages, TDD, Agile practices.
    </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Oct 2021 - June 2022 | 9 Months"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdOutlineWork/>}
  >
    <h3 className="vertical-timeline-element-title">Developer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Allstate</h4>
    </VerticalTimelineElement>
</VerticalTimeline>
    </>
  
}

export default WorkExperience;
