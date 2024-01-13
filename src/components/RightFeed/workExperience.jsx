import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork, MdEmail, MdLocationOn } from "react-icons/md";

const WorkExperience = () => {
  return <>
    <h2 style={{ textAlign: "center" }}>Work Experience</h2>
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
        icon={<MdOutlineWork />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineer - B1</h3>
        <h4 className="vertical-timeline-element-subtitle">Allstate</h4>
        <li>
          Worked on Building Mobile SDK for Enabling Chatbots integrated with
          Amazon Connect on Mobile Apps with React Native.
        </li>
        <li>Worked on Migrating Customer Facing and Internal chatbots to Amazon
          Connect and Lexv2.</li>
        <li>Worked on : React Native, NodeJS, AWS, Git, CI/CD-Jenkins, Integrating APIs
          & Packages, TDD, Agile practices.</li>

      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="July 2022 - April 2023 | 10 Months"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<MdOutlineWork />}
      >
        <h3 className="vertical-timeline-element-title">Associate Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Allstate</h4>
        <li>
        Built an Customer facing Chatbot. To handle queries with digital Insurance,
          with Integrating Internal APIs.
        </li>
        <li>
        Built POCs to demonstrate the capabilities of Amazon Connect for Chat, SMS,
          Voice Channels which lead to Leadership decision to Migrate to Amazon
          Connect.
          </li>
          <li>
          Worked on : NodeJS, AWS, Amazon Connect, Git, CI/CD-Jenkins, Integrating
          APIs & Packages, TDD, Agile practices.
          </li>
       
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Oct 2021 - June 2022 | 9 Months"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<MdOutlineWork />}
      >
        <h3 className="vertical-timeline-element-title">Developer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">Allstate</h4>
        <li>Built an Internal Employee facing NLU driven Chatbot to handle Queries and
          Polices. Consumed by Allstate Northern Ireland Employees on daily basis.</li>
        <li>Integrated Internal APIs to provide Knowledge base results to Queries of
          Employees.</li>
        <li>
        Worked on : NodeJS, AWS, Git, CI/CD-Jenkins, Integrating APIs & Packages,
          TDD, Agile practices.
        </li>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </>

}

export default WorkExperience;
