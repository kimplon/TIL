테이블 결합(Join)-관계
관계는 1:1, 1:N, N:N 세가지 형태로,
테이블 간의 연결이 가능하다는 것을 의미한다. 

회원 테이블과 주문 테이블이 있을 때,
회원 및 주문 테이블은 회원번호 기준으로 1:N관계이다. 
ex. 1명의 회원이 여러 번(N) 주문이 가능하다. 

테이블 결합(JOIN)은 두 테이블 관계를 활용하여, 테이블을 결합하는 명령어다. 

customer 테이블과 sales 테이블은 mem_no(회원번호)기준으로 1:N 관계이며, 테이블 결합이 가능하다. 

ERM(Entity-Relationship Modeling)
개체 관계 모델링
관계형 데이터베이스에 테이블을 모델링할 때 사용된다. 

INNER JOIN : 두 테이블의 공통 값이 매칭되는 데이터만 결합

SELECT *
FROM CUSTOMER AS A
INNER 
JOIN SALES AS B
ON  A.MEM_NO = B.MEM_NO
WHERE A.MEM_NO = '1000970';
회원 가입하고 주문한 고객을 띄워줌

LEFT JOIN : 두 테이블의 공통 값이 매칭되는 데이터만 결합 + 왼쪽 테이블의 매칭되지 않는 데이터는 NULL
SELECT *
FROM CUSTOMER AS A
LEFT 
JOIN SALES AS B
ON  A.MEM_NO = B.MEM_NO
WHERE A.MEM_NO = '1000970';
-> 회원만 가입하고 주문하지 않으면 회원에는 뜨고 나머지 SALES 값은 NULL로 표시해준다. 

RIGHT JOIN : 두 테이블의 공통 값이 매칭되는 데이터만 결합 + 오른쪽 테이블의 매칭되지 않는 데이터는 NULL

SELECT *
FROM CUSTOMER AS A
RIGHT 
JOIN SALES AS B
ON  A.MEM_NO = B.MEM_NO
WHERE A.MEM_NO = '1000970';

주문은 했지만 회원가입하지 않는 레코드 출력 (비회원 주문)

INNER JOIN : 두 테이블의 공통 값이 매칭되는 데이터만 결합
CUSTOMER, SALES 테이블이라면 회원가입 후, 주문이력이 있는 회원이 출력된다. 
LEFT JOIN : 두 테이블의 공통 값이 매칭되는 데이터만 결합 + 왼쪽 테이블의 매칭되지 않는 데이터는 NULL
CUSTOMER, SALES 테이블이라면 회원가입 후, 주문이력이 있는 회원과 주문 이력이 없는 회원이 출력된다. 
RIGHT JOIN : 두 테이블의 공통 값이 매칭되는 데이터만 결합 + 오른쪽 테이블의 매칭되지 않는 데이터는 NULL
CUSTOMER, SALES 테이블이라면 회원가입 후, 주문이력이 있는 회원과 비회원이 출력된다. 

테이블 결합(JOIN) 및 데이터 조회(SELECT)를 활용하여, 여러 테이블들을 결합하여 조회 및 분석이 가능하다. 

FROM 절 + JOIN : 테이블 확인 및 결합 (회원 및 주문 테이블 결합)
WHERE 절 : FROM 절 테이블을 특정 조건으로 필터링(성별이 남성 조건으로 필터링하여)
GROUP BY 절 : 열 별로 그룹화 (거주지역 별로 구매횟수 집계)
HAVING 절 : 그룹화된 새로운 테이블을 특정 조건으로 필터링 (구매횟수 100회 미만 조건으로 필터링)
SELECT 절 : 열 선택 (모든 열 조회)
ORDER BY 절 : 열 정렬 (구매횟수가 낮은 순으로)

회원 테이블, 주문 테이블, 상품 테이블
3개 이상 테이블들을 결합할 수 있다. 
