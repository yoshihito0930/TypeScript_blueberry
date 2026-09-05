import { createInterface } from 'readline';

const rl = createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question('数値を入力してください:', (line) => {
    const num = Number(line);
    if (!Number.isNaN(num)) {
        console.log(num, "はNaNではありません");
    }
    rl.close();
});