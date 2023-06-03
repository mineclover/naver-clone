# 디자인 시스템 컨벤션

## 상태관리 컴포넌트와 디자인 컴포넌트로 분리

리덕스나 리코일 같은 상태관리라이브러리를
디자인 컴포넌트 내에 넣지 않기

상태 관리 컴포넌트와 디자인 컴포넌트의 분리
이미지를 넣고 싶으면 추상화 시킨 컴포넌트에 이미지 링크를 넣어서 올려라

### 장점

1. 디자인 컴포넌트의 재사용이 쉬워진다

- 종속성이 없어져서 다른 곳에 옮겨 설치해도 설정할 게 없다

2. 해당 컴포넌트에 대해 사용되는 값들을 상태관리 컴포넌트에서 한번에 볼 수 있다
3. 스토리북이 된다

### 단점

간단한 걸 만들 때도 상태값을 써야할 때는 두개를 만들어야 한다 ( 장점이 부각된다 )

## 스토리북은 stories 로 이동

스토리북 내에서만 사용되는 리소스는 assets 에서 관리 ( ex: 테스트 리소스 )
