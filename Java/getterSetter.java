class Hong {
    public int age = 20;
    protected int korScore = 80;
    String name = "홍길동";
    private int engScore = 90;
    
    public int getEngScore() {
        return engScore;
    }
    
    public void setEngScore(int engScore) {
        this.engScore = engScore;
    }
}


public class getset {
    public static void main() {
        Hong hong = new Hong();
        System.out.println(hong.name);
        System.out.println(hong.korScore);
//        System.out.println(hong.engScore); // 불가능
        System.out.println(hong.getEngScore()); // private -> getter/setter 사용 시 접근 가능
        System.out.println(hong.age);
    }
}
