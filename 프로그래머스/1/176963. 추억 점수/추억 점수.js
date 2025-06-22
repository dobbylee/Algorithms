function solution(name, yearning, photo) {
    const score = {};
    for (let i = 0; i < name.length; i++) {
        score[name[i]] = yearning[i];
    }
    
    return photo.map((names) => 
        names.reduce((sum, n) => sum + (score[n] || 0), 0)
    );
}