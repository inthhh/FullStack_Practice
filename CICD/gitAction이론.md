# CI/CD 구축할 때 사용할 Github Actions

### ✅ CI/CD를 구축할 때 사용할 툴

CI/CD를 구축할 수 있는 툴에는 여러가지가 있다. 

- Github Actions
- Jenkins
- Circle CI
- Travis CI
- 등등

이 중에서 현업에서도 많이 사용하면서, 무료로 사용할 수 있고, 빌드용 서버가 따로 필요없는 Github Actions를 활용해서 CI/CD를 구축할 것이다. 

### ✅ CI/CD에서 Jenkins를 활용하지 않아도 되나요?

현업에서 Github Actions 뿐만 아니라 Jenkins도 많이 활용한다. Github Actions와 Jenkins 둘 중에 하나만 쓰더라도 필요한 CI/CD 구성을 전부 할 수 있다. **Github Actions를 사용할 지, Jenkins를 사용할 지는 장단점을 비교해서 상황에 맞게 선택하면 된다.** 개인적으로 추천하는 툴은 **Github Actions**이다.

Jenkins의 단점으로는 별도의 서버에 구축을 해야 한다는 단점이 있다. 이 때문에 서버를 빌리는 비용이 발생하게 된다. 하지만 Github Actions는 별도의 서버 구축 없이 Github에 내장되어 있는 Github Actions 기능을 사용할 수 있다. 비용적인 측면도 유리하고 셋팅하는 데 시간을 쓸 필요도 없다.

실제 현업에서도 정말 Jenkins를 안 쓰고 Github Actions를 쓰는지 확인하고 싶다면 아래 링크를 살펴보자.

[카카오엔터프라이즈가 GitHub Actions를 사용하는 이유](https://tech.kakao.com/2022/05/06/github-actions/)

# Github Actions를 활용한 전체적인 CI/CD 흐름

### ✅ CI/CD 흐름을 이해하기 위한 Github Actions 개념 정리

**Github Actions**를 **로직을 실행시킬 수 있는 일종의 컴퓨터**라고 생각하면 된다. CI/CD 과정에서 Github Actions는 “빌드, 테스트, 배포”에 대한 로직을 실행시키는 역할을 하게 된다. 

> Github Actions에 대한 이미지를 이 정도로 잡아두고, CI/CD 전체 흐름을 한 번 살펴보자.
> 

### ✅ CI/CD 전체 흐름

CI/CD의 구성 방식은 다양하지만 일반적으로 아래의 흐름을 가진다. 

<img width="704" alt="image" src="https://github.com/user-attachments/assets/8cf297d1-8d04-45f2-bd9a-31d98d99bf3a" />


1. 코드 작성 후 Commit
2. Github에 Push
3. Push를 감지해서 Github Actions에 작성한 로직이 실행
    1. 빌드(Build)
    2. 테스트(Test)
    3. 서버로 배포(Deploy)
4. 서버에서 배포된 최신 코드로 서버를 재실행
