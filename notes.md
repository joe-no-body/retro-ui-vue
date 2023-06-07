Internet Archive has a book with more screens: https://archive.org/details/dynixguideforlib0000gilm/page/156/mode/2up?view=theater

This Foone thread has some more screenshots from the book: https://twitter.com/Foone/status/1032715414910853120

## Fonts

- I found a public domain font from the actual WY-60 terminal but I'm not sure if I like it -- feels too pixely: http://www.pentacom.jp/pentacom/bitfontmaker2/gallery/?id=6294
- Classic Console Neue feels a little too blocky: http://webdraft.hu/fonts/classic-console/
- PxPlus IBM VGA8 also feels blocky: https://int10h.org/oldschool-pc-fonts/fontlist/font?ibm_vga_8x16
- SperryPC 8x16 is almost right https://int10h.org/oldschool-pc-fonts/fontlist/font?sperrypc_8x16
  - [ ] apparently the pixel aspect ratio needs to be corrected to 5:6 for them to look correct. I tried doing this with `transform: scaleX(0.8333);` based on the CSS From int10h.org, but applying that to the whole page caused everything to look wrong, so this needs more investigation

## Dynix UI

The Dynix UI seems fairly consistent. There's a title bar on every screen with the date, system name, and time of day. Most (all?) prompts for input are displayed consistently in the footer. Help text may be displayed above and below the input prompt.

```
********************************************************************************
 DATE                             SYSTEM-NAME                            TIME
                               CURRENT-PAGE-TITLE

                                   HELP-TEXT

 Some text may be left aligned

                       Prompts seem to mainly be centered














 PRE-PROMPT

 PROMPT-FOR-USER-INPUT: [input area]
 COMMANDS-OR-OTHER-HELP-TEXT
********************************************************************************
```

## Components and layout

Right now only a generic menu layout is supported. The CSS requires HTML structured as follows:

```html
<div class="wrapper">
  <header>
    <ul>...</ul>
    <!-- .flex-push makes the element auto-expand to fill the available width -->
    <ul class="flex-push"></ul>
  </header>
  <main>
    Main content here
  </main>
  <footer></footer>
</div>
```

Right now, this layout is inflexibly coupled to the individual components. `App` wraps its content in `<div class="wrapper">`, while `AppHeader`, `HomeView`, and `PromptInput` each include `<header>`, `<main>`, and `<footer>` tags.