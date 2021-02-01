export const movieComedy = () => {
        fetch('http://demo2092094.mockable.io/moodmovie/comedy')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
        });
}
