#include <numeric>
#include <vector>
using namespace std;

vector<int> solution(int n, int m) {
    int gcd_val = gcd(n, m);
    return {gcd_val, n / gcd_val * m};
}