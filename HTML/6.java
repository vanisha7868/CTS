import java.util.Scanner;

public class CoreJavaExercises {

    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        while (true) {
            System.out.println("\nCore Java Exercises Menu:");
            System.out.println("1. Hello World");
            System.out.println("2. Simple Calculator");
            System.out.println("3. Even or Odd Checker");
            System.out.println("4. Leap Year Checker");
            System.out.println("5. Multiplication Table");
            System.out.println("0. Exit");
            System.out.print("Choose an exercise to run (0-5): ");
            int choice = scanner.nextInt();
            scanner.nextLine();  // consume newline

            switch (choice) {
                case 1: helloWorld(); break;
                case 2: simpleCalculator(); break;
                case 3: evenOrOdd(); break;
                case 4: leapYearChecker(); break;
                case 5: multiplicationTable(); break;
                case 0:
                    System.out.println("Exiting. Goodbye!");
                    return;
                default:
                    System.out.println("Invalid choice. Try again.");
            }
        }
    }

    static void helloWorld() {
        System.out.println("Hello, World!");
    }

    static void simpleCalculator() {
        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();
        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();
        scanner.nextLine();

        System.out.print("Choose operation (+, -, *, /): ");
        char op = scanner.nextLine().charAt(0);

        double result;
        switch (op) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': 
                if (num2 == 0) {
                    System.out.println("Cannot divide by zero!");
                    return;
                }
                result = num1 / num2; 
                break;
            default:
                System.out.println("Invalid operation");
                return;
        }
        System.out.println("Result: " + result);
    }

    static void evenOrOdd() {
        System.out.print("Enter an integer: ");
        int num = scanner.nextInt();
        scanner.nextLine();
        if (num % 2 == 0) {
            System.out.println(num + " is Even.");
        } else {
            System.out.println(num + " is Odd.");
        }
    }

    static void leapYearChecker() {
        System.out.print("Enter a year: ");
        int year = scanner.nextInt();
        scanner.nextLine();

        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            System.out.println(year + " is a Leap Year.");
        } else {
            System.out.println(year + " is NOT a Leap Year.");
        }
    }

    static void multiplicationTable() {
        System.out.print("Enter a number: ");
        int num = scanner.nextInt();
        scanner.nextLine();

        for (int i = 1; i <= 10; i++) {
            System.out.println(num + " x " + i + " = " + (num * i));
        }
    }
}
