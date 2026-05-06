#include <iostream>

using namespace std;
int solution(int n) {
    return n > 0 ? n % 10 + solution((n / 10)) : 0;
}