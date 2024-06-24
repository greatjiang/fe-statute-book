# .gitlab-ci.yml文件
在.gitlab-ci.yml中，您可以定义：  
要运行的脚本  
要包含的其他配置文件和模板  
依赖项和缓存  
要按顺序运行的命令和要并行运行的命令  
将应用程序部署到的位置  
手动或者自动触发  

## 关键字
当在编辑您的 .gitlab-ci.yml 文件时，可以使用 CI Lint 工具来验证它。  

分为全局关键字和作业（job）关键字  

## 全局关键字
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
## 作业关键字
hooks
> 使用 hooks 指定在作业执行的某些阶段在 runner 上执行的命令列表，例如在检索 Git 代码库之前。  

id_tokens  
> 使用 id_tokens 创建 JSON 网络令牌（JWT）通过第三方服务进行身份验证。  

image
> 使用 image 指定运行作业的 Docker 镜像。  

script
> 使用 script 指定 runner 要执行的命令。  

stage
> 使用 stage 定义作业在哪个 stage 中运行。  

extends
> 使用 extends 来重用配置 section。它是 YAML 锚点 的替代方案，并且更加灵活和可读。

rules  
>使用 rules 来包含或排除流水线中的作业。  

needs
> 使用 needs: 来不按顺序执行作业。

tags  
> 使用 tags 从项目可用的所有 runner 列表中选择一个特定的 runner。  

allow_failure  
> 使用 allow_failure 来确定当作业失败时，流水线是否应该继续运行。  

when  
> 使用 when 配置作业运行的条件。  

environment
> 使用 environment 定义作业部署到的环境。

cache ?
> 使用 cache 指定要在作业之间缓存的文件和目录列表。

dependencies ?
> 使用 dependencies 关键字定义要从中获取产物的作业列表。

artifacts  ?
> 使用 artifacts 指定在作业 succeeds, fails, 或 always 时附加到作业的文件和目录列表。

coverage ?
> 使用带有自定义正则表达式的 coverage 来配置如何从作业输出中提取代码覆盖率。

dast_configuration ?
> 使用 dast_configuration 关键字指定要在 CI/CD 配置中使用的站点配置文件和扫描程序配置文件。

retry
> 使用 retry 配置作业失败时重试的次数。如果未定义，则默认为 0 并且作业不会重试。

timeout
> 使用 timeout 为特定作业配置超时。如果作业运行的时间超过超时时间，作业将失败。

parallel
> 使用 parallel 配置并行运行的作业实例数。

trigger ?
> 使用 trigger 来声明一个作业是一个“触发器作业”，它启动一个下游流水线

interruptible
> 如果在作业完成之前新流水线启动时应取消作业，请使用 interruptible。

resource_group
> 使用 resource_group 创建一个资源组，以确保同一项目的不同流水线之间的作业是互斥的。

release
> 使用 release 创建一个发布。

secrets ?
> 

pages
> 使用 pages 定义一个 GitLab Pages 作业，将静态内容上传到极狐GitLab，然后将内容发布为网站。

inherit
> 使用inherit:来控制默认关键字和变量的继承。

variables
> 使用 variables 为作业定义自定义变量。












