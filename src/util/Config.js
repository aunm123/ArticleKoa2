
function url(action, params= {} ,method = 'POST') {
	return {
		uri: 'http://localhost:8080'+action,
		method: method,
		formData: params,
	}
}

module.exports = {
	reqUrl : url
};