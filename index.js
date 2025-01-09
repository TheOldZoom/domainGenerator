const fs = require("fs");
const readline = require("readline");

function readTldsFromFile() {
  const tlds = fs.readFileSync("domains.txt", "utf-8").split("\n");
  return tlds.filter((tld) => tld.trim() !== "");
}

function generateRandomDomain(tlds, domainLength, chars) {
  let randomChars = "";
  for (let i = 0; i < domainLength; i++) {
    randomChars += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  const randomTld = tlds[Math.floor(Math.random() * tlds.length)].toLowerCase();
  return `${randomChars}.${randomTld}`;
}

function printDomains(tlds, domainLength, chars, count, logToFile) {
  const domains = [];
  for (let i = 0; i < count; i++) {
    const domain = generateRandomDomain(tlds, domainLength, chars);
    console.log(domain);
    domains.push(domain);
  }

  if (logToFile) {
    const timestamp = new Date().toISOString();
    const logData = domains.join("\n");
    fs.appendFileSync("domains.log", `${logData}\n`);
    console.log("\nDomains have been logged to domains.log");
  }
}

function startInteractive() {
  const tlds = readTldsFromFile();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter the desired domain length (default is 3): ",
    (lengthInput) => {
      const domainLength = parseInt(lengthInput) || 3;

      rl.question(
        "Do you want domains with (1) Only letters, (2) Only numbers, or (3) Letters and numbers? Enter 1, 2, or 3: ",
        (choice) => {
          let chars = "";
          if (choice === "1") {
            chars = "abcdefghijklmnopqrstuvwxyz";
          } else if (choice === "2") {
            chars = "0123456789";
          } else {
            chars = "abcdefghijklmnopqrstuvwxyz0123456789";
          }

          rl.question(
            "How many domains do you want to print? ",
            (countInput) => {
              const count = parseInt(countInput) || 50;

              rl.question(
                "Enter the interval time in seconds to refresh (default is 30 seconds): ",
                (intervalInput) => {
                  const intervalTime = parseInt(intervalInput) * 1000 || 30000;

                  rl.question(
                    "Do you want to log the domains to a file? (yes/no): ",
                    (logChoice) => {
                      const logToFile = logChoice.toLowerCase() === "yes";

                      console.log("\nGenerated domains:");
                      printDomains(tlds, domainLength, chars, count, logToFile);

                      setInterval(() => {
                        printDomains(
                          tlds,
                          domainLength,
                          chars,
                          count,
                          logToFile
                        );
                      }, intervalTime);

                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
}

startInteractive();
