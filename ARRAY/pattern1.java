public class pattern1 {
    public static void main(String[] args) {
        int i, j;
        // for (i = 1; i <= 5; i++) {
        // for (j = 1; j <= i; j++) {
        // System.out.print("*");
        // }
        // System.out.println("");
        // }
        // System.out.println("");
        // for (i = 5; i >= 1; i--) {
        // for (j = 1; j <= i; j++) {
        // System.out.print("*");
        // }
        // System.out.println("");
        // }
        // System.out.println("");

        // *
        // * * *
        // * * * * *
        int n = 5;

        // for (i = 1; i <= n; i++) {
        // for (j = 1; j <= n - i; j++) {
        // System.out.print(" ");
        // }
        // for (j = 1; j <= i; j++) {
        // System.out.print("*");
        // }
        // for (j = 2; j <= i; j++) {
        // System.out.print("*");
        // }

        // for (j = 3; j <= i; j++) {
        // System.out.print("*");
        // }
        // System.out.println("");
        // }

        for (i = 5; i <= n; i++) {
            for (j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }
    }
}