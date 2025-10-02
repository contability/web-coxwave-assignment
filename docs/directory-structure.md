# DIRECTORY-STRUCTURE

---

# 디렉토리 구조

```
./
├── docs/                           # 프로젝트 문서
├── src/
│   ├── app/                        # Next.js App Router 구조
│   │   └── [route]/
│   │         └── _components/       # 페이지별 전용 컴포넌트 (Private Folder)
│   ├── components/                 # 전역 재사용 UI 컴포넌트
│   ├── lib/                        # 라이브러리 및 유틸리티
│   ├── styles/                     # 전역 스타일
│   └── types/                      # TypeScript 타입 정의
├── eslint.config.mjs              # ESLint 설정
├── next-env.d.ts                  # Next.js 타입 정의
├── next.config.ts                 # Next.js 설정
├── package.json                   # 프로젝트 메타데이터 및 의존성
├── postcss.config.mjs             # PostCSS 설정
├── tsconfig.json                  # TypeScript 설정
├── yarn.lock                      # Yarn 잠금 파일
└── README.md                      # 프로젝트 개요
```

# 디렉토리 구조 설명

### ▶️ 📂 **docs**

프로젝트 문서와 가이드를 담은 디렉토리. 개발 컨벤션, 실행 방법, 디렉토리 구조 등의 문서가 포함되어 있다.

### ▶️ 📂 **src**

프로젝트의 주요 소스 코드를 담은 디렉토리.

#### 🔹 📂 **app**

Next.js 15의 App Router 구조를 따르는 디렉토리. 페이지 라우팅과 API 라우트를 관리한다.

**Private Folders**: 특정 페이지나 라우트에만 사용되는 컴포넌트나 상수는 해당 라우트 폴더 내에 `_components/`, `_constants/` 등의 프라이빗 폴더로 관리할 수 있다. 언더스코어(`_`)로 시작하는 폴더는 라우팅에서 제외되며, 해당 라우트에서만 사용되는 코드를 콜로케이션할 수 있다. ([참고: Next.js Private Folders](https://nextjs.org/docs/app/getting-started/project-structure#private-folders))

#### 🔹 📂 **components**

전역에서 재사용되는 UI 컴포넌트들을 기능별로 분류하여 관리하는 디렉토리.

#### 🔹 📂 **lib**

라이브러리 함수들과 서비스 로직을 담은 디렉토리.

#### 🔹 📂 **styles**

전역 스타일 파일들을 담은 디렉토리.

#### 🔹 📂 **types**

TypeScript 타입 정의 파일들을 담은 디렉토리.

## 📁 **설정 파일들**

- `next.config.ts`: Next.js 프레임워크 설정
- `tsconfig.json`: TypeScript 컴파일러 설정
- `eslint.config.mjs`: 코드 품질 검사 도구 설정
- `postcss.config.mjs`: CSS 후처리기 설정
- `package.json`: 프로젝트 메타데이터 및 의존성 관리
