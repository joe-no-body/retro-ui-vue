Internet Archive has a book with more screens: https://archive.org/details/dynixguideforlib0000gilm/page/156/mode/2up?view=theater

## Fonts

- I found a public domain font from the actual WY-60 terminal but I'm not sure if I like it -- feels too pixely: http://www.pentacom.jp/pentacom/bitfontmaker2/gallery/?id=6294
- Classic Console Neue feels a little too blocky: http://webdraft.hu/fonts/classic-console/
- PxPlus IBM VGA8 also feels blocky: https://int10h.org/oldschool-pc-fonts/fontlist/font?ibm_vga_8x16
- SperryPC 8x16 is almost right https://int10h.org/oldschool-pc-fonts/fontlist/font?sperrypc_8x16
  - [ ] apparently the pixel aspect ratio needs to be corrected to 5:6 for them to look correct. I tried doing this with `transform: scaleX(0.8333);` based on the CSS From int10h.org, but applying that to the whole page caused everything to look wrong, so this needs more investigation
