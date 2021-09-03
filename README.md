Traffic forwarder
=================

You need to access server B. But you can't access server B. 
Instead of You can access server A. And A can access B.

So You can install Forwarding from A and forward traffic from A to B.

Installation
------------

```sh
npm install auto-forwarding -g
```

How to use:
-----------

Create a forwarder:

```sh
forwarding <sourceIp>:<port> <destIp>:<port>
```