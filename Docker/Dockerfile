FROM cypress/browsers:node-20.9.0-chrome-118.0.5993.88-1-ff-118.0.2-edge-118.0.2088.46-1

# 日本語フォントのインストール
RUN apt-get update && apt-get install -y fonts-noto-cjk

# 非rootユーザーに切り替え
USER 1001
