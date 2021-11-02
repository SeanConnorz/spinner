const animation = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let delay = 200;

for (let item of animation) {
  setTimeout(() => {
    process.stdout.write(`\r${item}`);
  }, delay);
  delay += 200;
} 