#include <string>
using namespace std;

string solution(string phone_number) {
    int subPosition = phone_number.size() - 4;
    return string(subPosition, '*') + phone_number.substr(subPosition);
}