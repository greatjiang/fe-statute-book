# TCP三次握手
三次握手（Three-Way Handshake）用于建立一个可靠的TCP连接，确保连接双方都已准备好进行通信并且可以互相接收数据。

1.客户端发送SYN包   
2.服务器收到SYN包，发送一个SYN-ACK包   
3.客户端收到SYN-ACK包后，发送一个ACK包。  

经过这三次握手，客户端和服务器之间的连接就建立起来了，双方可以开始传输数据。

通过三次握手，TCP 协议确保了连接的可靠性和准备状态，为后续的数据传输打下了基础。

## SYN/SYN-ACK/ACK
用于连接建立过程的三种控制信号。

SYN---Synchronize   
  通知服务器客户端希望开始一个新的TCP链接。

SYN-ACK---Synchronize-Acknowledge   
  当服务器收到客户端的 SYN 包后，它会返回一个带有 SYN 和 ACK 标志的数据包。

ACK  
  客户端收到服务器的 SYN-ACK 包后，会发送一个带有 ACK 标志的数据包。
这个 ACK 包确认了服务器的序列号，表示连接建立完成。