import React from "react";
import "./MiddleStyle.css";

const ItemBox = (p) => {
  return (
    <div className="item-box">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontWeight: "bold", fontSize: "24px" }}>{p.title}</p>
        <p style={{ color: "#0077ff", fontWeight: "bold", fontSize: "20px" }}>{p.price.toLocaleString()}원</p>
      </div>
      <div style={{ color: "gray" }}>{p.text}</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p
          style={{
            color: "#104889",
            fontSize: "14px",
            backgroundColor: "#e7eef5",
            padding: "4px 10px",
            borderRadius: "20px",
          }}
        >
          {p.type}
        </p>
        <button
          style={{
            backgroundColor: "#0077ff",
            fontSize: "14px",
            color: "white",
            padding: "8px 18px",
            boxShadow: "none",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          장바구니 담기
        </button>
      </div>
    </div>
  );
};

export const Contents = () => {
  const itemList = [
    ["프리미엄 노트북", 1599000, "최신 사양의 고성능 노트북", "전자기기"],
    ["무선 헤드폰", 299000, "프리미엄 사운드의 노이즈 캔슬링 헤드폰", "전자기기"],
    ["스마트 워치", 399000, "피트니스 트래킹과 스마트 연결 기능", "액세서리"],
  ];
  return (
    <div
      style={{
        margin: "0 0 0 30px",
      }}
    >
      <h1
        style={{
          margin: "30px 0",
        }}
      >
        추천 제품
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {itemList.map((i) => (
          <ItemBox title={i[0]} price={i[1]} text={i[2]} type={i[3]} />
        ))}
      </div>
    </div>
  );
};
