require("dotenv/config");
const { env } = require("node:process");

function init() {
  const { TIMES } = env;
  let many_times = Number(TIMES ?? 2);

  for (let index = 0; index < many_times; index++) {
    console.log("App estupido rodou: %", index);
  }
}

init();
