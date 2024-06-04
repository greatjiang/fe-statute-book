# SSH免密登录

## 查看公钥私钥
一般公钥存放在 ~/.ssh目录下  
公钥：id_rsa  
私钥：id_rsa.pub  

### 其它文件
config  
  ssh用户配置文件默认在.ssh/config这个路径, 使用config文件之后, 无需再去记机器ip,密码,各种ssh参数,也不用再每次都敲各种参数或配置  

known_hosts  
  known_hosts 文件存储用户访问的主机的公钥
  当你通过SSH连接到一个新的远程服务器时，系统会提示你是否要将远程主机添加到 known_hosts 文件

## 创建公钥私钥
如果 ~/.ssh目录下没有，则需要自己手动创建  

```sh
ssh-keygen -t rsa -b 2048
```

-t 指定密钥类型  
-b 指定密钥长度  

## 添加
使用 ssh-copy-id 命令：
将公钥复制到远程服务器，使其可以识别你的本地机器：
  ```sh
  ssh-copy-id username@remote_host
  ```
  username 是远程服务器上的用户名。  
  remote_host 是远程服务器的 IP 地址或域名。  
  系统会提示你输入远程服务器的密码，输入后，公钥会自动添加到远程服务器的 ~/.ssh/authorized_keys 文件中。

你也可以手动复制公钥到远程服务器 ~/.ssh/authorized_keys 文件中

## 登录测试
```sh
ssh username@remote_host
```