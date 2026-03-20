/**
 * 스킬 데이터 (Single Source of Truth)
 *
 * StrengthToggleBox(버튼 목록)와 StrengthContentsBox(카드 목록) 모두 이 파일을 참조합니다.
 * 스킬을 추가/수정/삭제할 때 이 파일만 수정하면 됩니다.
 */
import cafe24Img from '../assets/skill_img/cafe24.png';
import confluenceImg from '../assets/skill_img/confluence.svg';
import cssImg from '../assets/skill_img/css.png';
import figmaImg from '../assets/skill_img/figma.png';
import gitImg from '../assets/skill_img/git.png';
import githubImg from '../assets/skill_img/github.png';
import gsapImg from '../assets/skill_img/gsap.png';
import htmlImg from '../assets/skill_img/html.png';
import illustratorImg from '../assets/skill_img/illustrator.png';
import javascriptImg from '../assets/skill_img/javascript.png';
import nextImg from '../assets/skill_img/next.png';
import notionImg from '../assets/skill_img/notion_icon.svg';
import photoshopImg from '../assets/skill_img/photoshop.png';
import reactImg from '../assets/skill_img/react.png';
import sourcetreeImg from '../assets/skill_img/sourcetree.png';
import typescriptImg from '../assets/skill_img/typescript.png';

export interface SkillItem {
  name: string;
  description: string;
  img: string;
}

export const skillList: SkillItem[] = [
  {
    name: 'HTML',
    description:
      '시맨틱 마크업과 웹 표준·접근성을 준수한 HTML 구조를 설계합니다. 다양한 디바이스와 브라우저 환경을 고려한 크로스 브라우징 대응이 가능하며, 견고한 마크업을 빠르게 작성합니다.',
    img: htmlImg,
  },
  {
    name: 'CSS',
    description:
      'Flexbox, Grid를 활용한 복잡한 레이아웃과 반응형 디자인을 구현합니다. 디자인 시안을 픽셀 단위로 정확하게 재현하며, 미디어 쿼리를 활용한 모바일·태블릿·데스크톱 대응에 강점이 있습니다.',
    img: cssImg,
  },
  {
    name: 'Javascript',
    description:
      'DOM 제어와 이벤트 처리를 기반으로 슬라이드, 탭 메뉴, 스크롤 인터랙션 등 실무 수준의 동적 UI 기능을 구현합니다.',
    img: javascriptImg,
  },
  {
    name: 'TypeScript',
    description:
      '타입 정의를 활용해 안정적인 코드를 작성하며, 기본적인 TypeScript 문법을 이해하고 프로젝트에 적용한 경험이 있습니다.',
    img: typescriptImg,
  },
  {
    name: 'React',
    description:
      '컴포넌트 기반 UI 구조를 이해하고 있으며, 개인 프로젝트에서 React를 활용한 퍼블리싱 경험이 있습니다.',
    img: reactImg,
  },
  {
    name: 'Next.js',
    description:
      'Next.js의 기본적인 페이지 라우팅과 프로젝트 구조를 이해하고 있으며, 꾸준히 학습을 이어가고 있습니다.',
    img: nextImg,
  },
  {
    name: 'Gsap.js',
    description:
      'ScrollTrigger와 Timeline을 활용해 스크롤 기반 애니메이션과 시퀀스 인터랙션을 구현합니다. 다수의 실무·개인 프로젝트에 적용한 경험이 있습니다.',
    img: gsapImg,
  },
  {
    name: 'Git',
    description:
      '브랜치 전략과 커밋 컨벤션을 기반으로 체계적인 버전 관리를 수행합니다. 충돌 해결, 리베이스 등 실무에서 발생하는 다양한 상황에 대응할 수 있습니다.',
    img: gitImg,
  },
  {
    name: 'GitHub',
    description:
      'Pull Request 기반 코드 리뷰와 GitHub Pages 배포, Issue 관리 등 GitHub을 활용한 협업 워크플로우에 익숙합니다.',
    img: githubImg,
  },
  {
    name: 'SourceTree',
    description:
      'SourceTree를 활용한 Git GUI 환경에서 직관적인 버전 관리와 브랜치 작업이 가능합니다.',
    img: sourcetreeImg,
  },
  {
    name: 'Notion',
    description:
      '프로젝트 일정 관리, 회의록 작성, 작업 현황 공유 등 팀 단위 협업 도구로 Notion을 활용한 경험이 있습니다.',
    img: notionImg,
  },
  {
    name: 'Confluence',
    description:
      'Confluence를 활용한 팀 문서 작성 및 프로젝트 협업이 가능합니다. 실무 환경에서 팀원들과 문서를 공유하고 관리한 경험이 있습니다.',
    img: confluenceImg,
  },
  {
    name: 'Figma',
    description:
      '화면 설계와 UI 디자인 작업이 가능하며, 디자이너와 Figma를 통해 시안을 직접 확인하고 에셋을 추출하는 협업 워크플로우에 익숙합니다.',
    img: figmaImg,
  },
  {
    name: 'Photoshop',
    description:
      '사진 보정, 합성, 상세페이지, SNS디자인 등 다양한 실무 디자인을 창의적으로 제작할 수 있습니다.',
    img: photoshopImg,
  },
  {
    name: 'Illustrator',
    description:
      '로고, 아이콘, UI 요소 등 벡터 기반 디자인 에셋을 제작할 수 있으며, SVG 최적화를 통해 웹에 적합한 리소스를 직접 만들 수 있습니다.',
    img: illustratorImg,
  },
  {
    name: 'Cafe24',
    description:
      'Cafe24 플랫폼에서 쇼핑몰 템플릿을 HTML·CSS·JavaScript로 전면 커스텀하고, 배포 및 도메인 설정까지 독립적으로 수행한 경험이 있습니다.',
    img: cafe24Img,
  },
];

export const skillNames = skillList.map(skill => skill.name);
