import React, {Component} from 'react';

//해당 소스코드에서 'extends Component'를 입력하지 않으면
//Component에서 해당 import파일을 사용할 수 없음
//해당 파일을 컴포넌트형태로 찾을 수 없는 것처럼 보임
class Footer extends Component{
    // class Footer {
    render(){
        return(<div>Footer</div>)
    }
}

//index.jsx에서 사용되어지도록 하는 함수
//index.jsx에서 import로 해당 파일을 요청했을때
//사용허가여부를 입력하는 코드
export default Footer;