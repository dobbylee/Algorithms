import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        br.close();
        for (int i = 1; i < 2 * N; i++) {
            int num = i <= N ? i : 2 * N - i;
            bw.write(" ".repeat(N - num));
            bw.write("*".repeat(2 * num - 1));
            bw.newLine();
        }
        bw.flush();
        bw.close();
    }
}