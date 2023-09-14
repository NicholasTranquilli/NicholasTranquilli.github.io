---
layout: post
title:  "Basic Send and Receive in C++"
date:   2023-09-12 15:58:00 -400
categories: "Networking-Library"
repository:
post-category-number: 1
---
<h3>Introduction</h3>

This is the start of my simple networking library in C++.
I decided that the best way to make and test this library was to accomplish small goals along the way.
That being said, my first goal for this project was a simple chat application to demonstrate the send and receive functions.

Because i'm using windows, I will be using the winsock library which can be accessed via the following includes:

```c++
// Includes
#include <winsock2.h>
#include <ws2tcpip.h>
// Library
#pragma comment(lib, "Ws2_32.lib")
```

<h3>The Server Class</h3>

A basic server has only 2 main goals, sending and receiving data to and from clients.
Here is the basic layout of the Server class and I wil walk through it step by step.

```c++
// Server.h

class Server
{
    SOCKET listenSocket;
    std::map<int, SOCKET> clients;
    const char* port;
    int currentID;

    static void ClientSession(Server* server, SOCKET client, int id);

public:
    Server(const char* nPort);
    int GetFrom(SOCKET& client, char* out, int size);

    void PushClient(int id, SOCKET sock);
    void Monitor();
};
```

If we take a closer look at the constructor we will see that it is just
initializing winsock and storing the "nPort" parameter into the private variable "port".
This is all very standard winsock TCP initialization.

Now lets look at the "GetFrom" function:

```c++
// Server.cpp

int Server::GetFrom(SOCKET& client, char* out, int size)
{
    // Clear the buffer
    ZeroMemory(out, size);
    // Stores number of bytes sent or SOCKET_ERROR
    int iResult = recv(client, out, size, 0);
    // Return result
    return iResult;
}
```

A very simple function using the winsock provided "recv" function.
The recv function takes the client "SOCKET" which is a winsock struct that can be used to identify, send, and receive messages from network objects such as servers and clients.
recv uses the client parameter in order to check if this SOCKET has sent any messages.
If so, these messages are stored in the "out" buffer parameter.
The "size" parameter is a hardcoded buffer size (at the time of writing this 512 bytes) and all messages sent from the client match this size (more on that in the Client class section).

It's typical to see a fixed packet size in applications like this.
While dynamic packet size is possible and not too difficult to implement, it does not serve any benefit for me to implement this at this point.
That being said, it can be done by sending 2 separate packets, the first would be the packet header and the second would hold the data.
The packet header will have a fixed size and will store information about the packet including its size.

Next we have the "PushClient" function which is really just a wrapper for the "std::map::emplace" function.

```c++
// Server.cpp

void Server::PushClient(int id, SOCKET sock)
{
    clients.emplace(id, sock);
}
```

As I mentioned before this is a very simple function that matches a socket with an id and places it onto a map of clients which is conveniently named "clients".

Now let's take a look at the main function for this class, the "Monitor" function:

```c++
// Server.cpp

void Server::Monitor()
{
    // Use a dedicated listen socket to find incoming connections
    if (listen(listenSocket, SOMAXCONN) == SOCKET_ERROR)
        throw SOCKET_ERROR;

    // Simple debug text
    printf("Server listening...\n");

    // Buffer client socket
    SOCKET client = SOCKET_ERROR;
    // Accept next incoming connection and assign socket data to "client" variable
    while (client = accept(listenSocket, NULL, NULL))
    {
        // Create a new thread to communicate with the client (more about ClientSession later)
        std::thread t(Server::ClientSession, this, client, currentID);
        // Free thread to run independently
        t.detach();
        // More debug text
        printf("Client created, ID = %i\n", currentID);
        // Increment "ID" of the clients after a new one is added
        currentID++;
    }
}
```

I placed comments walking through each part of the code but i'm going to go into more detail about one major part, thread creation.
I create a new thread using the standard library "std::thread" class and passing it the "ClientSession" function. Let's take a closer look at that function.

```c++
// Server.cpp

void Server::ClientSession(Server* server, SOCKET client, int id)
{
    // Start by pushing the client onto the map of clients (see PushClient function)
    server->PushClient(id, client);
    // Try catch block for error checking and handling
    try {
        char* data = new char[512];
        // Get message from client and check for SOCKET_ERROR (result of -1)
        // Store message in "data" and print with printf
        while (server->GetFrom(client, data, 512) > 0)
            printf("Client %d: %s\n", id, data);
    }
    catch (...) {
        // Random debug text on failure
        // Will change in future for better error handling
        printf("l\n");
    }
    // Debug text
    printf("Client %d disconnected...\n", id);
}
```

As you can see all the previous functions we talked about come together in this function to communicate with the client.
Note that at this time the server does not send anything back to the client.
This will be added in a future update via a "SendTo" function.

<h3>The Client Class</h3>

To be continued...
