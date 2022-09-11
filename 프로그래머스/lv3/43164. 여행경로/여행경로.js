function solution(tickets) {
    const answer = [];
    const visited = Array.from(Array(tickets.length).fill(false));
    
    dfs(["ICN"]);
    
    return answer.sort()[0];
    
    function dfs (route) {
        const current = route[route.length - 1];
        let next = null;
        
        if(route.length === tickets.length + 1) {
            answer.push(route.slice());
            return true;
        }

        tickets.some((ticket, index) => {
            if(!visited[index] && current === ticket[0]) {
                next = ticket[1];
                visited[index] = true;
                
                const nextRoute = route.slice();
                nextRoute.push(next);
                
                dfs(nextRoute);
                
                visited[index] = false;
                nextRoute.pop();
            }
        });
        
        return false;
    }
}