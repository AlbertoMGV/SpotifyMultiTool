const fetch = require("node-fetch");

module.exports = {

  playCopier: (from, to) => {
    console.log(from);
    console.log(to);
  },
  
  getSongs: (pl) => {

  	if (pl.length>=72) {

  	const url='https://api.spotify.com/v1/playlists/'+pl.substring(50, 72)+'/tracks';
  	const data={
  		xxx:"",
  		yyy:""
  	};
  	const othePram={
  		headers:{
  			"content-type":"application/json; charset=UTF-8",
  			"Authorization":"Bearer {PASTE HERE YOUT OAUTH TOKEN}"
  		},
  		methos:"GET"
  	};

  	fetch(url, othePram)
  	.then(data=>{return data.json()})
  	.then(res=>{
  		console.log(res);
  		for (var i = 0; i <= res.items.length - 1; i++) {
  			console.log((i+1)+'. '+res.items[i].track.name+' - '+res.items[i].track.artists[0].name)
  		}
  		
  	})
  	.catch(error=>console.log(error))

  } else {
  	console.log('ERROR')
  }
  	
  },

}
