import { useState } from "react";
import "../App.css";

const List = () => {
  const [popup, setPopup] = useState(true);
  const menu = ["신상품", "베스트", "알뜰쇼핑", "특가/혜택"];

  return (
    <>
      {popup && (
        <div className="topContents">
          <div className="topText">
            <p>
              지금 가입하고 인기상품 <b>100원</b>에 받아가세요!
            </p>
            <button
              onClick={() => {
                setPopup(false);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
      <div className="kurlyStyle">
        <p>🍔 카테고리</p>
        <div className="centerMenu">
          {menu.map((list) => (
            <p key={list}>{list}</p>
          ))}
        </div>
        <p className="infoText">
          <span className="point">샛별 · 낮</span> 배송안내
        </p>
      </div>
    </>
  );
};

export default List;
