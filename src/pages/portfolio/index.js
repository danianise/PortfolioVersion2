import React, {useEffect} from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            if(!data.frontend){ 
              return (
                <div key={i} className="po_item">
                  <img src={data.img} alt="" />
                  <div className="content">
                    <h4>{data.title}</h4>
                    <p style={{fontSize:'small'}}>{data.technologies}</p>
                    {/* <p>{data.desctiption}</p> */}
                    <a href={data.link} target='_blank'>view project</a><br />
                    <a href={data.github} target='_blank'>view code</a>
                  </div>
                </div>
              )
            } else {
              return (
                <div key={i} className="po_item">
                  <img src={data.img} alt="" />
                  <div className="content">
                    <h3>{data.title}</h3>
                    <p style={{fontSize:'small'}}>{data.technologies}</p>
                    {/* <p>{data.desctiption}</p> */}
                    <a href={data.link} target='_blank'>view project</a><br />
                    <a href={data.frontend} target='_blank'>view frontend code</a><br />
                    <a href={data.backend} target='_blank'>view backend code</a>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
