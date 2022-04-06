export declare const jestConfig = "\nimport { pathsToModuleNameMapper, GlobalConfigTsJest } from \"ts-jest\";\nimport type { InitialOptionsTsJest } from \"ts-jest/dist/types\";\nimport ts from \"typescript\";\n\nconst compilerOptionsPaths = (() => {\n  const configFileName = ts.findConfigFile(\n    \"../\",\n    ts.sys.fileExists,\n    \"tsconfig.json\",\n  );\n  if (configFileName) {\n    const configFile = ts.readConfigFile(configFileName, ts.sys.readFile);\n    const option = ts.parseJsonConfigFileContent(\n      configFile.config,\n      ts.sys,\n      \"./\",\n    );\n    return option.raw.compilerOptions.paths;\n  }\n  return {};\n})();\n\nconst globals: GlobalConfigTsJest = {\n  \"ts-jest\": {\n    tsconfig: \"tsconfig.json\",\n    compiler: \"typescript\",\n  },\n};\n\nconst moduleNameMapper = pathsToModuleNameMapper(compilerOptionsPaths, {\n  prefix: \"<rootDir>\",\n});\n\nconst jestSetting: InitialOptionsTsJest = {\n  setupFiles: [\"<rootDir>/.jest/setupEnv.js\"],\n  globals,\n  moduleFileExtensions: [\"ts\", \"tsx\", \"js\", \"json\"],\n  rootDir: \".\",\n  roots: [\"<rootDir>\"],\n  modulePaths: [\"<rootDir>\"],\n  moduleNameMapper,\n  modulePathIgnorePatterns: [\"dist\"],\n  testRegex: \"\\.spec|\\.test\\.ts$\",\n  transform: {\n    \"^.+\\.ts$\": \"ts-jest\",\n  },\n};\n\nexport default jestSetting;\n\n";
//# sourceMappingURL=jestConfig.d.ts.map