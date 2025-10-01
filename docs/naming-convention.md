<h1 align="center">

Naming Convention

</h1>

> **개발자 코멘트**
>
> - 보통 React, Next 개발자들 사이에는 관행적으로 사용되는 컨벤션이 존재합니다. 예를 들면 React 컴포넌트의 파일명은 파스칼 케이스, 커스텀 훅의 경우 use+파스칼 케이스 등등.<br/> 하지만 리액트 및 넥스트 공식 문서 어디에도 이렇게 규정 짓거나 언급된 부분을 찾지 못하였고 실제로 많은 프로젝트에서 다양한 네이밍 컨벤션을 사용하고 있는 것으로 보입니다.
> - 개인적으로 진행하는 프로젝트에서는 모든 파일명에 kebab-case(케밥 케이스)를 사용하고 있습니다. 이유는 다음과 같습니다:
>   1. **크로스 플랫폼 호환성**: 일부 파일 시스템은 대소문자를 구분하지 않아 PascalCase나 camelCase 사용 시 문제가 발생할 수 있을 것입니다.
>   2. **일관성 유지**: 모든 파일 유형에 동일한 케이싱 규칙을 적용하면 프로젝트 전체의 일관성이 유지될 것입니다.
> - 물론 파일 내부에서 선언하는 컴포넌트명은 여전히 PascalCase를 사용하는 등 각 요소별 표준 컨벤션은 유지합니다. 이는 방어적 프로그래밍 관점에서 대소문자 관련 문제를 원천 차단하는 접근법이라고 생각합니다.
> - <span style="font-weight: bold; color: #e53e3e; border-bottom: 1px solid #e53e3e;">가장 중요한 것은 프로젝트별 또는 팀 내부 규칙을 따라 일관성 있게 네이밍 규칙을 지키는 것입니다.</span> 어떤 컨벤션을 선택하든, 전체 프로젝트에서 일관되게 적용하는 것이 코드 가독성과 유지보수성을 높이는 핵심 요소라고 생각합니다.

### 1. React 컴포넌트

---

- 파일명: **kebab-case** 사용 (예: `user-profile.tsx`, `data-table.tsx`)
- 컴포넌트명: **PascalCase** 사용 (예: `function UserProfile()`, `function DataTable()`)

### 2. 유틸리티, 훅, API

---

- 파일명: **kebab-case** 사용 (예: `use-auth.ts`, `api-client.ts`, `format-date.ts`)
- 함수명: **camelCase** 사용 (예: `useAuth()`, `apiClient()`, `formatDate()`)

### 3. 상수

---

- 파일명: **kebab-case** 사용 (예: `api-constants.js`, `route-constants.js`)
- 상수명: **UPPER_SNAKE_CASE** 사용 (예: `API_URL`, `MAX_ITEMS`)

### 4. 타입/인터페이스 파일

---

- 파일명: **kebab-case** 사용 (예: `user-profile`, `auth-response`)
- 인터페이스명: **PascalCase** 사용 (예: `UserProfile`, `AuthResponse`)

### 5. 기타 규칙

---

- 파일명은 간결하고 명확하게 작성.
- 기능이나 역할을 직관적으로 표현할 수 있는 이름 사용.
- 축약어는 최소화하고, 전체 단어를 사용하는 것을 권장.
