# Node.js lts image
FROM node:lts

# ワーキングディレクトリを指定
WORKDIR /usr/src/app

# 同一ディレクトリ内のファイルを全てコピー
COPY . .

# パッケージをインストール
RUN npm install

# 3000番ポートでリッスン(※必要に応じて変更すること)⇛5173へ
EXPOSE 5173

# React の起動
CMD ["npm", "run", "dev"]