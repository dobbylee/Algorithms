#include <string>
#include <vector>

using namespace std;

bool solution(int x) {
    int sum = 0;
    int tmp = x;
    while (tmp) {
        sum += tmp % 10;
        tmp /= 10;
    }
    return !(x % sum);
}