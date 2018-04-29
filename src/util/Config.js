
function url(action, params= {} ,method = 'POST') {
	return {
		uri: 'http://localhost:8090'+action,
		method: method,
		formData: params,
	}
}

module.exports = {
	reqUrl : url
};