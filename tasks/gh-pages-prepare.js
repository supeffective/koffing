const pkg = require('../package.json')
const { exec } = require("child_process");
const path = require("path");
const baseDir = path.resolve(__dirname + '/../');
const tmpDir = baseDir + '/tmp';
const codeDir = path.resolve(baseDir, pkg.ghPagesDeploy.directory);

const runCmd = (cmd) => {
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      //return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      //return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

const shellScript = ` rm -rf ${codeDir}/.git ${tmpDir} && \\
  mkdir -p ${tmpDir} && \\
  cp -R ${codeDir} ${tmpDir}/build && \\
  git clone ${pkg.ghPagesDeploy.repository} ${tmpDir}/gh-pages && \\
  cd ${tmpDir}/gh-pages && \\
  git checkout -b gh-pages && \\
  mv ${tmpDir}/gh-pages/.git ${codeDir}/.git && \\
  cd ${codeDir} && \\
  git add -A && \\
  git commit -m "${pkg.ghPagesDeploy.commitMessage}" && \\
  rm -rf ${tmpDir}
`

runCmd(shellScript);
