import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";
import { headerUnderlineStyle } from "../../styles";
const Education = ()=>{
    return <>
        <h2 style={headerUnderlineStyle}>Education</h2>
        <VerticalTimeline
    layout='1-column-left'
    lineColor='#2196F3'
    >
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2018 - 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Engineering - Computer Science Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">EPCET Bangalore, Affliated to VTU</h4>
    </VerticalTimelineElement>
</VerticalTimeline>
<VerticalTimeline
    layout='1-column-left'
    lineColor='#2196F3'
    >
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2016 - 2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">Class 12th - [CBSE]</h3>
    <h4 className="vertical-timeline-element-subtitle">Lake Montfort School, Bangalore</h4>
    </VerticalTimelineElement>
</VerticalTimeline>
    </>
  
}

export default Education;