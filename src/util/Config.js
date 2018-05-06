
function url(action, params= {} ,method = 'POST') {
	console.log("发送请求",'http://8.6.8.119:8080'+action);
	return {
		uri: 'http://149.28.20.156:8898'+action,
		method: method,
		formData: params,
	}
}

module.exports = {
	reqUrl : url
};