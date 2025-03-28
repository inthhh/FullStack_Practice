import java.util.Scanner;

public class question1_20 {
    public static void main(String[] args){
        // 1번
        System.out.println("Hello");
        // 2번
        System.out.println("Hello World");
        // 3번
        System.out.println("Hello\nWorld");
        // 4
        System.out.println("\'Hello\'");
        // 5
        System.out.println("\"Hello\"");
        // 6
        System.out.println("C:\\Download\\hello.java\n");
        // 7
        Scanner input = new Scanner(System.in);
        int i = input.nextInt();
        System.out.println(i);
        // 8
        Scanner input2 = new Scanner(System.in);
        String a = input2.nextLine();
        System.out.println(a);
        // 9
        Scanner sc = new Scanner(System.in);
        float num = sc.nextFloat();
        System.out.println(num);
        // 10
        Scanner sc2 = new Scanner(System.in);
        int num1 = sc2.nextInt();
        int num2 = sc2.nextInt();
        System.out.println(num1 + " " + num2);
        // 11
        Scanner sc3 = new Scanner(System.in);
        int n1 = sc3.nextInt();
        int n2 = sc3.nextInt();
        System.out.println(n2 + " " + n1);
        // 12
        Scanner in = new Scanner(System.in);
        String aa = in.nextLine();
        System.out.println(aa);
        // 13
        Scanner sc4 = new Scanner(System.in);
        float num4 = sc4.nextFloat();
        System.out.printf("%.2f", num4);
        // 14
        Scanner sc14 = new Scanner(System.in);
        int hour = sc14.nextInt();
        int minute = sc14.nextInt();
        System.out.println(hour + ":" + minute);
        // 15
        Scanner sc15 = new Scanner(System.in);
        int year = sc15.nextInt();
        int month = sc15.nextInt();
        int day = sc15.nextInt();
        System.out.printf("%d.%02d.%02d", year, month, day);
        // 16
        Scanner sc16 = new Scanner(System.in);
        int num16 = sc16.nextInt();
        System.out.printf("%o", num16);
        // 17
        Scanner sc17 = new Scanner(System.in);
        int n17 = sc17.nextInt();
        System.out.printf("%x", n17);
        // 18
        Scanner sc18 = new Scanner(System.in);
        char ch = sc18.next().charAt(0);
        System.out.println((int) ch);
        // 19
        Scanner sc19 = new Scanner(System.in);
        int num19 = sc19.nextInt();
        System.out.println((char) num19);
        // 20
        Scanner sc20 = new Scanner(System.in);
        int aaa = sc20.nextInt();
        int b = sc20.nextInt();
        int c = sc20.nextInt();
        int sum = aaa+b+c;
        double avg = sum / 3;
        System.out.printf("%d\n%.1f", sum, avg);
    }
}
