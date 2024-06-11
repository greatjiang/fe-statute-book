# git

## Git Flow
Git Flow 是一种严格的分支模型，适用于大型项目和长周期开发。它定义了明确的分支结构和发布流程。

### 分支类型
main/master:生产环境分支  
develop:开发分支  
feature:开发新功能分支  
命名约定：feature/name。  
realease:预发布分支  
hotfix:紧急修复分支  

## 操作流程
1.feature/name -> develop
2.测试develop分支
3.测试通过 合并 develop-> main(或master)

## git revert和git reset区别


