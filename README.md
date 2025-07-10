# 🌐 Serverless-Web-Application (Portfolio with View Counter)

This project is a personal portfolio website hosted on AWS using a fully serverless architecture. It includes a live view counter powered by **AWS Lambda**, **API Gateway**, and **DynamoDB** — all accessible from a static site hosted on **Amazon S3**.

---

## 🚀 Features

- 🎨 Static portfolio with HTML, CSS, and JavaScript
- ☁️ View counter backend using Lambda + DynamoDB
- 🌍 Hosted on S3 with optional CloudFront distribution
- 🔐 No domain required — uses AWS-provided endpoint

---

## 🧱 Architecture

```plaintext
[S3 Static Website] ← HTML/CSS/JS
        ↓
[script.js] → [API Gateway] → [Lambda Function] → [DynamoDB]
