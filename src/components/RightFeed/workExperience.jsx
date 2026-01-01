import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork } from "react-icons/md";
import { headerUnderlineStyle } from "../../styles";
const WorkExperience = () => {
  return <>
    <h2 style={headerUnderlineStyle}>
      Work Experience</h2>
    <VerticalTimeline
      layout='1-column-left'
      lineColor='#2196F3'
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<MdOutlineWork />}
      >
        <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">American Airlines</h4>

        <p style={{ marginLeft: "5px" }}>
          <i>March 2025 - Present</i>
          <li>Part of the contact center team, designing and building features for voice channel.</li>
        </p>

      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<MdOutlineWork />}
      >
        <h3 className="vertical-timeline-element-title">Engineer 1 - Software Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Eli Lilly</h4>

        <p style={{ marginLeft: "5px" }}>
          <i>May 2024 - March 2025</i>
          <li>Spearheaded development of service desk transformation by providing single entry point to get answers at Lilly</li>
          <li>
            Led the team as lead engineer for sales service desk, looking after the technical feasibility, alignment with business and leading development activities.
          </li>
          <li>
            To expand the number of channels, designed and developed web channel- hosted on SharePoint sites with integration of universal bot.
          </li>
          <li>
            Awards:
            -GOSO excellence business award
            -Star performer Q3
          </li>
        </p>

      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<MdOutlineWork />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineer - B1</h3>
        <h4 className="vertical-timeline-element-subtitle">Allstate</h4>
        <p style={{ marginLeft: "5px" }}>
          <i>April 2023 - March 2024</i>
          <li>Single handedly built mobile SDK for Amazon Connect to enable Integration of Virtual Assistant chatbots on Mobile Apps. Built on React native.</li>

          <li>Mobile SDK consumed by GHRN rescuers to help customers with Roadside assistance. This capability reduced Cost for IVR calls, enabled support through virtual assistance and agent chat transfer support.
          </li>
          <li>Implemented conversational chat flows for Myclaims virtual assistant involving integrating Internal APIs to provide users their Claim status, FaQ results, chat transfer to support queues.
          </li>
          <li>Implemented conversational chat flows for Agent facing virtual assistant - Reduced the Chat transfer hops across queues, assigning the chat to right skills, decreased chat response time, across differnet entry points of chat, trained models on AWS comprehand.
          </li>
          <li>Worked on migrating Customer facing and internal chatbots to Amazon Connect and Lexv2.
          </li>
        </p>
        <hr></hr>
        <h3 className="vertical-timeline-element-title">Associate Engineer - Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Allstate</h4>
        <p style={{ marginLeft: "5px" }}>
          <i>July 2022 - March 2023</i>

          <li> Built an Customer facing Chatbot to handle queries with Digital Insurance, with Integrating Internal APIs.
          </li>
          <li>Built POCs to demonstrate the capabilities of Amazon Connect for Chat, SMS, Voice Channels which led to Leadership decision to Migrate to Amazon Connect.
          </li>
          <li>
            Recognized as Star Performer (Sept '22) - Deliverables as per timelines, Collaborating with Team and Sub-Teams to resolve Issues and Suggestions to improve the product, Actively Participating in Cohorts.
          </li>
        </p>
        <hr></hr>
        <h3 className="vertical-timeline-element-title">Developer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">Allstate</h4>
        <p style={{ marginLeft: "5px" }}>
          <i>Oct 2021 - June 2022</i>

          <li>Built Employee facing Virtual Assistant used by Allstate Northern Ireland Employees to handle queries related to policy and Faq.
          </li>
          <li>
            Integrated Internal APIs to fetch results from Internal Knowledge Base and provide based on higher confidence scores.
          </li>
          <li>
            Worked on : NodeJS, AWS, Git, CI/CD, Integrating APIs & Packages, TDD, Agile practices.
          </li>
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </>

}

export default WorkExperience;
