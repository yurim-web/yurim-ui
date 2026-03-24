import React from 'react';
import { Link } from 'react-router-dom';

import ThemeToggle from '../common/button/ThemeToggle';
import { ThemeProvider } from '../contexts/ThemeContext';
import '../styles/resume.css';

const ResumeContent = () => {
  return (
    <div className="resume_page">
      <header className="resume_header">
        <nav className="resume_nav">
          <Link to="/" className="resume_back_link">
            ← Portfolio
          </Link>
          <span className="resume_nav_title">RESUME</span>
        </nav>
      </header>

      <main className="resume_main">
        <article className="resume_article">
          {/* 타이틀 */}
          <section className="resume_title_section">
            <h1 className="resume_name">이유림</h1>
            <p className="resume_position">Web Publisher</p>
          </section>

          {/* Contact */}
          <section className="resume_section">
            <h2 className="resume_section_title">Contact</h2>
            <ul className="resume_contact_list">
              <li>
                <span className="resume_contact_label">Email</span>
                <a href="mailto:lyl5152@naver.com" className="resume_contact_value">
                  lyl5152@naver.com
                </a>
              </li>
              <li>
                <span className="resume_contact_label">Phone</span>
                <span className="resume_contact_value">010-4054-5152</span>
              </li>
              <li>
                <span className="resume_contact_label">GitHub</span>
                <a
                  href="https://github.com/yurim-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume_contact_value"
                >
                  github.com/yurim-web
                </a>
              </li>
              <li>
                <span className="resume_contact_label">Portfolio</span>
                <a
                  href="https://yurim-web.github.io/yurim-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume_contact_value"
                >
                  yurim-web.github.io/yurim-ui
                </a>
              </li>
            </ul>
          </section>

          {/* About Me */}
          <section className="resume_section">
            <h2 className="resume_section_title">About Me</h2>
            <div className="resume_about_text">
              <p>디자인부터 퍼블리싱까지 직접 경험한 실무형 웹 퍼블리셔입니다.</p>
              <p>
                첫 번째 회사에서 웹/앱 UI 디자인을 단독 수행하며 시각적 감각과 퍼블리싱 기반을
                다졌고, 현재 회사에서는 e커머스 쇼핑몰과 상용 웹서비스의 퍼블리싱 및 프론트엔드
                개발을 전담하고 있습니다.
              </p>
              <p>
                디자인을 이해하는 만큼, 시안의 의도를 정확히 구현하고 디자이너와 개발자 사이의 소통
                비용을 줄이는 역할을 할 수 있습니다.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className="resume_section">
            <h2 className="resume_section_title">Skills</h2>
            <div className="resume_skills_grid">
              <div className="resume_skill_category">
                <h3 className="resume_skill_category_title">Publishing &amp; Markup</h3>
                <ul className="resume_skill_list">
                  <li>HTML5 / CSS3 (Semantic Markup · Web Accessibility · Web Standards)</li>
                  <li>CSS Grid / Flexbox / Responsive · Adaptive Layout</li>
                  <li>SCSS (Sass)</li>
                  <li>JavaScript (DOM 제어 / 이벤트 처리 / 인터랙션)</li>
                  <li>GSAP (ScrollTrigger · Timeline)</li>
                  <li>카페24 Frontend 템플릿 커스터마이징</li>
                </ul>
              </div>
              <div className="resume_skill_category">
                <h3 className="resume_skill_category_title">Framework</h3>
                <ul className="resume_skill_list">
                  <li>React / TypeScript</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div className="resume_skill_category">
                <h3 className="resume_skill_category_title">UI/UX &amp; Design</h3>
                <ul className="resume_skill_list">
                  <li>UI/UX Design (웹/앱 화면 설계 및 제작)</li>
                  <li>Figma</li>
                  <li>Photoshop / Illustrator</li>
                </ul>
              </div>
              <div className="resume_skill_category">
                <h3 className="resume_skill_category_title">Tools</h3>
                <ul className="resume_skill_list">
                  <li>Git / GitHub / SourceTree</li>
                  <li>VSCode / Cursor</li>
                  <li>Notion / Confluence / Box</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 경력 1: 청명종합광고 */}
          <section className="resume_section">
            <h2 className="resume_section_title">Work Experience</h2>

            <div className="resume_experience">
              <div className="resume_experience_header">
                <div className="resume_experience_info">
                  <h3 className="resume_company_name">(주)청명종합광고기획</h3>
                  <span className="resume_role">웹 퍼블리셔</span>
                </div>
                <span className="resume_period">2025.04 ~ 재직 중</span>
              </div>
              <p className="resume_experience_summary">
                e커머스 쇼핑몰 및 상용 웹서비스 퍼블리싱 · 프론트엔드 개발 · 유지보수
              </p>

              {/* 프로젝트 1 */}
              <div className="resume_project">
                <div className="resume_project_header">
                  <h4 className="resume_project_name">ReportingX. – 마케터용 데이터 리포팅 SaaS</h4>
                  <span className="resume_contribution">퍼블리싱 · 프론트엔드 100%</span>
                </div>
                <div className="resume_project_links">
                  <a href="https://markx.dev/intro" target="_blank" rel="noopener noreferrer">
                    랜딩
                  </a>
                  <a
                    href="https://markx.dev/guide_main?content=open-application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    가이드
                  </a>
                  <a href="https://www.mxrx.dev/" target="_blank" rel="noopener noreferrer">
                    본 서비스
                  </a>
                </div>
                <div className="resume_project_detail">
                  <h5 className="resume_detail_title">담당 업무</h5>
                  <ul className="resume_detail_list">
                    <li>HTML/CSS/JavaScript 기반 랜딩페이지 및 가이드 페이지 전체 퍼블리싱</li>
                    <li>반응형 레이아웃 및 스크롤/모션 인터랙션 구현</li>
                    <li>웹 표준·접근성을 고려한 시맨틱 마크업 적용</li>
                    <li>페이지 구조 설계 및 UI/UX 개선</li>
                    <li>Git 기반 협업 (GitHub Flow) 및 서버 배포 참여</li>
                    <li>지속적인 서비스 유지보수 및 코드 리팩토링</li>
                  </ul>
                </div>
                <div className="resume_project_detail">
                  <h5 className="resume_detail_title">주요 성과</h5>
                  <ul className="resume_detail_list">
                    <li>랜딩·가이드 페이지를 단독 퍼블리싱하여 서비스 런칭에 기여</li>
                    <li>반응형 대응으로 모바일~데스크톱 전 디바이스 최적화</li>
                    <li>코드 구조화 및 리팩토링으로 유지보수 효율 향상</li>
                  </ul>
                </div>
              </div>

              {/* 프로젝트 2 */}
              <div className="resume_project">
                <div className="resume_project_header">
                  <h4 className="resume_project_name">Herzion Shop – 광고주 자사몰 (e커머스)</h4>
                  <span className="resume_contribution">디자인 + 퍼블리싱 100%</span>
                </div>
                <div className="resume_project_links">
                  <a
                    href="https://herzionshop.cafe24.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                  <a
                    href="https://github.com/yurim-web/aribio_final_kor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                <div className="resume_project_detail">
                  <h5 className="resume_detail_title">담당 업무</h5>
                  <ul className="resume_detail_list">
                    <li>카페24 기반 프론트 전체 커스터마이징 (템플릿 미사용, 자체 제작)</li>
                    <li>메인/상세 페이지 HTML/CSS/JS 퍼블리싱</li>
                    <li>브랜드 아이덴티티에 맞는 UI 스타일 설계 및 제작</li>
                    <li>반응형 화면 구성 및 EmailJS 연동 문의 폼 구현</li>
                  </ul>
                </div>
              </div>

              {/* 프로젝트 3 */}
              <div className="resume_project">
                <div className="resume_project_header">
                  <h4 className="resume_project_name">Swedish Nutra – 광고주 자사몰 (e커머스)</h4>
                  <span className="resume_contribution">퍼블리싱 100%</span>
                </div>
                <div className="resume_project_links">
                  <a href="https://swedishnutra.kr/" target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                  <a
                    href="https://github.com/yurim-web/swedishnutra_code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                <div className="resume_project_detail">
                  <h5 className="resume_detail_title">담당 업무</h5>
                  <ul className="resume_detail_list">
                    <li>카페24 스킨 전체 커스터마이징</li>
                    <li>메인/서브/상세 페이지 UI 디자인 및 퍼블리싱</li>
                    <li>CSS 기반 인터랙션 구현 및 사용자 중심 레이아웃 설계</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 경력 2: 쇼엠 */}
            <div className="resume_experience">
              <div className="resume_experience_header">
                <div className="resume_experience_info">
                  <h3 className="resume_company_name">(주)쇼엠</h3>
                  <span className="resume_role">웹디자이너</span>
                </div>
                <span className="resume_period">2024.01 ~ 2024.08</span>
              </div>
              <p className="resume_experience_summary">
                웹/앱 UI 디자인 전담 · 간단한 퍼블리싱 업무 병행
              </p>

              <div className="resume_project">
                <div className="resume_project_header">
                  <h4 className="resume_project_name">에드모아 기업 웹사이트</h4>
                  <span className="resume_contribution">웹디자인 100%</span>
                </div>
                <div className="resume_project_detail">
                  <ul className="resume_detail_list">
                    <li>메인/서브 페이지 UI 전체 디자인</li>
                    <li>반응형 웹 레이아웃 설계 및 HTML/CSS 퍼블리싱</li>
                  </ul>
                </div>
              </div>

              <div className="resume_project">
                <div className="resume_project_header">
                  <h4 className="resume_project_name">뷰티정보 웹사이트</h4>
                  <span className="resume_contribution">웹디자인 100%</span>
                </div>
                <div className="resume_project_detail">
                  <ul className="resume_detail_list">
                    <li>콘텐츠 중심 웹사이트 UI/UX 설계</li>
                    <li>반응형 UI 구조 및 비주얼 스타일 설계</li>
                  </ul>
                </div>
              </div>

              <div className="resume_project">
                <div className="resume_project_header">
                  <h4 className="resume_project_name">퍼스널컬러 테스트 앱</h4>
                  <span className="resume_contribution">앱 디자인 100%</span>
                </div>
                <div className="resume_project_detail">
                  <ul className="resume_detail_list">
                    <li>모바일 앱 UI 전체 설계 및 디자인</li>
                    <li>컬러 UI 컴포넌트 제작 및 CSS 스타일 적용</li>
                  </ul>
                </div>
              </div>

              <div className="resume_project">
                <div className="resume_project_header">
                  <h4 className="resume_project_name">전기요금 계산기 앱</h4>
                  <span className="resume_contribution">앱 디자인 100%</span>
                </div>
                <div className="resume_project_detail">
                  <ul className="resume_detail_list">
                    <li>앱 전체 UX 플로우 설계 및 UI 디자인</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 경력 3: 오라코퍼레이션 */}
            <div className="resume_experience">
              <div className="resume_experience_header">
                <div className="resume_experience_info">
                  <h3 className="resume_company_name">(주)오라코퍼레이션</h3>
                  <span className="resume_role">콘텐츠 디자이너</span>
                </div>
                <span className="resume_period">2022.03 ~ 2023.06</span>
              </div>
              <p className="resume_experience_summary">SNS 콘텐츠 기획 · 브랜드 디자인 제작</p>
              <div className="resume_project">
                <div className="resume_project_detail">
                  <ul className="resume_detail_list">
                    <li>인스타그램/블로그 채널 콘텐츠 기획 및 원고 작성</li>
                    <li>브랜드 톤앤매너 기반 썸네일·카드뉴스·광고 이미지 제작</li>
                    <li>릴스/쇼츠 숏폼 영상 편집</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 핵심 성과 */}
          <section className="resume_section">
            <h2 className="resume_section_title">Key Achievements</h2>
            <ul className="resume_achievements">
              <li>상용 SaaS 서비스(ReportingX.) 퍼블리싱을 단독으로 수행하여 서비스 런칭에 기여</li>
              <li>카페24 쇼핑몰 2건 제작 → 디자인·퍼블리싱·배포 전 과정 수행</li>
              <li>웹 표준·접근성을 준수한 시맨틱 마크업과 반응형 레이아웃 구현</li>
              <li>디자인 → 퍼블리싱 → 프론트엔드 개발까지 확장된 UI 구현 역량</li>
              <li>Git 협업 및 서버 배포 경험으로 운영·배포 프로세스 이해</li>
            </ul>
          </section>

          {/* Education */}
          <section className="resume_section">
            <h2 className="resume_section_title">Education &amp; License</h2>
            <ul className="resume_education_list">
              <li>
                <span className="resume_edu_period">2024.10 ~ 2024.12</span>
                <span className="resume_edu_content">
                  웹(퍼블리셔) 프론트엔드 (Js, React) 양성과정 350시간 수료
                </span>
              </li>
              <li>
                <span className="resume_edu_period">2019.03 ~ 2022.08</span>
                <span className="resume_edu_content">(인천캠)청운대학교 멀티미디어학과 졸업</span>
              </li>
              <li>
                <span className="resume_edu_period">2023.09</span>
                <span className="resume_edu_content">컴퓨터그래픽스운용기능사 자격증 취득</span>
              </li>
              <li>
                <span className="resume_edu_period">2020.09</span>
                <span className="resume_edu_content">GTQ 포토샵 1급 취득</span>
              </li>
            </ul>
          </section>

          {/* 포트폴리오 링크 */}
          <footer className="resume_footer">
            <a
              href="https://yurim-web.github.io/yurim-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="resume_portfolio_link"
            >
              포트폴리오 전체 보기 →
            </a>
          </footer>
        </article>
      </main>
    </div>
  );
};

const Resume = () => {
  return (
    <ThemeProvider>
      <ResumeContent />
      <ThemeToggle />
    </ThemeProvider>
  );
};

export default Resume;
