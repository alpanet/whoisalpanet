# 🚀 Alpanet Resume Projesi

Bu proje **ShadCN/UI, Next.js ve TailwindCSS** kullanılarak geliştirilmiştir.

## 📌 Kullanılan Teknolojiler

- **Next.js** – React tabanlı framework  
- **TailwindCSS** – CSS framework  
- **ShadCN/UI** – UI bileşen kütüphanesi  
- **pnpm** – Daha hızlı ve verimli bir paket yöneticisi  

---

## 📥 Kurulum

Öncelikle, proje dosyalarını klonlayın:

```
git clone https://github.com/kullaniciadiniz/repo-adi.git
cd repo-adi
```

### 🔧 **1. pnpm Yükleme**
Bu projede `pnpm` kullanıyoruz. Eğer sisteminizde yüklü değilse, aşağıdaki adımları takip ederek kurabilirsiniz.

#### **➡ macOS için:**
**Homebrew ile yüklemek için:**
```
brew install pnpm
```
Homebrew yüklü değilse, önce aşağıdaki komutla yükleyebilirsiniz:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Daha fazla bilgi için: [brew.sh](https://brew.sh/)

#### **➡ Windows için:**
**Chocolatey ile yüklemek için:**
```
choco install pnpm
```
Chocolatey yüklü değilse, önce PowerShell üzerinden şu komutla yükleyebilirsiniz:
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
Daha fazla bilgi için: [chocolatey.org](https://chocolatey.org/install)

---

### 🔧 **2. Bağımlılıkları Yükleyin**
```
pnpm install
```

---

### 🚀 **3. Projeyi Çalıştırın**
Geliştirme modunda başlatmak için:
```
pnpm run dev
```
Proje çalıştırıldıktan sonra [http://localhost:3000](http://localhost:3000) adresinden erişebilirsiniz.

---

## 🛠️ **Ekstra Komutlar**
Build almak için:
```
pnpm run build
```
Static export almak için:
```
pnpm run export
```

---