✅ 파드(Pod) 내부로 들어가서 Nginx로 요청보내기
파드(Pod) 내부로 접속해 Nginx로 요청을 보냈을 때, Nginx가 띄운 웹 페이지를 잘 응답하는 지 확인해보자.
# kubectl exec -it [파드명] -- bash
# 도커에서 컨테이너로 접속하는 명령어(docker exec -it [컨테이너 ID] bash)와 비슷하다. 
$ kubectl exec -it nginx-pod -- bash # nginx-pod 내부 환경으로 접속

# ---Pod 내부---
$ curl localhost:80 # Nginx로 요청보내기
