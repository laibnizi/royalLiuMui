var Constants=(function(){
	var GRANT_TYPE = "client_credentials";
	var API_KEY="ygBg8X7uGDNhwCHIQZREDiQC";
	var SECRET_KEY="tHtAWgfMkuPKoX7o3Qeky4i2ix1Bt9lp";
	var AUTH_HOST="https://aip.baidubce.com/oauth/2.0/token";
	var WEB_IMAGE_URL="https://aip.baidubce.com/rest/2.0/ocr/v1/accurate";
	
	var YOUDAO_URL="https://openapi.youdao.com/api";
	
	var con={};
	con.GrantType=function(){
		return GRANT_TYPE;
	};
	con.ApiKey=function(){
		return API_KEY;
	};
	con.SecretKey=function(){
		return SECRET_KEY;
	};
	con.AuthHost=function(){
		return AUTH_HOST;
	};
	con.WebImageUrl=function(){
		return WEB_IMAGE_URL;
	};
	
	con.YouDao=function(){
		return YOUDAO_URL;
	};
	return con;
})();




	