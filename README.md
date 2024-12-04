# 💰 Pocket Money - TypeScript 용돈 기입장

**Pocket Money**는 사용자가 수입과 지출을 날짜별로 기록하고, 연도별 차트를 통해 자산을 관리할 수 있는 자산 관리 앱입니다. 회원 관리, 차트 시각화, 다크/라이트 모드 등 다양한 기능을 제공합니다.

## 프로젝트 기간
- **기간**: 2024.07 ~ 2024.08

## 사용 기술
- **React**
- **Redux-Thunk**
- **TypeScript**
- **Supabase**
- **Vercel**
- **Styled-components**
- **Chart.js**
- **Sweetalert2**

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



![가계부영상배속](https://github.com/user-attachments/assets/61325dad-3337-4a0b-a380-38349fa35a18) 


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
[사이트 바로가기](https://pocket-money-4e1cwra36-esjays-projects.vercel.app/)





