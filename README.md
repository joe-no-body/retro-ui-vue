# retro-ui-vue

Trying to recreate this terminal UI: [https://en.wikipedia.org/wiki/Dynix_(software)#/media/File:Dynix-Main-Menu-via-Telnet.jpg]

- Fonts
  - I found a public domain font from the actual WY-60 terminal but I'm not sure if I like it -- feels too pixely: http://www.pentacom.jp/pentacom/bitfontmaker2/gallery/?id=6294
  - Classic Console Neue feels a little too blocky: http://webdraft.hu/fonts/classic-console/
  - PxPlus IBM VGA8 also feels blocky: https://int10h.org/oldschool-pc-fonts/fontlist/font?ibm_vga_8x16
  - SperryPC 8x16 is almost right https://int10h.org/oldschool-pc-fonts/fontlist/font?sperrypc_8x16#-
    - apparently the pixel aspect ratio needs to be corrected to 5:6 for them to look correct. I tried doing this with `transform: scaleX(0.8333);` based on the CSS From int10h.org, but applying that blindly to the whole page caused everything to look wrong

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
