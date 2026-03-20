import '../styles/main_section.css';

const Main = () => {
  return (
    <main className="main">
      <section id="main" className="main_section">
        <div className="blur blur_1" />
        <div className="blur blur_2" />
        <div className="blur blur_3" />
        <div className="blur blur_4" />
        <div className="main_container">
          <h1 className="main_title">
            YURIM'S
            <br />
            PORTFOLIO
          </h1>
          <p className="main_description">
            디자인의 의도를 정확히 읽고, 픽셀 단위로 구현하는 웹 퍼블리셔 이유림입니다.
            <br />웹 표준과 접근성을 지키며 깔끔하고 견고한 마크업을 작성합니다.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
