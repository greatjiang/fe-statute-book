# 优化 GitLab CI/CD 配置文件
锚点、别名、合并、extends关键字  

## 锚点
YAML 有一项称为“锚点”的功能，您可以使用它在整个文档中复制内容。 

## 使用 extends 来重用配置部分
您可以使用 extends 关键字 在多个作业中重用配置。它类似于 YAML 锚点，但更简单，您可以使用 extends 和 includes。

## !reference 标签
使用 !reference 自定义 YAML 标签从其他作业部分选择关键字配置，并在当前部分中重用它。