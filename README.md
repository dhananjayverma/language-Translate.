# Translate-REST-API (English to French)

# deploy link (Backend): https://translate-rest-api.onrender.com/api/translate


## Tech stack 
 #### Node js 
 ### express js 
 ### postman or Thunder Client (to check backend api post reqest)



<hr>

# Explain
Imports: The code imports necessary packages/modules:

express: This is the web framework for Node.js, simplifying the process of creating a server.
body-parser: This middleware is used to parse incoming request bodies in a middleware before handlers, available under the req.body property.
translate-google: This package is used for translating text.
cors: This middleware enables Cross-Origin Resource Sharing, allowing resources to be requested from another domain.
Server Setup:

It creates an instance of the Express application.
Defines the port number PORT as 5000.
Configures Express to use body-parser middleware to parse JSON bodies of incoming requests.

# Route:

It sets up a POST route at /api/translate.
When a POST request is made to this endpoint, it expects a JSON object with a text field in the request body.
If the text field is missing in the request body, it returns a 400 status code with an error message.
If the text field is present, it uses the translate-google package to translate the text from English to French.
It then sends back the translated text in the response with a 201 status code.

# Error Handling:
It includes a try-catch block to handle any errors that occur during translation.
If an error occurs, it logs the error to the console and sends a 500 status code with an error message in the response.
Server Start:

It starts the server, listening on the specified port (5000 in this case).
Once the server is running, it logs a message to the console indicating that the server is listening on the specified port.

<hr>