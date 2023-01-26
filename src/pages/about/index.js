import React, {useEffect} from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {FaHtml5, FaCss3Alt, FaPython, FaReact, FaNodeJs} from 'react-icons/fa'
import {SiJavascript, SiMongodb, SiPostgresql, SiExpress, SiDjango, SiJson} from 'react-icons/si'
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  
let icons = [
  <FaHtml5/>,
  <FaCss3Alt/>,
  <SiJavascript/>,
  <FaPython/>,
  <SiMongodb/>,
  <SiPostgresql/>,
  <FaReact/>,
  <FaNodeJs/>,
  <SiExpress/>,
  <SiDjango/>,
  <SiJson/> 
]

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          {/* <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col> */}
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>I am a Software Engineer Located in the Greater Boston area. My extensive customer service 
                experience drives me to improve the well-being of others with an empathetic approach to empowerment.
                As a career-changer I am commited to continuously learning new technologies. I am currently seeking
                the next opportunity to grow my skillset with hands-on experience.
                <br /><br />
                I have a Bachelor of Business Administration from the Isenberg School of Management at the 
                University of Massachusetts, Amherst, 15 years experience in retail customer service, and I have 
                recently completed the Software Engineering Immersive course with General Assembly.
                <br /><br />
                I'm a tattoo enthusiast. I'm a nerd for fantasy and sci-fi. I collect hard-cover books. My favorite author is Margaret Atwood. I have a weird knack for finding four-leaf clovers and inside the larger books on my shelf you'll find at least a hundred of them waiting to be cast in resin. I'm a mom to kids and cats, and I hope to spend the rest of my life learning and experiencing.</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">skills</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{icons[i]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        {/* <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row> */}
        {/* <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row> */}
      </Container>
    </HelmetProvider>
  );
};
