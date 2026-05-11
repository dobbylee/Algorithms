#include <cmath>

using namespace std;

long long solution(int a, int b) {
    long long i = a, j = b;
    return (i + j) * (abs(i - j) + 1) / 2;
}