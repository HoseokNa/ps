function solution(n) {
    let answer = 0;
    
    for(let start = 1; start <= n; start++) {
        let current = start;
        let sum = current;
        
        while(sum < n) {
            current++;
            sum += current;
        }
        if(sum === n) {
            answer++;
        }
    }
    
    return answer;
}