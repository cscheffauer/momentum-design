const fs = require('fs');
const path = require('path');

// todo: modify once decision is made on how versioning will exactly work (e.g. if we want to keep the same version in all packages)
const main = async () => {
  const packageJsonPath = path.resolve(process.cwd(), 'package.json');
  const packageJson = require(packageJsonPath);

  const dependencies = packageJson.dependencies || {};
  const devDependencies = packageJson.devDependencies || {};
  const peerDependencies = packageJson.peerDependencies || {};

  for (const dep in dependencies) {
      if (dependencies[dep].startsWith('workspace:')) {
          dependencies[dep] = `*`;
      }
  }

  for (const dep in devDependencies) {
    if (devDependencies[dep].startsWith('workspace:')) {
        devDependencies[dep] = `*`;
    }
  }

  for (const dep in peerDependencies) {
    if (peerDependencies[dep].startsWith('workspace:')) {
        peerDependencies[dep] = `*`;
    }
  }

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
};

main().catch((error) => {
    console.error(error);
    process.exit(1);
  });;