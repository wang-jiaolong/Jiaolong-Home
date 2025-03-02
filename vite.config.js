import imagemin from "vite-plugin-imagemin";

export default {
  plugins: [
    imagemin({
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.7, 0.9] },
      webp: { quality: 80 },
    }),
  ],
};