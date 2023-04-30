paste this into the config.json in the go project

{
  "server": {
    "debug": true,
    "http_debug": false,
    "http_demo": true,
    "http_dir": "web",
    "http_login": "demo",
    "http_password": "demo",
    "http_port": ":8083",
    "https": false,
    "https_auto_tls": false,
    "https_auto_tls_name": "",
    "https_cert": "server.crt",
    "https_key": "server.key",
    "https_port": ":443",
    "ice_servers": ["stun:stun.l.google.com:19302"],
    "log_level": "debug",
    "rtsp_port": ":5541",
    "token": {
      "backend": "http://127.0.0.1/test.php"
    },
    "defaults": {
      "audio": true
    }
  },
  "streams": {
    "pattern": {
      "channels": {
        "0": {
          "url": "rtsp://zephyr.rtsp.stream/pattern?streamKey=aa66a44690b4e01547608168c423765c",
          "debug": false,
          "audio": true
        }
      },
      "name": "pattern"
    }
  }
}
