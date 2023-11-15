// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = {
  ...config,
  resolver: {
    sourceExts: ["js", "jsx", "json", "ts", "tsx", "cjs", "mjs"],
    assetExts: ["glb", "gltf", "png", "jpg"],
  },
};
