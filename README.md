# 🍴 EAT NOW | Bootstrap & jQuery 기반 UI
EAT NOW는 고객이 장바구니에 메뉴를 담아 주문을 하고, 사장님이 가게·메뉴·주문·리뷰를 관리할 수 있는 배달 주문 서비스입니다. <br>
Bootstrap과 jQuery를 기반으로 UI를 구현했으며, AJAX를 활용해 Spring Boot 기반 REST API 서버와 연동했습니다. <br><br>
![Project](https://img.shields.io/badge/Project-EAT%20NOW(Frontend)-orange)
![Service](https://img.shields.io/badge/Service-배달%20주문%20서비스-blue)
![Team](https://img.shields.io/badge/Team-2인%20프로젝트-purple)
![Period](https://img.shields.io/badge/Period-2026.04.06~2026.05.08-green)

# 📍 목차
[![화면](https://img.shields.io/badge/화면-FF6B6B?style=for-the-badge)](#화면)
[![기술 스택](https://img.shields.io/badge/기술%20스택-4DABF7?style=for-the-badge)](#기술-스택)
[![설계](https://img.shields.io/badge/설계-845EF7?style=for-the-badge)](#설계)
[![역할 분담](https://img.shields.io/badge/역할%20분담-FF922B?style=for-the-badge)](#역할-분담)
[![프로젝트 구조](https://img.shields.io/badge/프로젝트%20구조-ADB5BD?style=for-the-badge)](#프로젝트-구조)

## 화면
### 공통 UI
| 화면 |
| :---: |
| 회원가입 유형 선택 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/d95221c6-3f48-42f0-bc97-7a6697df5468" />|
| 고객 회원가입 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/0bca1ae5-a50f-4a80-896f-69fa3a2ccd15" />|
| 사장 회원가입 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/17eb51e9-4bba-4fb5-a4ee-f8b5a08bba2c" />|
| 로그인 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/1837e4a8-e32d-4cdc-8118-9d0fc86686bc" />|
| 닉네임 변경 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/09cbe6de-3163-46d2-a560-5f0e6dd29d72" />|
| 비밀번호 변경 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/77fdf1cc-c84b-4f20-ae57-f7c1619dafaf" />|

### 고객 UI
| 화면 |
| :---: |
| 가게 목록 조회 및 검색 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/8a3993c4-a5c6-4873-bc8d-521055e9f327" />|
| 가게 상세 정보 및 메뉴 확인 후 수량을 선택해 장바구니에 담기 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/771f5e8f-3c79-44d4-9776-9f8179b334a2" />|
| 장바구니 조회 및 수량 변경, 항목 삭제, 주문 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/c3963791-de7c-498c-af4b-33e3c563479f" />|
| 주문 내역 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/ef61c014-bd64-4665-8841-9ec3fb831334" />|
| 주문 상세 조회 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/d8d1c1da-2299-4208-8864-c42fef185e1f" />|
| 리뷰 작성 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/b22b34de-9c84-4813-8537-844607c256fe" />|
| 리뷰 내역 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/a098fa92-f3af-4bbe-80d1-8f0c41b44f94" />|
| 가게 리뷰 조회 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/a0eaddf8-eb43-4818-8c61-221b43a82d39" />|

### 사장님 UI
| 화면 |
| :---: |
| 사장님 메인 화면 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/e55d776c-ed08-4623-b2ee-209833791a17" />|
| 가게 대시보드 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/4ecc04c6-b964-45c9-9916-5b2d46cdd080" />|
| 가게 관리 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/87dd6cd2-8643-4d90-bc02-21839e6c1cb7" />|
| 주문 관리 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/1b7b22f3-48d3-4104-a72f-e6a88eb5ccfe" />|
| 리뷰 관리 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/9a6ddee3-7304-41c0-a7b6-3ff8327a1c82" />|
| 메뉴 관리 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/9c980740-ba1d-4ff8-837d-9e9c17c67be1" />|
| 내 가게 목록 조회 및 영업 상태 변경 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/ed3f4f4d-f407-44f3-b470-38f437b2bab0" />|
| 새 가게 생성 |
|<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/96ebc95a-d3df-4bb4-9528-6bd5a3670cf2" />|

## 기술 스택
![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![AJAX](https://img.shields.io/badge/AJAX-005571?style=for-the-badge)

## 설계
- [고객 화면 와이어프레임](https://www.figma.com/design/xZCTKUYTooFRuDhzNVi86N/Eat-Now?node-id=126-181&p=f&t=rREcAVkrQlpxECov-0)
- [사장님 화면 와이어프레임](https://www.figma.com/design/xZCTKUYTooFRuDhzNVi86N/Eat-Now?node-id=126-182&p=f&t=rREcAVkrQlpxECov-0)

## 역할 분담
| 이름 | 담당 기능 | GitHub | Blog |
| --- | --- | --- | --- |
| 김지연 | 고객 및 공통 UI·기능 구현 | [GitHub](https://github.com/jiyeon0926) | - [학습 기록](https://blog.naver.com/yeondata) <br> - [문제 해결 기록](https://velog.io/@yeoni9094/posts) |
| 임현아 | 사장님 UI·기능 구현 | [GitHub](https://github.com/gaebarja99) | [개발 기록](https://blog.naver.com/bbaehyunn) |

## 프로젝트 구조
```
.
|---.gitignore
|---index.html
|---README.md
|
+---assets
|   +---css
|   |       bootstrap.min.css
|   |       common.css
|   |
|   +---img
|   |       배너1.png
|   |       배너2.png
|   |
|   \---js
|           api.js
|           bootstrap.bundle.min.js
|           color-modes.js
|           common.js
|
\---pages
    +---auth
    |       login.html
    |       signup.html
    |
    +---customer
    |       cart.html
    |       my-reviews.html
    |       order-detail.html
    |       order-list.html
    |       review.html
    |       store-detail.html
    |       store-reviews.html
    |
    +---owner
    |       owner-main.html
    |       owner-menu-manage.html
    |       owner-order-manage.html
    |       owner-quick.html
    |       owner-review-manage.html
    |       owner-store-manage.html
    |       owner-stores.html
    |       ownerSelfStore.html
    |
    \---user
            nickname.html
            password.html
```
