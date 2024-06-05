启动ssh免密登录的时候，阿里云会关闭密码登录，这时候需要自己手动设置  
```sh
vim /etc/ssh/sshd_config
```
```sh
PermitRootLogin yes
PasswordAuthentication yes
```