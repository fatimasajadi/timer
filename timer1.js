if (process.argv.slice(2).length === 0) {
  return false;
} else if (Number(process.argv.slice(2)) < 0) {
  return false;
} else {
  process.argv.slice(2).forEach((val) => {
    setTimeout(function() {
      process.stdout.write('an');

    }, val * 1000);

  });
}