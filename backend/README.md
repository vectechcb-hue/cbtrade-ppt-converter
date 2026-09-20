# 承邦一鍵轉檔後端

獨立的 Render Python/Flask 後端。

API:
- GET /health
- POST /convert
  - file: .pptx 或 .pdf
  - logo: PNG/JPG（PPTX 選填）

PPTX 會先進行 OOXML XML 清洗，再重新封裝；若有 Logo，會放到每張投影片右上角。
PDF 採原檔無損回傳，不假裝對 PDF 做 XML 清洗。

Render:
Root Directory: backend
Build: pip install -r requirements.txt
Start: gunicorn app:app --bind 0.0.0.0:$PORT --workers 1 --timeout 300
