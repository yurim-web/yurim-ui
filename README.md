# 🗂️ yurim — 웹 퍼블리셔 포트폴리오 웹사이트

웹 디자이너 & 퍼블리셔 이유림의 포트폴리오 사이트입니다.
실무 프로젝트·학습 프로젝트·디자인 작업물을 한눈에 확인할 수 있습니다.

![Status](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue?logo=typescript) ![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green?logo=greensock)

🔗 **배포 URL** : https://yurim-web.github.io/yurim-ui

---

## 📋 목차

- [기술 스택](#기술-스택)
- [주요 기능](#주요-기능)
- [섹션 구성](#섹션-구성)
- [폴더 구조](#폴더-구조)
- [로컬 실행 방법](#로컬-실행-방법)
- [반응형 브레이크포인트](#반응형-브레이크포인트)
- [브랜치 전략](#브랜치-전략)

---

## 🛠️ 기술 스택

| 분류 | 사용 기술 |
|---|---|
| 프레임워크 | React 18 + TypeScript |
| 애니메이션 | GSAP, ScrollTrigger |
| 스타일링 | CSS (컴포넌트 단위 분리) |
| 버전 관리 | Git / GitHub |
| 배포 | gh-pages |
| 개발 도구 | husky, lint-staged, ESLint |

---

## ✨ 주요 기능

- **라이트 / 다크 모드** 전환 (localStorage에 상태 저장)
- **GSAP ScrollTrigger** 기반 스크롤 애니메이션
- **스킬 탭 UI** — 탭 클릭 시 해당 카드 강조 + 3D 효과
- **프로젝트 상세 모달** — 기간, 기술 스택, 설명, 링크 제공
- **우측 고정 네비게이션** — 스크롤 위치 자동 감지 후 현재 섹션 표시
- **완전 반응형** — 모바일~데스크톱 4단계 브레이크포인트

---

## 📐 섹션 구성

### 🏠 Main
- 메인 히어로 타이틀 + 소개 텍스트
- 배경 블러 오브젝트 float 애니메이션

### 👋 About
- 자기소개 텍스트 (웹 퍼블리셔 포지션)
- 이력 타임라인 (경력 · 교육 · 자격증)

### 🎯 Strength
- 16개 스킬 탭 버튼
- 탭 클릭 시 해당 스킬 카드 강조 + 3D 애니메이션
- 스킬 이미지 + 설명 텍스트 구성

### 💼 Professional Projects
- 실무 프로젝트 3개 (Herzion Shop, ReportingX., 스웨디시 뉴트라)
- 기간, 역할, 기술 스택, 설명, 링크 제공

### 📂 Learning Projects
- 개인 학습 프로젝트 4개 (Groundplace, IMELE, SAINT LAURENT, Waveyy)
- 카드 클릭 시 상세 모달

### 🎨 UI/UX Design
- 웹·앱 디자인 작업물 갤러리 (9개)
- 그리드 레이아웃

### 📞 Contact
- 이메일 연락처 및 SNS 링크

---

## 📁 폴더 구조

```
src/
├── App.tsx
├── index.tsx
├── assets/
│   ├── design_img/        # UI/UX 디자인 갤러리 이미지
│   ├── professional_img/  # 실무 프로젝트 배너 이미지
│   └── skill_img/         # 스킬 아이콘 이미지
├── common/
│   ├── box/               # 스킬 카드 컴포넌트
│   ├── button/            # 테마·이력서 토글 버튼
│   └── GitHubLink.tsx     # 공용 GitHub 링크 컴포넌트
├── contexts/
│   ├── ThemeContext.tsx    # 라이트·다크 모드 전역 상태
│   └── SectionContext.tsx  # 섹션 추적 전역 상태
├── data/
│   ├── portfolioData.ts   # 프로젝트 데이터
│   ├── skillsData.ts      # 스킬 데이터 (Single Source of Truth)
│   └── webDesignData.ts   # 웹 디자인 데이터
├── hooks/
│   ├── useHeaderScroll.ts  # 헤더 스크롤 훅
│   └── useScrollAnimation.ts # About 섹션 애니메이션 훅
├── sections/              # 섹션별 컴포넌트
├── styles/                # 섹션별 CSS
└── types/                 # TypeScript 타입 선언
```

---

## 💻 로컬 실행 방법

```bash
# 저장소 클론
git clone https://github.com/yurim-web/yurim-ui.git
cd yurim-ui

# 패키지 설치
npm install

# 개발 서버 실행
npm start
# → http://localhost:3000

# 빌드
npm run build

# 배포 (gh-pages)
npm run deploy
```

---

## 📱 반응형 브레이크포인트

| 브레이크포인트 | 대상 기기 | 주요 변경 사항 |
|---|---|---|
| 1024px 이하 | 태블릿 | 폰트 축소, 스킬 카드 1열 전환 |
| 768px 이하 | 모바일 | 레이아웃 세로 전환, 패딩 축소 |
| 480px 이하 | 소형 모바일 | 폰트 추가 축소, 텍스트 중앙 정렬 |
| 360px 이하 | 초소형 기기 | 최소 폰트 적용 (32px 제목) |

---

## 🌿 브랜치 전략

- `main` : 배포용 브랜치
- `feature/*` : 기능 단위 개발 브랜치
- 커밋 컨벤션 : `[기능]` / `[콘텐츠]` / `[설정]` / `[리팩토링]` prefix 사용

---

## 📄 라이선스

개인 포트폴리오 사이트로, 무단 복제 및 상업적 사용을 금지합니다.

---

© 2026 yurim. All rights reserved.
