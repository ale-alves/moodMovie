export const movieAnimation = () => {
    fetch('http://demo2092094.mockable.io/moodmovie/animation')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });
};

export const movieComedy = () => {
        fetch('http://demo2092094.mockable.io/moodmovie/comedy')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
        });
};

export const movieFiction = () => {
    fetch('http://demo2092094.mockable.io/moodmovie/fiction')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });
};

export const movieThriller = () => {
    fetch('http://demo2092094.mockable.io/moodmovie/thriller')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });
};

export const movieDrama = () => {
    fetch('http://demo2092094.mockable.io/moodmovie/drama')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });
};

export const movieRomance = () => {
    fetch('http://demo2092094.mockable.io/moodmovie/romance')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });
};