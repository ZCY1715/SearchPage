# SearchPage

## 预览

![example](./image-20230319121208004.png)

👉 [点击这里](https://search.zcyblog.tk)

## 部署

使用 **Vercel**, 可以配置强制缓存, 页面访问速度超快

vercel.json
```json
{
  "headers": [
    {
      "source": "(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, s-maxage=604800, max-age=604800"
        }
      ]
    }
  ]
}

```

每周更新缓存一次，重新部署后可以`win + R`页面强制刷新