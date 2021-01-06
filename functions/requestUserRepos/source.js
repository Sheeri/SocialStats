exports = async function(username, repo){
  const fetch = require("node-fetch");
  const http = context.services.get('http');
  const response = await context.http.get({ url: `https://api.github.com/users/${username}/repos`,
    headers: {['Authorization']:["token ELIDED" ] } });
  // The response body is a BSON.Binary object. Parse it and return.
  return EJSON.parse(response.body.text());
 
};
