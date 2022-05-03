class Youtube{
    constructor(key){
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    mostPopular(){  
        return fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBDS3vPcU7ZtWufy13-XKHGViHhiysnU2s", 
        this.getRequestOptions)
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
    }
    serach(query){
        return fetch(`https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBDS3vPcU7ZtWufy13-XKHGViHhiysnU2s`, 
        this.getRequestOptions)
        .then(response => response.json())
        .then(result => result.items.map(item => ({...item , id: item.id.videoId})))
        .then(items => setVideos(items))
        .catch(error => console.log('error', error));
    }
}