class Player {
  constructor(){
    this.index = null;
    this.distance = 200;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(x){ 
    if(x===1){
      this.index = 1;
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
      name:"harry",
      distance:this.distance
      })
    }
    else if(x===2) {
      this.index = 2;
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
      name:"draco",
      distance:this.distance
      })
    }
 }
  
  //static function  is a public bathroom and astatic(normal) are private home bathrooms;                   
  static getPlayersInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      players = data.val();
    })
  }
//getter
  getPlayersAtEnd() {
    var playersAtEndRef = database.ref('playersAtEnd');
      playersAtEndRef.on("value",(data)=>{
      this.rank = data.val();
    })
  }
//setter 
//setter function always take arguments;
  static updatePlayersAtEnd(rank) {
    database.ref('/').update({
      playersAtEnd: rank
    });
  }
}
