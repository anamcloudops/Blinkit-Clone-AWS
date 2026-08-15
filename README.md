# 🛒 Blinkit Clone AWS

<div align="center">

![AWS](https://img.shields.io/badge/AWS-EC2-orange?style=for-the-badge\&logo=amazonaws)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge\&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Framework-black?style=for-the-badge\&logo=express)

### 🚀 Blinkit Clone Backend Deployment on AWS EC2

*Built using Node.js, Express.js, Linux, and AWS Cloud*

</div>

---

# 📌 Project Overview

This project is a backend clone of Blinkit that demonstrates:

* ☁️ AWS EC2 Deployment
* 🐧 Linux Administration
* 🟢 Node.js Application Hosting
* 🚀 Express.js API Development
* 🔧 Security Group Configuration
* 📦 Package Management using npm

---

# 🛠️ Technologies Used

| Technology      | Purpose             |
| --------------- | ------------------- |
| 🟢 Node.js      | Runtime Environment |
| 🚀 Express.js   | Backend Framework   |
| ☁️ AWS EC2      | Cloud Hosting       |
| 🐧 Amazon Linux | Operating System    |
| 🔧 Git          | Version Control     |
| 📦 npm          | Package Management  |

---

# ☁️ AWS EC2 Setup

## Step 1: Launch EC2 Instance

Create an EC2 instance with:

* Amazon Linux 2023
* t3.micro (Free Tier Eligible)
* Create or Select Key Pair
* Configure Security Groups

---

# 🔒 Security Group Configuration

Allow the following inbound rules:

| Type       | Port | Purpose                 |
| ---------- | ---- | ----------------------- |
| SSH        | 22   | Connect to EC2 Instance |
| HTTP       | 80   | Web Traffic             |
| Custom TCP | 3000 | Node.js Application     |



---

# 🔑 Login to EC2 Instance

Open terminal and run:

```bash
ssh -i key.pem ec2-user@YOUR_PUBLIC_IP
```



---

# 📥 Update Server

```bash
sudo yum update -y
```

---

# 🟢 Install Node.js

Check Node Version:

```bash
node -v
```

Check npm Version:

```bash
npm -v
```

If Node.js is not installed:

```bash
sudo yum install nodejs -y
```

Verify installation:

```bash
node -v
npm -v
```

---

# 📂 Clone GitHub Repository

```bash
git clone https://github.com/yourusername/Blinkit-Clone-AWS.git
```

Move into project directory:

```bash
cd Blinkit-Clone-AWS
```

---

# 📦 Install Dependencies

Install Express and other packages:

```bash
npm install
```


---

# 🚀 Start Application

Run the server:

```bash
node server.js
```



---

# 🌐 Access Application

Open browser:

```text
http://YOUR_PUBLIC_IP:3000
```



---



# 📈 Project Workflow

```text
GitHub Repository
        │
        ▼
Clone to EC2
        │
        ▼
npm install
        │
        ▼
node server.js
        │
        ▼
Port 3000 Open
        │
        ▼
Access Through Browser
```

## Output

![](./Screenshot%202026-08-15%20173813.png)


