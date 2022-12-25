{
  "compilerOptions": {
    "module": "commonjs",
    "moduleResolution": "node",
    "pretty": true,
    "sourceMap": true,
    "target": "es6",
    "outDir": "./dist",
    "baseUrl": "./app",
    "rootDir": "./",
    "types": ["node"],
    "typeRoots": ["src/types/index.ts", "./node_modules/@types"],
    "strictNullChecks": false,
    "resolveJsonModule": true,
    "esModuleInterop": true
  },
  "include": ["**/*.ts", "**/*.json","typings/**/*",],
  "exclude": ["node_modules", "/tests"]
}

.babelrc
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
