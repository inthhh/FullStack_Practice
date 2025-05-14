Dockerfile 작성하기
Dockerfile
```
FROM openjdk:17-jdk

COPY build/libs/*SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
```
​
Spring Boot 프로젝트 빌드하기
```
$ ./gradlew clean build
```
Dockerfile을 바탕으로 이미지 빌드하기
```
$ docker build -t spring-server .
```
​
이미지가 잘 생성됐는 지 확인하기
```
$ docker image ls
```

매니페스트 파일 작성하기
spring-pod.yaml
```
apiVersion: v1
kind: Pod
metadata:
  name: spring-pod
spec:
  containers:
    - name: spring-container
      image: spring-server
      ports:
        - containerPort: 8080
```
매니페스트 파일을 기반으로 파드(Pod) 생성하기
```
$ kubectl apply -f spring-pod.yaml 
```
​
파드(Pod)가 잘 생성됐는 지 확인
```
$ kubectl get pods
```
