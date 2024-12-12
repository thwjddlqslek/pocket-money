# 💰 Pocket Money - TypeScript 용돈 기입장

**Pocket Money**는 사용자가 수입과 지출을 날짜별로 기록하고, 연도별 차트를 통해 자산을 관리할 수 있는 자산 관리 앱입니다. 회원 관리, 차트 시각화, 다크/라이트 모드 등 다양한 기능을 제공합니다.

[Pocket Money 구경하기](https://sj-pocket-money.vercel.app/)

## 📁 프로젝트 구조 
```bash
src
├── components                    # UI 컴포넌트
│   ├── BigDateSelector.tsx      # 메인 페이지 달력 선택기 
│   ├── ChartComponent.tsx       # 수입/지출 차트 컴포넌트
│   ├── Footer.tsx              # 푸터 영역
│   ├── Header.tsx              # 네비게이션 헤더
│   ├── IncomeReport.tsx        # 수입 내역 컴포넌트
│   ├── LoginButton.tsx         # 로그인 버튼
│   ├── RegistModal.tsx         # 수입/지출 등록 모달
│   ├── SmallDateSelector.tsx   # 상세 페이지 달력 선택기
│   ├── SpendReport.tsx         # 지출 내역 컴포넌트
│   └── ThemeButton.tsx         # 라이트/다크 모드 버튼
├── context                     # Context API
│   └── ThemeContext.tsx        # 테마 관련 Context
├── fonts                       # 폰트 파일
├── pages                       # 페이지 컴포넌트
│   ├── Home.tsx               # 홈 페이지
│   ├── Main.tsx               # 메인 페이지
│   └── NotFound.tsx           # 404 페이지
├── store                      # 상태 관리
├── styles                     # 스타일 관련 파일
├── App.tsx                    # 앱 루트 컴포넌트
├── index.css                  # 전역 스타일
├── main.tsx                   # 앱 진입점
└── supabaseClient.tsx         # Supabase 설정
```

## 사용 기술
- **React**
- **Redux-Thunk**
- **TypeScript**
- **Supabase**
- **Vercel**
- **Styled-components**
- **Chart.js**
- **Sweetalert2**

![pocket](https://github.com/user-attachments/assets/1b93d4c2-790b-4ec8-a7f8-1d764a365fd9)

## 주요 기능
### 📱 회원 관리
- **간편 회원가입 및 로그인 기능**: 이메일과 비밀번호로 회원가입 및 로그인. (Sweetalert2 예외처리)
- **Supabase 인증 시스템**: Supabase로 실시간 데이터베이스 설정 및 사용자 인증 관리.

### 💸 수입/지출 관리
- **CRUD 기능**: 수입/지출 내역 추가, 수정, 삭제.
- **Supabase Table**: Supabase 테이블로 수입/지출 내역 관리.
- **Redux-Thunk**: 비동기 상태 관리.
- **차트 시각화**: **Chart.js**로 연도별 수입/지출 내역 실시간 시각화.

### 🌗 라이트/다크 모드
- **useContext 사용**: 라이트/다크 모드 전역 상태 관리.
- **localStorage 활용**: 선택한 모드 상태를 브라우저에 저장, 새로고침 후에도 유지.


## 시나리오
1. 로그인 전 9월, 8월 내역 확인
2. 9월 수입 내역 편집 후 차트 확인
3. 9월 지출 내역 삭제 후 차트 확인
4. 2023년 차트 확인
5. 테스트 계정으로 회원가입
6. 2024년 12월 월급 2백만 추가 후 차트 확인
7. 지출 내역 추가: 하이디라오 8만원
8. 로그아웃
9. 라이트모드로 전환 후 새로고침


## 테스트 계정 및 도메인 주소
ID: test@test.com  
PW: 1qaz2w!

별도 회원가입 기능 제공 (이메일 도메인 자유)
[바로 접속하](https://sj-pocket-money.vercel.app/)





