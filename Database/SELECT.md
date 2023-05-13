데이터 조회(SELECT)
데이터 조회(SELECT)는 데이터 조작어(DML)이며,
데이터 분석에서 가장 많이 사용되는 명령어다. 

데이터 조회(SELECT)와 여러 절들
데이터 조회(SELECT)는 여러 절들과 함께 사용되어, 분석에 필요한 데이터를 조회합니다. 
*절: FROM, WHERE, GROUP BY, HAVING, ORDER BY

회원 데이블을 : FROM 절 -> 테이블 확인
성별이 남성 조건으로 필터링하여 : WHERE 절 -> FROM절 테이블을 특정 조건으로 필터링
거주지역별로 회원수 집계 : GROUP BY 절 -> 일 별로 그룹화
집계 회원 수 100명 미만 조건으로 필터링 : HAVING 절 -> 그룹화된 새로운 테이블을 특정 조건으로 필터링
모든 열 조회 : SELECT절 -> 열 선택
집계 회원수가 높은 순으로 : ORDER BY 절 -> 열 정렬

FROM -> WHERE -> GROUP BY -> HAVING -> (SELECT) -> ORDER BY
- FROM : 테이블 확인
- WHERE : FROM절 테이블을 특정 조건으로 필터링
- GROUP BY : 일 별로 그룹화

그룹화가 되면 새로운 테이블이 생성된다. 

- HAVING : 그룹화된 새로운 테이블을 특정 조건으로 필터링
- SELECT : 열 선택
- ORDER BY : 열 정렬

GROUP BY는 집계함수와 주로 사용되는 명령어다. 
여러 열별로 그룹화가 가능하며
GROUP BY에 있는 열들을 SELECT에도 작성해야 원하는 분석 결과를 확인할 수 있다. 

1.회원테이블(CUSTOMER)을
2.성별이 남성 조건으로 필터링하여
3.거주지역별로 회원 수 집계
4.집계 회원 수 100명 미만 조건으로 필터링
5.모든 열 조회
6.집계 회원수가 높은 순으로

SELECT ADDR, COUNT(MEMBER_NUM) AS 회원 수
FROM CUSTOMER
WHERE GENDER = 'MAN'
GROUP BY ADDR 
HAVING COUNT(MEMBER_NUM) < 100
ORDER BY COUNT(MEMBER_NUM) DESC;