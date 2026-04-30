// Vite picks up these images at build-time. Map filenames to URLs.
const modules = import.meta.glob("../assets/products/*.png", {
  eager: true,
  import: "default",
});

const map = {};
for (const [path, url] of Object.entries(modules)) {
  const filename = path.split("/").pop();
  map[filename] = url;
}

export function productImage(filename) {
  return map[filename];
}
