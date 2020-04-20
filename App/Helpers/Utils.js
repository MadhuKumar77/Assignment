

export const getCurrentUserAddress=(lattitude,longitude)=>{
    return new Promise(function(resolve, reject) {
      fetch( 'https://maps.googleapis.com/maps/api/geocode/json?key=<apikey>&latlng=' + lattitude + ',' + longitude,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => {
        resolve(response.json())
         
      }).catch(err => {
          reject(err);
        })    
    })
  }