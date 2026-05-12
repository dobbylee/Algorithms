#include <string>
#include <iostream>
#include <cctype>
using namespace std;

bool solution(string s) {
    int count = 0;
    for (char c: s) {
        char lowChar = tolower(c);
        if (lowChar == 'p') count++;
        if (lowChar == 'y') count--;
    }
    return !count;
}