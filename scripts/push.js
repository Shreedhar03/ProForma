const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to execute Git commands
function gitCommand(command) {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    process.exit(1);
  }
}

// Prompt user for commit message
rl.question('Enter commit message: ', (message) => {
  // Add, commit, and push
  gitCommand('git add .');
  gitCommand(`git commit -m "${message}"`);
  gitCommand('git push origin master');

  // Close the readline interface
  rl.close();
});
