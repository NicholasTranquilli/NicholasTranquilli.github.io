---
layout: post
title:  "Two Way Communication With Server and Client C++"
date:   2023-09-18 15:58:00 -400
categories: "Networking-Library"
repository: https://github.com/NicholasTranquilli/Networking-Lib
post-category-number: 2
---

In my last post, I described my basic server and client library setup.
Now it's time to finish the setup by implementing two way communication with the server and client, allowing the server to send messages and the client to get messages.

This is a fairly straightforward idea, first we will need some new functions.
Let's start in the Server:

<h3>The Server</h3>

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
	int GetFrom(SOCKET& client, char* msg, int size);

    // New function
	int SendTo(SOCKET& client, char* msg, int size);

	void PushClient(int id, SOCKET sock);
	void Monitor();
};
```

As you might notice we have added a new function called "SendTo".
This function, as the name implies, is responsible for sending messages to a specific client.
Now let's take a closer look:

```c++
// Server.cpp

int Server::SendTo(SOCKET& client, char* msg, int size)
{
    int iResult = send(client, msg, size, 0);

    return iResult;
}
```

As you can see, this function is a very simple wrapper for the winsock "send" function.
Lets look at the implementation of this function as it is used in "ClientSession":

```c++
// Server.cpp

void Server::ClientSession(Server* server, SOCKET client, int id)
{
    server->PushClient(id, client);

    try {
        char* data = new char[512];
        while (server->GetFrom(client, data, 512) > 0)
        {
            printf("Client %d: %s\n", id, data);

            // New code
            for (auto& nextClient : server->clients)
            {
                server->SendTo(nextClient.second, data, 512);
            }
        }
    }
    catch (...) {
        printf("error\n");
    }

    printf("Client %d disconnected...\n", id);
}
```

So now any time a client sends a message to the server, the server then sends that message back to all clients.
Now what if we don't want to send the message back to the original client?
Simple, just add a check in the for each loop like so:

```c++
for (auto& nextClient : server->clients)
{
    if (nextClient != client)
        server->SendTo(nextClient.second, data, 512);
}
```

This completes two way communication on the server side of this example.
Let's take a look at the client side.

<h3>The Client</h3>

```c++
// Client.h

class Client
{
    addrinfo* result;
    SOCKET connectSocket;

    const char* serverIP;
    const char* serverPort;

    // New static function
    static void GetSession(Client* client);

public:
	Client(const char* IP, const char* port);

    // New function
    int Get(char* out, int size);
    
    void Send(char* message);
    int Run();
};
```

We have added a new function called "Get".
This function is actually very simple, here is the code:

```c++
// Client.cpp

int Client::Get(char* out, int size)
{
    int iResult = recv(connectSocket, out, size, 0);

    return iResult;
}
```

Like most of the get and send functions I have made, this is also just a wrapper for a particular winsock function (in this case that function is "recv").
Where the real changes occur is in the new static function called "GetSession":

```c++
// Client.cpp

void Client::GetSession(Client* client)
{
    // Debug text
    printf("Client Listening...\n");
    while (true)
    {
        // Message buffer
        char* msg = new char[512];
        // Call Get
        client->Get(msg, 512);
        // Print message received
        printf("Received: %s\n", msg);
    }
}
```

Another pretty simple function although you may notice that it contains an infinite loop.
This is because this GetSession function is only responsible for receiving messages from the server.
Because of this, it will be run on its own thread simultaneously with the regular client.
This change is visible in the "Run: function:

```c++
// Client.cpp

int Client::Run()
{
    // Debug text
    printf("Client starting...\n");
    printf("Type something!\n");
    
    try {
        // string buffer
        std::string s;

        // Create thread with GetSession function ptr and pass current client ptr as an arg (aka "this")
        std::thread t(Client::GetSession, this);
        // Free thread to run on it's own
        t.detach();

        // Send an initial buffer
        while (true)
        {
            // Get user input
            std::getline(std::cin, s);
            // Send user input to client via send function
            this->Send((char*)s.c_str());
        }
    }
    catch (...) {
        // Catch all throws and print default error string
        printf("last error: %i\n", WSAGetLastError());
    }

    return 0;
}
```

Now that the thread is created and running at the same time as the client, we can now get and send messages at the same time.
Thus our two way communication from server to client is complete.

In my next post I will be talking about creating a packet structure so I no longer have to hardcode the size of the packet in so many different places. 
This also helps to better organize the data being sent and received.

