#include <string>
#include <vector>

using namespace std;

int solution(vector<int> absolutes, vector<bool> signs) {
    int result = 0;
    for (int i = 0; i < absolutes.size(); i++) signs[i] ? result += absolutes[i] : result -= absolutes[i];
    return result;
}