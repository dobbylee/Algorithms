#include <iostream>
#include <string>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    string row(a, '*');
    for (int i = 0; i < b; i++) {
        cout << row << "\n";
    }
}