# SSH免密登录

## 创建公钥私钥
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