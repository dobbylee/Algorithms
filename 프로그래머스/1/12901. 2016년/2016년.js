function solution(a, b) {
    const monthDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    const dayStr = {1: "FRI", 2: "SAT", 3: "SUN", 4: "MON", 5: "TUE", 6: "WED", 0: "THU"};
    
    let sumDays = b;
    for (let i = 0; i < a; i++) {
        sumDays += monthDays[i];
    }
    return dayStr[sumDays % 7];
}