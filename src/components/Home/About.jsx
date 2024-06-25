import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Mình Xin Được<span className="yellow"> Giới Thiệu </span> Bản Thân
            </h1>
            <p className="home-about-body">
              Chào, tên của mình là <b className="yellow">Huỳnh Vĩnh Tiến </b>
              và mình đến từ <b className="yellow"> Ho Chi Minh City.</b>
              <br />
              <br />
              Học vấn của mình là bậc đại học tại Trường Đại Học Công Nghệ TP.HCM với ngành học đó là <b className="yellow">Công Nghệ Thông Tin</b> và chuyên ngành <b className="yellow">Công Nghệ Phần Mềm</b>, <br/>thế mạnh của mình về
              <b className="yellow"> Front-End</b> và hiện tại mình đang làm việc với <b className="yellow">ReactJS Developer</b>
              <br />
              <br />
              Mình thành thạo
              <b className="yellow"> JavaScript, </b>và là
              <b className="yellow"> ReactJS Developer</b>, Mình thích được giải quyết những thử thách mới và liên tục mở rộng kỹ năng của bản thân,<br/> mình tự tin vào khả năng đóng góp tích cực bằng kỹ năng và kiến ​​thức của mình.
              <br />
              <br />
              <br />
              Mình có kỹ năng tự giải quyết vấn đề rất hiệu quả.
              <i>
                <b className="yellow"> Đặc biệt là kỹ năng tự giải quyết vấn đề được nâng cao hơn khi mình tìm hiểu một công nghệ mới. </b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LIÊN HỆ VỚI TÔI</h1>
            <p>
            Xin đừng ngần ngại liên hệ với mình và{" "}
              <b className="yellow">kết nối nhé!.</b>
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://www.facebook.com/vinhtien.huynh.77/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://zalo.me/0931103224"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiZalo />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/hvtienprotv84"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsTwitterX />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
