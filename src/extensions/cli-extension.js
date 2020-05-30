module.exports = toolbox => {
  function installPackages(props) {
    const {
      system: { which, spawn },
      print: { info }
    } = toolbox;

    info('STARTING PACKAGE INSTALLATION...');

    const npmPath = which('npm');

    return spawn(
      `cd ${props.project} && npm install`,
      {
        shell: true,
        stdio: 'inherit',
        stderr: 'inherit',
      }
    );
  }
  
  toolbox.installPackages = installPackages;
};
