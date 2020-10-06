# react 開GithubPages

## 簡易流程
安裝 npm,yarn,create-react-app --><br>
開啟終端機 cd 專案檔案 `create-react-app 專案名` --><br>
`npm start` 或 `yarn start` 確認完成無錯誤 --><br>
github建新專案 --><br>
再次開啟終端機 cd 專案 `npm gh-pages` 或 `yarn add gh-pages` --><br>
終端機`git add .` `git commit -m '敘述'` 
`git remote add origin github專案.git`<br>
`git branch -M main`
`git push -u origin main` --><br>
至github專案settings的Github Pages 改Source後，複製Github Pages網址--><br>
編輯器開react專案的package.json新增
`"homepage": "Github Pages網址"`<br>
`"predeploy":"yarn build"`
`"deploy":"gh-pages -d build"`
--><br>
終端機`git add .` `git commit -m '敘述'` `yarn run deploy`
--><br>
再次至github專案settings的Github Pages 改Source 'gh-pages'
--><br>
完成 可以開始code 更新Github Pages依然至終端機`yarn run deploy`
--><br>
git 推送依然可以更新main <br>
用`yarn run deploy`更新gh-pages分支

### 安裝 npm,yarn,create-react-app
NPM 是 Node Package Manager 的簡稱，可下載各種 Javascript 套件<br>
Yarn 是由 Facebook，Google，Exponent 和 Tilde 構建的新的 JavaScript 包管理器，安裝套件比 npm 來得快些<br>
create-react-app 是建立react開發環境工具<br>

### 建立專案
開啟終端機 cd 專案檔案 `create-react-app 專案名`，完成後開github建新專案<br>
<img src="https://i.imgur.com/uIDZNO9.png" width="600px"></img>
<br>
<img src="https://i.imgur.com/vgapEI2.png" width="600px"></img>

### 裝gh-pages
再次開啟終端機 cd 專案 `npm gh-pages` 或 `yarn add gh-pages`<br>
終端機`git add .` `git commit -m '敘述'` 
`git remote add origin github專案.git`
`git branch -M main`
`git push -u origin main`<br>
<img src="https://i.imgur.com/gIjhVlR.png" width="600px"></img>
<br>
<img src="https://i.imgur.com/xpZb0Ew.png" width="600px"></img>
<br>

### 改settiings
至github專案settings的Github Pages 改Source後，複製Github Pages網址<br>
<img src="https://i.imgur.com/174WWls.png" width="600px"></img>
<br>
<img src="https://i.imgur.com/87rESZX.png" width="600px"></img>
<br>

### 改package.json
編輯器開react專案的package.json新增
`"homepage": "Github Pages網址"`
`"predeploy":"yarn build"`
`"deploy":"gh-pages -d build"`<br>
於終端機`git add .` `git commit -m '敘述'` `yarn run deploy`<br>
<img src="https://i.imgur.com/5rVh0H1.png" width="600px"></img>
<br>
<img src="https://i.imgur.com/aVyz11T.png" width="600px"></img>
<br>
<img src="https://i.imgur.com/earkrHi.png" width="600px"></img>
<br>

### 再次更改settings
再次至github專案settings的Github Pages 改Source 'gh-pages'<br>
完成 可以開始code <br>
git 推送依然可以更新main <br>
用`yarn run deploy`更新gh-pages分支<br>
<img src="https://i.imgur.com/TE0xAQv.png" width="600px"></img>
<br>
<img src="https://i.imgur.com/QCgtZs1.png" width="600px"></img>
<br>

### DEMO

[DEMO](https://uanankoi.github.io/exReactGithubPages/)

### 資料參考來源

[How to deploy a Create React App Website to GitHub Pages](https://www.youtube.com/watch?v=ctLFWAanxcI)