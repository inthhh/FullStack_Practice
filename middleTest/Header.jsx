import React, { useState, useEffect } from "react";
import "./MiddleStyle.css";

export const Header = () => {
  const [hovered, setHovered] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 30px",
        height: "100px",
        alignItems: "center",
        backgroundColor: "white",
        boxShadow: "1px 1px 4px #c0c0c0",
      }}
    >
      <h1 style={{ color: "#0077ff", fontWeight: "900" }}>TechStore</h1>
      <div className="pc-only">
        <p
          style={{ width: "70px", padding: "20px 0", fontSize: "18px" }}
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(0)}
        >
          제품
        </p>
        {hovered === 1 && (
          <ul style={{ left: "0" }} onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(0)}>
            <li>전자기기</li>
            <li>의류</li>
            <li>도서</li>
            <li>액세서리</li>
          </ul>
        )}
        <p
          style={{ width: "70px", padding: "20px 0", fontSize: "18px" }}
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(0)}
        >
          서비스
        </p>
        {hovered === 2 && (
          <ul style={{ left: "33%" }} onMouseEnter={() => setHovered(2)} onMouseLeave={() => setHovered(0)}>
            <li>컨설팅</li>
            <li>교육</li>
            <li>고객지원</li>
            <li>유지보수</li>
          </ul>
        )}
        <p
          style={{ width: "70px", padding: "20px 0", fontSize: "18px" }}
          onMouseEnter={() => setHovered(3)}
          onMouseLeave={() => setHovered(0)}
        >
          회사소개
        </p>
        {hovered === 3 && (
          <ul style={{ left: "70%" }} onMouseEnter={() => setHovered(3)} onMouseLeave={() => setHovered(0)}>
            <li>회사정보</li>
            <li>팀 소개</li>
            <li>채용정보</li>
            <li>연락처</li>
          </ul>
        )}
      </div>
    </div>
  );
};
