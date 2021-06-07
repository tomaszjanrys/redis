
var redis= require("redis");
var client = redis.createClient();
client.on("error", function(error){
    confirm.log(error)
})


var employees = [
    {"id":1,"first_name":"Marc","last_name":"Keneforde","email":"mkeneforde0@go.com","gender":"Male","ip_address":"61.239.35.190","age":107},
    {"id":2,"first_name":"Brita","last_name":"Tunesi","email":"btunesi1@gov.uk","gender":"Female","ip_address":"210.249.255.120","age":87},
    {"id":3,"first_name":"Birk","last_name":"Belson","email":"bbelson2@dion.ne.jp","gender":"Male","ip_address":"203.152.162.42","age":113},
    {"id":4,"first_name":"Enrica","last_name":"Blowfield","email":"eblowfield3@reference.com","gender":"Female","ip_address":"118.228.23.243","age":10},
    {"id":5,"first_name":"Marti","last_name":"Elnaugh","email":"melnaugh4@posterous.com","gender":"Female","ip_address":"226.75.177.76","age":78},
    {"id":6,"first_name":"Mavis","last_name":"Farlowe","email":"mfarlowe5@wired.com","gender":"Female","ip_address":"3.62.127.83","age":21},
    {"id":7,"first_name":"Kevon","last_name":"Argue","email":"kargue6@nba.com","gender":"Male","ip_address":"154.143.93.213","age":89},
    {"id":8,"first_name":"Bride","last_name":"Dunne","email":"bdunne7@sciencedirect.com","gender":"Female","ip_address":"19.155.130.227","age":102},
    {"id":9,"first_name":"Jammal","last_name":"Crinidge","email":"jcrinidge8@tmall.com","gender":"Male","ip_address":"82.203.225.112","age":26},
    {"id":10,"first_name":"Nikita","last_name":"Casolla","email":"ncasolla9@thetimes.co.uk","gender":"Male","ip_address":"240.182.51.184","age":46}
  ]



for(let [key,value] of Object.entries(employees)){
    client.hmset(key,value, redis.print);
    
}

client.hgetall("1",function(err,object){
    console.log(object);
    client.quit();
})
