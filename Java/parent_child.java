//코드 중복 : 10개의 똑같은 코드가 있다면? 유지보수가 힘들다.
//코드 중복을 줄이는 방법
//0. 반복문이나 배열/리스트를 사용한다.
//1. 함수로 재사용한다.
//2. 클래스(필드+함수)로 재사용한다.
//3. 클래스 상속을 이용한다. => 타입의 유연성 - 다형성
//4. 추상화 클래스나 인터페이스를 사용한다.

//클래스의 상속
//   : 부모(상위) 클래스의 유산(자원-함수와 변수)를 자식(하위) 클래스가
//      물려받은 것.
//  사용이유
// 1. 코드 중복 피할 수 있다.
// 2. 계층적인 구조로 코드를 설계할 수 있다.
//예)  강아지 : 동물 속성/행동 + 강아지고유의 속성/행동
//     고양이 : 동물 속성/행동 + 고양이고유의 속성/행동

//연습문제 - 클래스 상속
//
//부모클래스 - 나무     Wood
//          속성 가격 int price = 1000
//         행동 불탄다 burn()
//자식클래스 - 나무책상 WoodDesk
//          속성  color  "흰색"
//          행동  study   "공부를 한다."
//         - 나무의자 WoodChair
//          속성  color  "갈색"
//           행동  sit    "앉는다"
//자식클래스의 객체를 생성하고 속성과 행동을 출력하시오.
class Wood {
    int price = 1000;

    void burn() {
        System.out.println("불에 잘 탄다.");
    }
}

class WoodDesk extends Wood {
    String color = "흰색";

    void study() {
        System.out.println("공부한다.");
    }
}

class WoodChair extends Wood {
    String color = "갈색";

    void sit() {
        System.out.println("앉는다.");
    }
}

public class ex29 {
    public static void main(String[] args) {
        WoodDesk desk = new WoodDesk();
        System.out.println(desk.price);
        System.out.println(desk.color);
        desk.burn();
        desk.study();
        WoodChair chair = new WoodChair();
        System.out.println(chair.price);
        System.out.println(chair.color);
        chair.burn();
        chair.sit();
    }
}
