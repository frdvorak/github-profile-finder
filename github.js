class Github {
    constructor(){
        this.client_id = '7b758f899fc779212a0c';
        this.client_secret = '4ae7008defb6181e2a548104fbad96bddb896600';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}