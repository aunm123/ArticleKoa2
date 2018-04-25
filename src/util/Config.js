
function url(action ,method = 'POST') {
	return {
		uri: 'http://localhost:8080'+action,
		method: method
	}
}

module.exports = {
	reqUrl : url
};