# Booking Event
샐랩이라는 샐러드 판매 회사의 가상 홈페이지 애플리케이션

## 기능
- 샐랩 소개
- 샐랩 메뉴 조회
- 게시판 글 확인 및 댓글 작성
- 샐랩 주문 조회

## 사용 기술
- Front-End : React
- Back-End : Firebase
- Database : Firebase
- Deployed : Firebase

## Start producton mode
1. 레포지토리의 소스코드 pull
2. npm i
3. .env에서 DB_USER(MongoDB user 입력), DB_PASSWORD(MongoDB password 입력), SECRET_KEY, NODE_ENV(production 입력) 설정
4. npm start
5. localhost:4000에서 확인
6. 만약 client를 수정했다면 cd client && npm run build 선행 필요

## Start development mode
1. 레포지토리의 소스코드 pull
2. npm i
3. .env에서 DB_USER(MongoDB user 입력), DB_PASSWORD(MongoDB password 입력), SECRET_KEY, NODE_ENV(dev 입력) 설정
4. npm run dev
5. localhost:4000/graphql에서 playground 확인
6. cd client && npm start
7. localhost:3000에서 client 확인
