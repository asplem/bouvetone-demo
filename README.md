# BouvetOne oktober 2022

Noen små favoritter for å bli mer effektiv i VS Code

## Rundt koden

### CLI for å åpne aktiv mappe i VSCode

```
code .
```

---

### Extension recommendations for workspace

![Workspace recommendations](/assets/workspace-recommendations.png)

Ved åpning av folder:
![Workspace recommendations](/assets/workspace-recommendations-2.png)

---

### Git changes som tre

![Git changes as tree](/assets/git-changes.png)

---

### VS Code Icons

Cmd + Shift + P => File Icon Theme

Før:
![Icons before](/assets/icons-before.png)

Etter:
![Icons after](/assets/icons-after.png)

---

### Skjul node_modules

Settings -> Søk på Exclude -> Add pattern -> "\*\*/node_modules"

![Exclude node_modules](/assets/node_modules.png)

Kanskje primært lurt å gjøre i workspace settings, men veldig praktisk om man irriterer seg over å ekspandere node_modules ved et uhell e.l.

---

### Opprette mappe og fil i samme operasjon

`New file`, ikke `New folder`.

![Type both folder and file name](/assets/create-both-1.png)

![Both are created](/assets/create-both-2.png)

---

### Quick open

`Cmd + P` eller `Ctrl + P` (Mac eller Windows)

---

## I koden

### Auto rename tag

Code har innebygget for HTML, men ikke JSX og TSX.

Extension: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag

---

### Emmett

Eksempler:

```
div>p:
<div>
<p>Cursor her</p>
</div>

Tabs>Tabs.List>(Tabs.Tab[value=""])*2:
<Tabs>
    <Tabs.List>
        <Tabs.Tab value="">Cursor her</Tabs.Tab>
        <Tabs.Tab value="">Og tabbe hit</Tabs.Tab>
    </Tabs.List>
</Tabs>
```

---

### Find all references

`Alt+Shift+F12` eller bare høyreklikk og `Find All References`

---

### Markere flere linjer, multi-cursor

---

### Shrink og expand selection

Expand: `Shift+Alt+Left arrow`
Shrink: `Shift+Alt+Right arrow`

---

### Paste JSON as code

Extension: https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype

To primærmåter:

- Åpne en JSON-fil, og så `Open quicktype for JSON` fra command palette
- Kopier JSON, åpne en ny fil og `Paste JSON as Code` fra command palette

---

### Colorize brackets

Måtte tidligere ha en extension, men er nå støttet av VS Code. Heter der Linked editing i settings.

![Colorized brackets](/assets/colorize-brackets.png)

---

### JavaScript Booster

---

## Kodeformatering og kodekvalitet

### Prettier

Extension: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

---

### ESLint

Extension: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
