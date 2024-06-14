# CI/CD
CI/CD（持续集成和持续交付/持续部署）是一种软件开发实践和文化，旨在通过自动化的方式提高软件开发和交付的效率和质量。  

持续集成 (CI)  
持续交付 (CD)  
持续部署 (CD)  

## 注册runner
1. 在使用CI/CD前确保要有可用的runner

runner是运行CI/CD的代理

## 创建.gitlab-ci.yml

_有哪些配置关键字

## CI/CD概念
通过软件开发的持续方法，您可以持续构建、测试和部署迭代代码更改。  
持续方法的三种主要方式是：  
持续集成  
  对于每次推送到仓库，您可以创建一组脚本来自动构建和测试您的应用程序。  
  这种做法称为持续集成。  

持续交付  
  手动触发部署  

持续部署  
  不同于持续交付，这个是自动部署  

使用 GitLab CI/CD，您可以测试、构建和发布您的软件，而无需第三方应用程序或集成。

GitLab CI/CD工作流  
提交代码  
运行自动化脚本  
  构建和测试您的应用  
实施后按预期工作  
审核并批准您的代码  
将功能合并到默认分支  
自动化部署  

_DevOps？

# .gitlab-ci.yml文件
在.gitlab-ci.yml中，您可以定义：  
要运行的脚本  
要包含的其他配置文件和模板  
依赖项和缓存  
要按顺序运行的命令和要并行运行的命令  
将应用程序部署到的位置  
手动或者自动触发  

## 关键字参考
当在编辑您的 .gitlab-ci.yml 文件时，可以使用 CI Lint 工具来验证它。  

分为全局关键字和作业（job）关键字  

### 全局关键字
default  
stages  
  stages项的顺序定义了作业的执行顺序  
workflow  
  workflow:name 来定义流水线的名称  
    可输入：
      字符串  
      CI/CD变量  
      两者结合  

  workflows:rules  
    接受的关键字：
    if  
    when  
      指定当if规则为true时要做什么  
        always是运行  
        never是不运行  
    variables  
      如果未定义，则使用在别处定义的变量  


include  
  使用include在CI/CD配置中包含外部YAML文件  

  无论include关键字的位置如何，始终先求值，然后与.gitlab-ci.yml文件内容合并  

  可能的输入：include 子键：  
  >include:local  
  >include:project  
  >include:remote  
  >include:template  

_全局的variables应该是定义变量的意思  
### 作业关键字
略

# Runner
极狐GitLab Runner 是在流水线中运行作业的应用，与极狐GitLab CI/CD 配合运作。  
  