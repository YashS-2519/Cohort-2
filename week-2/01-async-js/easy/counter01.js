function counter(count) {
  setInterval(() => {
    console.log(count++);
  }, 1000);
}

counter(1);
