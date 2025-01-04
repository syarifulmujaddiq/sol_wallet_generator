// Script untuk membuat 100 wallet Solana menggunakan JavaScript
// Anda perlu menginstal paket @solana/web3.js terlebih dahulu:
// Jalankan perintah: npm install @solana/web3.js

const solanaWeb3 = require('@solana/web3.js');
const fs = require('fs');

// Fungsi untuk membuat wallet Solana
const createWallet = () => {
  const keypair = solanaWeb3.Keypair.generate();
  const publicKey = keypair.publicKey.toString();
  const secretKey = Buffer.from(keypair.secretKey).toString('base64');
  return {
    publicKey,
    secretKey
  };
};

// Membuat 100 wallet dan menyimpannya dalam array
const wallets = [];
for (let i = 0; i < 100; i++) {
  const wallet = createWallet();
  wallets.push(wallet);
  console.log(`Wallet ${i + 1}: Public Key: ${wallet.publicKey} | Secret Key: ${wallet.secretKey}`);
}

// Menyimpan hasil ke file
const data = wallets.map((wallet, index) => `Wallet ${index + 1}:\nPublic Key: ${wallet.publicKey}\nSecret Key: ${wallet.secretKey}\n----------------------------------\n`).join('');

fs.writeFileSync('solana_wallets.txt', data);

console.log("100 Wallet Solana berhasil dibuat dan disimpan di 'solana_wallets.txt'");
