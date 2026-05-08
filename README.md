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
