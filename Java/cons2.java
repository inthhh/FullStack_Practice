// 생성자
class Energy {
    int price = 1000;
    
    public Energy() {
        System.out.println("1 " + price);
    }
    
    public Energy(final int price) {
        this.price = price;
        System.out.println("2 " + price);
    }
}

class WindEnergy extends Energy {
    int price = 2000;
    
    public WindEnergy() {
        System.out.println("11 " + price);
    }
    
    public WindEnergy(final int price) {
        // super가 없으면 -> 부모의 일반 생성자를 호출
        super(price); // 있으면 -> 부모클래스의 매개변수 생성자 호출
        this.price = price;
        System.out.println("22 " + price);
    }
}

public class cons2 {
    public static void main(String[] args) {
//        Energy energy = new WindEnergy(); // 부모클래스 먼저 호출됨(1 -> 11)
        Energy energy = new WindEnergy(3000); // 부모클래스 생성자(1) + 자식 매개변수 생성자(22)
    }
}
