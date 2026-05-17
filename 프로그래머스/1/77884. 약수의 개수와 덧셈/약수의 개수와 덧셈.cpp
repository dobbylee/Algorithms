#include <cmath>
using namespace std;

int solution(int left, int right) {
    int answer = 0;
    for (int i = left; i <= right; i++) {
        int rt = sqrt(i);
        rt * rt == i ? answer -= i : answer += i; 
    }
    return answer;
}