let host = 'http://179ny.com';
let imghost = 'http://179ny.com';
let apihost = host + ':8898';

// let host = 'http://localhost';
// let apihost = host + ':8090';

function url(action, params = {}, method = 'POST') {
	console.log("发送请求", apihost + action);
	return {
		uri: apihost + action,
		method: method,
		formData: params,
	}
}

module.exports = {
	reqUrl: url,
	imghost: imghost
};