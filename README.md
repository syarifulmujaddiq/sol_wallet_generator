# Solana Wallet Generator Script

Script ini digunakan untuk membuat 100 wallet Solana secara otomatis dan menyimpan hasilnya ke dalam file `solana_wallets.txt`.

## **Prasyarat**
Pastikan Anda telah menginstal:
1. **Node.js** versi terbaru.
2. Pustaka yang diperlukan:
   - `@solana/web3.js`

## **Instalasi Dependensi**
Untuk menginstal pustaka yang diperlukan, jalankan perintah berikut:
```bash
npm install @solana/web3.js
```

## **Cara Menggunakan Script**
1. Simpan script berikut sebagai file `generate_wallets.js`.
2. Buka terminal dan jalankan perintah berikut:
```bash
node generate_wallets.js
```

## **Penjelasan Script**
- **`createWallet()`**: Fungsi untuk membuat pasangan kunci publik dan kunci rahasia (secret key) wallet Solana.
- **`wallets`**: Array yang menyimpan informasi 100 wallet.
- **`fs.writeFileSync('solana_wallets.txt', data)`**: Menyimpan 100 wallet ke dalam file `solana_wallets.txt` dengan format:

   **Contoh Format Output:**
   ```plaintext
   Wallet 1:
   Public Key: <public_key>
   Secret Key: <secret_key>
   ----------------------------------
   Wallet 2:
   Public Key: <public_key>
   Secret Key: <secret_key>
   ----------------------------------
   ```

## **Fungsi Utama Script**
### `createWallet()`
Fungsi ini membuat wallet Solana dengan:
- Public Key: Kunci publik untuk menerima transaksi.
- Secret Key: Kunci rahasia (dalam format Base64) untuk autentikasi.

### **Log Output**
Saat script dijalankan, Anda akan melihat log setiap wallet yang dibuat:
```bash
Wallet 1: Public Key: <public_key> | Secret Key: <secret_key>
Wallet 2: Public Key: <public_key> | Secret Key: <secret_key>
...
```

## **Hasil Output File**
File `solana_wallets.txt` akan berisi 100 wallet dengan public key dan secret key.

## **Penting:**
- Jangan bagikan file `solana_wallets.txt` ke siapa pun karena berisi kunci rahasia.
- Simpan file ini di lokasi yang aman untuk menghindari penyalahgunaan.

## **Lisensi**
Script ini bersifat open-source dan dapat digunakan sesuai kebutuhan, namun pastikan untuk menjaga keamanan kunci rahasia Anda.
