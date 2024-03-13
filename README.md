# 將React App發布為GitHub Page

請參考原文 [詳細說明](https://github.com/gitname/react-gh-pages)

此方法使用 `create-react-app` ，也請參考關於 [Create React App](https://github.com/facebook/create-react-app) 的說明.

## 事前準備

確認本機已經有安裝 `Node.js`, `Git`，並且需要[GitHub](https://github.com/)帳號

### 新建GitHub Repository

1. 登入GitHub帳號
2. 前往[此連結](https://github.com/new) 創建新的儲存庫
3. 依指示填寫表格
4. 填妥後送出

此時，一個新的空儲存庫已經新增到你的 GitHub 帳號。

### 建立 React App

1. 打開終端機輸入以下指令

  ```bash
  npx create-react-app react-gh-pages
  // or
  yarn create react-app react-gh-pages
  ```

2. 當React App專案完成，進到該專案根目錄下

  ```bash
  cd react-gh-pages
  ```

### 安裝 `gh-pages` npm package

```bash
npm install gh-pages --save-dev
// or
yarn add -D gh-pages
```

### 在 `package.json` 加入 `homepage`

使用文字編輯器或vi工具進行編輯

```json
{
  "name": ...,
  "version": ...,
  "homepage": "https://gitname.github.io/react-gh-pages",
  ...
}
```

### 在 `package.json` 中新增部署相關的指令

1. 使用文字編輯器或vim打開 `package.json`
2. 在 `"scripts": {...}` 的地方，新增

```json
{
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build",
    ...
  }
  ...
}
```

### 新增遠端儲存庫

```bash
git remote add origin https://github.com/{username}/{repo-name}.git
```

## 將 React App 推送至 GitHub

```bash
yarn deploy
```

```bash
yarn deploy -- -m "Deploy React app to GitHub Pages"
```
