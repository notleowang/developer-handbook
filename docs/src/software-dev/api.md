---
prev: false
next: false
outline: deep
---

# APIs

Everything about APIs and how it works.

## Overview

### What is an API?

- Stands for **Application Programming Interface**.
- APIs are mechanisms that enable two software components to communicate with each other using a set of definitions or protocols.
- The documentation of an API contains information on how to structure **requests** and **responses** for communication between two applications.

### Example usage of an API

Weather app on your phone "talks" to Weather Beuraeu Software System via APIs and shows you daily weather updates on your phone.

### Client and Server

- **Client**
  
  The application sending the request.

- **Server**
  
  The application sending the response.

## REST APIs

Stands for **Representational State Transfer**. Currently the most popular API architecture. Interchangeable with the term **RESTful API**.

1. The **client** sends requests to the server as data.
2. The **server** uses this client input to start internal functions.
3. The **server** returns output data back to the client.

### Principles

- **Uniform Interface**
  
  Indicates that the server transfers information in a standard format.

- **Statelessness**

  Refers to a communication method in which the server completes every client request independently of all previous requests.

- **Layered System**
  
  The client can connect to other authorized intermediaries between the client and server, and it will still receieve responses from the server. Servers can also pass on requests to other servers. Allows the possibility to run multiple layers such as security, application, and business logic, to fulfill client requests.

- **Cacheability**
  
  The process of storing some responses on the client or on an intermediary to improve server response time.

- **Code on Demand**
  
  Servers can temporarily extend or customize client functionality by transferring software programming code to the client. For example, the browser can highlight an incorrect input for a form.

### Benefits

- **Scalability**
  
  REST optimizes client-server interactions. Statelessness removes server load because the server does not have to retain past client request information. Cacheability helps with partially eliminating some client-server interactions. These features support scalability without causing communication **bottlenecks** that would reduce performance.

- **Flexibility**
  
  Changes at the server application do not affect the client application. The layering system increases flexibility even futher. For example, developers can make changes to a database layer without rewriting the application logic.

- **Independence**
  
  Various programming languages can be used in both the client and server applications without affecting the API design. It is also possible to change the underlying technology on either side without affecting the communication.

### HTTP Methods

RESTful APIs are often implemented by using the **Hypertext Transfer Protocol** (HTTP). An HHTP method tells the server what it needs to do to the resource.

- `GET`
  
  Clients use `GET` to access resources that are located at the specified URL on the server.

- `POST`
  
  Clients use `POST` to send data to the server.

- `PUT`
  
  Clients use `PUT` to update exisiting resources on the server.

- `DELETE`
  
  Clients use the `DELETE` request to remove the resource. Often requires the user to have appropriate authentication when trying to change server state.

### Authentication

RESTful web services must authenticate requests before it can send a response.

- **API keys**
  
  The server assigns a unique generated value to a first-time client. Whenever the client tries to access resources, it uses the unique API key to verify itself. Generally less secure because the client has to transmit the key, making it vulnerable to network theft.

- **OAuth**
  
  Combines passwords and tokens for a highly secure login access to any system. The server first requests a password and then asks for an additional token to complete the authorization process.