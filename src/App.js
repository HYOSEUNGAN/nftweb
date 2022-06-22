import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Post from "./page/Post";
import Navbar from "./component/Navbar";
// 부트트랩 npm install react-bootstrap bootstrap설치후 import => layout 사용예정
// layout은 한줄에 몇개 들어가는지를 말함

//1. 페이지 라우팅 => 홈페이지, 로그인페이지, nft페이지
//2. 로그인버튼누르면 로그인파에지가 나온다
//3. 상단바
function App() {
  return (
    <div>
      <Navbar />
      {/* 네비게이션바 = > 컴포넌트 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<Post />} />
        {/* 3개 페이지형성  id만 Restful Route(REST API) 규칙을 따름*/}
      </Routes>
    </div>
  );
}

export default App;
