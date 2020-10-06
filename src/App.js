import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <h1>react 開GithubPages</h1>
      <img className="logo" src={logo} />
      <h2>簡易流程</h2>
      <p className='text'>  
        安裝 npm,yarn,create-react-app --&#62;<br/>
        開啟終端機 cd 專案檔案 <span>create-react-app 專案名</span> --&#62;<br/>
        <span>npm start</span> 或 <span>yarn start</span> 確認完成無錯誤 --&#62;<br/>
        github建新專案 --&#62;<br/>
        再次開啟終端機 cd 專案 <span>npm gh-pages</span> 或 <span>yarn add gh-pages</span> --&#62;<br/>
        終端機<span>git add .</span> <span>git commit -m '敘述'</span><br/> 
        <span>git remote add origin github專案.git</span><br/>
        <span>git branch -M main</span><br/>
        <span>git push -u origin main</span> --&#62;<br/>
        至github專案settings的Github Pages 改Source後，複製Github Pages網址--&#62;<br/>
        編輯器開react專案的package.json新增<br/>
        <span>"homepage": "Github Pages網址"</span><br/>
        <span>"predeploy":"yarn build"</span><br/>
        <span>"deploy":"gh-pages -d build"</span><br/>
        --&#62;<br/>
        終端機<span>git add .</span> <span>git commit -m '敘述'</span> <span>yarn run deploy</span>
        --&#62;<br/>
        再次至github專案settings的Github Pages 改Source 'gh-pages'
        --&#62;<br/>
        完成 可以開始code      
      </p> 

      <h3>安裝 npm,yarn,create-react-app</h3>
      <hr/>  
      <p>
        NPM 是 Node Package Manager 的簡稱，可下載各種 Javascript 套件<br/>
        Yarn 是由 Facebook，Google，Exponent 和 Tilde 構建的新的 JavaScript 包管理器，安裝套件比 npm 來得快些<br/>
        create-react-app 是建立react開發環境工具<br/>
      </p>

      <h3>建立專案</h3>
      <hr/> 
      <p>開啟終端機 cd 專案檔案 <span>create-react-app 專案名</span>，完成後開github建新專案<br/></p> 
      <img src="https://i.imgur.com/uIDZNO9.png" width="600px" />
      <br/>
      <img src="https://i.imgur.com/vgapEI2.png" width="600px" />

      <h3>裝gh-pages</h3>
      <hr/> 
      <p>  
        再次開啟終端機 cd 專案 <span>npm gh-pages</span> 或 <span>yarn add gh-pages</span><br/>
        終端機<span>git add .</span> <span>git commit -m '敘述'</span> 
        <span>git remote add origin github專案.git</span>
        <span>git branch -M main</span>
        <span>git push -u origin main</span><br/>
      </p>
      <img src="https://i.imgur.com/gIjhVlR.png" width="600px" />
      <br/>
      <img src="https://i.imgur.com/xpZb0Ew.png" width="600px" />
      <br/>

      <h3>改settiings</h3> 
      <hr/> 
      <p>至github專案settings的Github Pages 改Source後，複製Github Pages網址<br/></p>
      <img src="https://i.imgur.com/174WWls.png" width="600px" />
      <br/>
      <img src="https://i.imgur.com/87rESZX.png" width="600px" />
      <br/>

      <h3>改package.json</h3> 
      <hr/> 
      <p>
        編輯器開react專案的package.json新增
        <span>"homepage": "Github Pages網址"</span>
        <span>"predeploy":"yarn build"</span>
        <span>"deploy":"gh-pages -d build"</span><br/>
        於終端機<span>git add .</span> <span>git commit -m '敘述'</span> <span>yarn run deploy</span><br/>
      </p>
      <img src="https://i.imgur.com/5rVh0H1.png" width="600px" />
      <br/>
      <img src="https://i.imgur.com/aVyz11T.png" width="600px" />
      <br/>
      <img src="https://i.imgur.com/earkrHi.png" width="600px" />
      <br/>

      <h3>再次更改settings</h3> 
      <hr/>
      <p>
        再次至github專案settings的Github Pages 改Source 'gh-pages'<br/>
        完成 可以開始code <br/>
        git 推送依然可以更新main <br/>
        用<span>yarn run deploy</span>更新gh-pages分支<br/>
      </p> 

      <img src="https://i.imgur.com/TE0xAQv.png" width="600px" />
      <br/>
      <img src="https://i.imgur.com/QCgtZs1.png" width="600px" />
      <br/>

      <h3>資料參考來源</h3> 
      <hr/>
      <a href="https://www.youtube.com/watch?v=ctLFWAanxcI">How to deploy a Create React App Website to GitHub Pages</a> 

    </div>
  );
}

export default App;

