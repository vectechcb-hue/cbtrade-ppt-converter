# 承邦有限公司｜一鍵簡報轉檔

獨立手機 PWA 專案。

- PPTX / PDF 上傳
- PNG / JPG Logo 上傳
- 獨立 Flask / Render 後端
- PPTX XML 清洗
- iPhone 原生分享／儲存
- Android 下載
- 可加入手機主畫面

## 新後端

後端程式位於 `backend/`。

Render 設定：
- Root Directory: `backend`
- Build Command: `pip install -r requirements.txt`
- Start Command: `gunicorn app:app --bind 0.0.0.0:$PORT --workers 1 --timeout 300`
- Health Check: `/health`

## 在 Render 建立新服務

此專案根目錄已包含 `render.yaml`，可用 Render Blueprint 建立。

手機 App 已改為「新後端優先、舊後端備援」。新後端部署完成後即可直接使用，不需要修改 App。

## GitHub Pages

`https://vectechcb-hue.github.io/cbtrade-ppt-converter/`
