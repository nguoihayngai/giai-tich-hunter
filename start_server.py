#!/usr/bin/env python3
import http.server
import socket
import socketserver
import os

PORT = 8080
WEB_DIR = os.path.dirname(os.path.abspath(__file__))


def get_lan_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = "127.0.0.1"
    finally:
        s.close()
    return ip


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WEB_DIR, **kwargs)


if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    lan_ip = get_lan_ip()
    with socketserver.TCPServer(("0.0.0.0", PORT), QuietHandler) as httpd:
        print("=" * 60)
        print("🚀 GIẢI TÍCH HUNTER (Web + Android PWA) ĐÃ KHỞI ĐỘNG!")
        print(f"👉 Mở trên máy tính:       http://localhost:{PORT}")
        print(f"📱 Mở trên Android (Wi-Fi): http://{lan_ip}:{PORT}")
        print("=" * 60)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nĐã dừng server.")
