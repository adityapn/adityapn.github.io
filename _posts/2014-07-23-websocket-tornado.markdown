---
layout: post
title:  "Websockets in Tornado"
date:   2014-07-23 15:08:46
categories: jekyll update
---
Reason
---
Last week I was working on some project and I had to implement a real time feature, so I was looking for a simple Python framework (supports non-blocking features) which helps to achieve real time (Websockets were enough in my case) and after a little research I went with Tornado for it's simplicity.

A brief introduction
---
Before diving into Tornado let me talk about websockets and how they work. Basically whenever you request a web server for a web page it just responds with data (html in most of the cases) and that's it your connection to the web server will terminate there.

But these days you see a lot of real time in web sites or web apps for example your Facebook's news feed or your email's inbox or any chat application where you connect to server once and then you never have to refresh your page to see new data.

So how does real time work?
---
There are various ways to achieve that like long polling, web sockets etc. Long polling is one of the widely used approch and it is little similar to normal http request but instead of terminating connection to web server you will wait until there are some changes so that server can push them to client.

What is Tornado?
---
Tornado is a Python web framework and asynchronous networking library, originally developed at FriendFeed. And these days you hear a lot about asynchronous , what asynchronous means is lets say you called a function a in typical programming language like Java, C++ etc. Then you have wait until that function returns back then only it goes to next line.

But imagine a case when you get a request and you have to process it and add it's information to database or you just want to log the request information in database and return back. But let's say database is busy and you do not want keep your user waiting while request is processing. So in case asynchronous programming model you just call a callback function with the information that you want to add or do some sort of action where user does not have to wait while the callback gets executed in the background. The way it works internally is beyond scope of this article, you can look up stuff like event loop, epoll and Tornado is open source and well documented so you look up the source code for better understanding.

What are websockets?
---
Websockets help to achieve bi-directional connection between browser and your server, what I mean by bi-directional is unlike http connection a web socket connection will not be closed, so when there is some change on the server then server can push that to the client through the same connection.

How to use web sockets in Tornado?
---
In Tornado web sockets are part of tornado.websocket, so first import this module then create a class which inherits from tornado.websocket.WebSocketHandler.

Basically there are 3 functions which are part of this. open, on_message and on_close are basic functions of websocket. Open will be called whenever a socket opens up and on_message will be called whenever you want to message to clients and on_close will be called when ever function is terminated. I have added source code [here](https://github.com/adityapn/simple-chat-in-tornado).

At client side you have websocket object which opens up to end point, then you open the connection then whenever someone clicks on send button then that data will be send via socket. On the server side we send that message all the clients who are active.

How to add this existing infrastructure?
---
Let's say you already have a web application where you use Apache or some sort of infrastructure and you want add this real time with the help of Tornado then you can solve this problem with the help of some queueing system. Whenever user opens a web page then a socket connection is opened to your Tornado service then whenever you want to send a notification to the user then add that to a queueing system then it calls the relevant Tornado service then it sends that notification to the client.

