# 快速入门

## CI/CD流程概览
1. 确保您有可用的 runner 运行您的作业。
2. 在仓库的根目录下创建一个 .gitlab-ci.yml 文件。该文件是您定义 CI/CD 作业的地方。

### 确保您有可用的 runner
runners 是运行 CI/CD 作业的代理。  

### 创建 .gitlab-ci.yml 文件
.gitlab-ci.yml 文件是一个 YAML 文件，您可以在其中配置 GitLab CI/CD 的特定指令。  

在此文件中，您定义：  
runner 应执行的作业的结构和顺序。  
runner 在遇到特定条件时应做出的决定。  
