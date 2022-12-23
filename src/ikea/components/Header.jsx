import "../css/ikea.css";
import { Outlet } from "react-router-dom";
import { ReactComponent as Bag } from "../../svg/Bag.svg";
import { ReactComponent as Car } from "../../svg/Car.svg";
import { ReactComponent as Phone } from "../../svg/Phone.svg";
import { ReactComponent as Hamburger } from "../../svg/Hamburger.svg";
import { ReactComponent as Logo } from "../../svg/Logo.svg";
import { ReactComponent as Search } from "../../svg/Search.svg";
import { ReactComponent as Camera } from "../../svg/Camera.svg";
import { ReactComponent as User } from "../../svg/User.svg";
import { ReactComponent as Heart } from "../../svg/Heart.svg";
import { ReactComponent as Store } from "../../svg/Store.svg";

const Header = () => {
  const menu = ["모든 제품", "온라인 쇼룸", "크리스마스 마켓", "홈 액세서리", "서비스"];
  return (
    <>
      <header>
        <p>
          <span>
            <Bag fill="white" />
          </span>
          IKEA 인기제품
        </p>
        <p>
          <span>
            <Car fill="white" />
          </span>
          새로운 배송 요금
        </p>
        <p>
          <span>
            <Phone fill="white" />
          </span>
          원격 주문, 헤이오더
        </p>
      </header>
      <nav>
        <div>
          <p className="hamburger">
            <span>
              <Hamburger />
            </span>
            메뉴
          </p>

          <div className="navContent">
            <h2>
              <Logo />
            </h2>
            <div className="navSearch">
              <Search className="search" />
              <input placeholder="검색어 입력" className="input" />
              <Camera className="camera" />
            </div>

            <ul className="navIcons">
              <li className="user">
                <User /> Hej! 로그인 또는 가입하기
              </li>
              <li>
                <Heart />
              </li>
              <li>
                <Bag />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="mainNavContainer">
        <div className="mainNavWrapper">
          <div className="mainNav">
            <ul className="menu">
              {menu.map((list) => (
                <li ket={list}>{list}</li>
              ))}
            </ul>

            <ul className="menu location">
              <li>
                <span>
                  <Car />
                </span>
                우편 번호 입력
              </li>
              <li>
                <span>
                  <Store />
                </span>
                매장 선택
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Header;
