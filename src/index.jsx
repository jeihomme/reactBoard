// 리액트의 모듈이 설치된 'react'를 가져와서 쓴다
import React from "react";
import ReactDOM from "react-dom";

//react-router-dom
//클라이언트 사이드에서 이뤄지는 라우팅을 간단하게 해주는 라이브러리
//REACT 소스코드를 편리하게 사용할수있도록 돕는 라이브러리
import {HashRouter} from 'react-router-dom';

//react-bootsrap
//웹사이트를 쉽게 만들 수 있게 도와주는 HTML, CSS, JS 프레임워크
//보다 가독성이 좋은 화면구성을 꾸며주는 기능
//REACT만의 소스코드를 사용
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

// 아래의 3구분으로 나눈 뒤,
//해당 js,jsx파일에서 컴포넌트호출을 한뒤
// 그 안에서 실질적인 렌더링에 필요한 소스코드를 작성할 것
//일반적으로 DIV로 해당 태그들을 싸놓긴하지만, 이 플젝은 그렇게 안함
ReactDOM.render(
  <HashRouter>
    <Header/>
    <Body/>
    <Footer/>
  </HashRouter>, 
  //index.html에서 만든 id값인 container 태그에 반영하겠다는 소스코드
  document.querySelector("#container")
);
