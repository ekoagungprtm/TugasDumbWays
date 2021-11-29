function simbolBintang (jumlah) {
let n = jumlah;
let hasil = ''
for (let i = 1; i <= n ; i++)
{
    for (let j = 1; j <= n + 3; j++)
    {
        hasil += j;
        if (i === j)
        {
            hasil += "**";
            j += 2;
        }
    }
    hasil += '\n'
}
  return hasil
}

console.log(simbolBintang(4))
console.log(simbolBintang(5))
