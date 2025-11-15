# Git 上传流程指南

## 完整的上传步骤

### 1. 进入项目目录
```bash
cd Zachary-YS.github.io
```

### 2. 查看更改状态
```bash
git status
```
这会显示哪些文件被修改、添加或删除。

### 3. 查看具体更改内容（可选）
```bash
git diff
```
这会显示文件的具体修改内容。

### 4. 添加文件到暂存区

**添加所有更改的文件：**
```bash
git add .
```

**或者只添加特定文件：**
```bash
git add 文件名
```

### 5. 提交更改
```bash
git commit -m "描述你的更改内容"
```
例如：
- `git commit -m "更新个人简介"`
- `git commit -m "修复导航栏样式"`
- `git commit -m "添加新的研究项目"`

### 6. 推送到 GitHub
```bash
git push origin main
```

### 7. 验证推送成功
推送成功后，GitHub Actions 会自动构建并部署你的网站。

---

## 完整示例流程

假设你修改了 `src/components/About.tsx` 文件：

```bash
# 1. 进入项目目录
cd Zachary-YS.github.io

# 2. 查看更改
git status

# 3. 添加更改的文件
git add .

# 4. 提交更改
git commit -m "更新关于页面的内容"

# 5. 推送到 GitHub
git push origin main
```

---

## 常用 Git 命令

### 查看提交历史
```bash
git log
```

### 撤销未提交的更改
```bash
# 撤销所有未提交的更改
git restore .

# 撤销特定文件
git restore 文件名
```

### 查看远程仓库信息
```bash
git remote -v
```

### 拉取远程最新更改
```bash
git pull origin main
```

---

## 注意事项

1. **每次推送后**，GitHub Actions 会自动构建和部署，通常需要 2-5 分钟
2. **查看部署状态**：访问 https://github.com/Zachary-YS/Zachary-YS.github.io/actions
3. **网站地址**：https://zachary-ys.github.io/
4. **提交信息要清晰**：使用有意义的提交信息，方便以后查看历史

---

## 如果遇到问题

### 推送被拒绝
如果提示需要先拉取远程更改：
```bash
git pull origin main
# 解决可能的冲突后
git push origin main
```

### 忘记提交信息
如果忘记写提交信息，可以使用：
```bash
git commit --amend -m "新的提交信息"
```


