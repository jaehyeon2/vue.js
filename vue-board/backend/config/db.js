const mysql = require('mysql');

const dbInfo = {
	host:'0.0.0.0'
	,user:'username'
	,port:'3000'
	,password:'password'
	,database:'db_name'
}

let dbcon = {
	init:function() {
		return mysql.createConnection(dbInfo);
	},
	conn:function(con) {
		con.connect(function(err){
			if(err) {
				console.log("mysql connection error :"+err);
				//setTimeout(init, 2000);

			} else {
				console.log("mysql connection sucessfully");
			}
		})
	}
}

module.exports = dbcon; //모듈 등록