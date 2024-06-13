# 在阿里云上搭建Gitlab

## 系统版本
CentOS 7.9 64位 UEFI版

## 配置要求
硬件要求  
  最低配置（适用于少量用户或测试环境）：  
    CPU: 2 核  
    内存: 4 GB  
    存储: 10 GB 可用磁盘空间  

## 安装教程
https://help.aliyun.com/zh/ecs/use-cases/deploy-and-use-gitlab?spm=5176.28426678.J_HeJR_wZokYt378dwP-lLl.1.719b5181Wq9g3b&scm=20140722.S_help@@%E6%96%87%E6%A1%A3@@52857.S_BB1@bl+BB2@bl+RQW@ag0+hot+os0.ID_52857-RL_gitlab-LOC_search~UND~helpdoc~UND~item-OR_ser-V_3-P0_0#0ffcba34f9au1

## 遇见的问题
Waiting for GitLab to boot  
HTTP 502  
It can take up to a few minutes for GitLab to boot completely.  

This page will automatically reload every 5 seconds.  

成功安装 但是访问不了  
  由于我一开始的服务器配置是CPU: 2 核  内存: 2 GB 不满足gitlab最低配置。
  升级服务器的内存到4G就可以成功访问了。

## 登录
用户：root  
初始密码在gitlab的initial_root_password文件中  
  sudo cat /etc/gitlab/initial_root_password   

