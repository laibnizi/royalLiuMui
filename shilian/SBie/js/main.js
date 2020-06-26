;var showWebView=function(webviewUrl,webViewID,titleText,params){
	var resultWebView=plus.webview.create(webviewUrl,webViewID,{
			            	hardwareAccelerated:true,
			            	scrollIndicator:"none",
			            	render:"always",
			            	titleNView:{
			            		autoBackButton:true,
			            		backgroundColor:"#70ACF9",
			            		titleColor:"#FFFFFF",
			            		titleText:titleText,
			            		titleSize:"20px",
			            		splitLine:{
				            		color:"#CCCCCC",
				            		height:"1px"
				            	}
			            	}
			            },params);
			            resultWebView.show("pop-in",100);
};


//本地数据库的基本信息
var mainDB={
	name:'db',
    version:1
};

var cn=[{code:"zh-CHS",name:"中文"},
		{code:"ja",name:"日文"},
		{code:"en",name:"英文"},
		{code:"ko",name:"韩文"},
		{code:"fr",name:"法文"},
		{code:"ru",name:"俄文"},
		{code:"pt",name:"葡萄牙文"},
		{code:"es",name:"西班牙文"},
		{code:"vi",name:"越南文"}];

//翻译实例
var translate=function(){
	if(arguments.length<=0){
		return;
	}
	var toConding="en";
	var sourceText=arguments[0];
	if(arguments.length==2){
		toConding=arguments[1];
	};
	var toCode;
	for(var i=0;i<cn.length;i++){
		if(cn[i].name==toConding){
			toCode=cn[i].code;
			break;
		}
	};
	var appKey = '51e93c88d329e849';
	var key = 'K9Q38bCuJ0dGkRh5a9FXQB2CtiQ9aGhY';
	var salt = (new Date).getTime();
	var str1 = appKey + sourceText + salt +key;
	var sign = md5(str1);
	var _data="";
	mui.ajax({
	    url: 'http://openapi.youdao.com/api',
	    type: 'post',
	    dataType: 'jsonp',
	    async:false,
	    data: {
	        q: sourceText,
	        appKey: appKey,
	        salt: salt,
	        from: "auto",
	        to: toCode?toCode:"en",
	        sign: sign
	    },
	    success: function (data) {
	    	_data=data;
	    }
	});
	return JSON.parse(_data);
}















