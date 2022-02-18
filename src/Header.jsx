// 리액트의 모듈이 설치된 'react'를 가져와서 쓴다
//{ Component } 비구조화 할당
//React.Component로 보통 사용하지만, 직접 사용하기위해 {}를 붙여줌
//ReactDOM.render() 내부의 <Header />과 같은 형식으로 사용하기 위한 목적으로 보임
import React, { Component } from "react";
import { Navbar, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

//axios
//AXIOS는 NODEJS와 브라우저를 위한 HTTP통신 JAVASCRIPT 라이브러리
//JS에서의 AJAX와 비슷한 기능
//AXIOS 사용 문법도 AJAX 문법과 비슷
import axios from "axios";

//jquery
//JQUERY는 HTML의 클라이언트 사이드 조작을 단순화 하도록 설계된
//크로스 플랫폼의 자바스크립트 라이브러리
import $ from "jquery";
import {} from "jquery.cookie";

// axios를 위한 cors기능설정값
// 서버에서 처리한 cors기능을
// axios기능에서 사용하기 위해 설정하는 값
// 포트를 포함한 도메인 간 통신이 가능하도록 설정하는 방법
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

//해당 소스코드에서 'extends Component'를 입력하지 않으면
//Component에서 해당 import파일을 사용할 수 없음
//해당 파일을 컴포넌트형태로 찾을 수 없는 것처럼 보임
class Header extends Component {
  state = {
    buttonDisplay: "none"
  };

  componentDidMount() {
    if ($.cookie("login_id")) {
      this.setState({
        buttonDisplay: "block"
      });
    } else {
      this.setState({
        buttonDisplay: "none"
      });
    }
  }

  logout = () => {
    axios
      .get("http://localhost:8080/member/logout", {
        headers
      })
      .then(returnData => {
        if (returnData.data.message) {
          $.removeCookie("login_id");
          alert("로그아웃 되었습니다!");
          window.location.href = "/";
        }
      });
  };
  render() {
    const buttonStyle = {
      margin: "0px 5px 0px 10px",
      display: this.state.buttonDisplay
    };

    return (
      <div>
        헤더
        <Navbar>
          <Navbar.Brand href="/">Today I Learned</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavLink to="/mypage">
              <Button style={buttonStyle} variant="primary">
                회원정보 수정
              </Button>
            </NavLink>
            <NavLink to="/">
              <Button style={buttonStyle} variant="primary">
                글목록
              </Button>
            </NavLink>
            <NavLink to="/boardWrite">
              <Button style={buttonStyle} variant="primary">
                글쓰기
              </Button>
            </NavLink>
            <Button style={buttonStyle} onClick={this.logout} variant="primary">
              로그아웃
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <Image src="./img/main.png" fluid />
      </div>
    );
  }
}
//index.jsx에서 사용되어지도록 하는 함수
//index.jsx에서 import로 해당 파일을 요청했을때
//사용허가여부를 입력하는 코드
export default Header;
