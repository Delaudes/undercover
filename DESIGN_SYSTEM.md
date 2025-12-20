# Design System - Undercover

## Couleurs

### Palette principale

- **Background**: `bg-gray-900` (#111827)
- **Surface**: `bg-gray-800` (#1F2937)
- **Surface variant**: `bg-gray-700` (#374151)
- **Primary**: `bg-emerald-600` (#059669)
- **Primary hover**: `bg-emerald-500` (#10B981)
- **Text primary**: `text-gray-100` (#F3F4F6)
- **Text secondary**: `text-gray-400` (#9CA3AF)
- **Border**: `border-gray-700` (#374151)
- **Accent**: `text-emerald-500` (#10B981)

### États

- **Disabled**: `opacity-50 cursor-not-allowed`
- **Active**: `ring-2 ring-emerald-500`

## Typographie

### Titres

- **H1**: `text-4xl md:text-5xl font-bold text-gray-100`
- **H2**: `text-2xl md:text-3xl font-semibold text-gray-100`
- **H3**: `text-xl md:text-2xl font-medium text-gray-100`

### Corps de texte

- **Body**: `text-base text-gray-300`
- **Body large**: `text-lg text-gray-300` - Pour textes importants dans les cartes
- **Small**: `text-sm text-gray-400`
- **Label**: `text-sm font-medium text-gray-300`
- **Display**: `text-5xl font-bold` - Pour affichage de données importantes (cartes, scores)

## Composants

### Boutons

#### Bouton principal (Primary)

```html
<button
  class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
></button>
```

#### Bouton secondaire (Secondary)

```html
<button
  class="w-full bg-gray-700 hover:bg-gray-600 text-gray-100 font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
></button>
```

#### Bouton icône carré (Icon button)

```html
<button
  class="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-gray-100 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
>
  <span class="material-symbols-outlined text-2xl">icon_name</span>
</button>
```

#### Bouton icône adaptatif (Icon button adaptive)

```html
<button
  class="w-14 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-gray-100 rounded-lg transition-colors duration-200"
>
  <span class="material-symbols-outlined text-2xl">icon_name</span>
</button>
```

### Cartes

```html
<div class="bg-gray-800 rounded-xl p-6 border border-gray-700"></div>
```

#### Carte flip (3D)

```html
<div class="[perspective:1000px]">
  <div class="relative w-full aspect-[3/4] max-w-md mx-auto">
    <div
      class="w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
      [class.[transform:rotateY(180deg)]]="isFlipped"
    >
      <!-- Face avant (verso) -->
      <div
        class="absolute inset-0 [backface-visibility:hidden] bg-gray-800 rounded-xl border border-gray-700 flex flex-col items-center justify-center p-6"
      >
        <!-- Contenu verso -->
      </div>
      <!-- Face arrière (recto) -->
      <div
        class="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-emerald-600 rounded-xl flex flex-col items-center justify-center p-6"
      >
        <!-- Contenu recto -->
      </div>
    </div>
  </div>
</div>
```

#### Carte informative (Instructions)

```html
<div
  class="w-full h-full bg-gray-800 rounded-xl border border-gray-700 flex flex-col items-center justify-center p-8 gap-6"
>
  <span class="material-symbols-outlined text-emerald-500 text-6xl" aria-hidden="true"> info </span>
  <p class="text-gray-300 text-center text-lg leading-relaxed">
    Instructions ou message informatif
  </p>
</div>
```

### Listes

```html
<ul class="space-y-2">
  <li class="flex items-start gap-2">
    <span class="material-symbols-outlined text-emerald-500 text-lg flex-shrink-0">icon_name</span>
    <span class="text-gray-300 text-sm">Text</span>
  </li>
</ul>
```

### Barre d'actions fixe (Bottom action bar)

```html
<div class="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4">
  <div class="max-w-2xl mx-auto flex gap-3 items-stretch">
    <!-- Boutons -->
  </div>
</div>
```

## Espacement

- **Container**: `max-w-2xl mx-auto px-4 py-8`
- **Section spacing**: `space-y-8`
- **Element spacing**: `space-y-4`
- **Small spacing**: `space-y-2`
- **Card content spacing**: `gap-6` - Pour espacement vertical dans les cartes

## Icônes

- Utiliser Material Symbols Outlined
- Taille par défaut: `text-2xl`
- Taille grande (cartes): `text-6xl`
- Couleur: hériter du parent ou `text-emerald-500` pour accent

### Icônes utilisées

- **Règles du jeu**:
  - `visibility` - Mots secrets/révéler
  - `flag` - Objectif/but du jeu
  - `chat` - Discussion/description
  - `how_to_vote` - Vote/élimination
  - `emoji_events` - Trophée/victoire
- **Joueurs**: `group` - Groupe de personnes
- **Actions**:
  - `play_arrow` - Jouer/démarrer
  - `add` - Ajouter
  - `remove` - Supprimer
  - `visibility` - Voir/révéler
  - `arrow_forward` - Suivant/continuer
  - `help` - Aide/question
  - `home` - Accueil/retour
  - `info` - Information

## Layout

### Header fixe avec bouton et titre centré

```html
<header class="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-800 z-10">
  <div class="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
    <!-- Bouton à gauche -->
    <button
      class="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-gray-100 rounded-lg transition-colors duration-200"
    >
      <span class="material-symbols-outlined text-2xl">icon_name</span>
    </button>

    <!-- Titre centré -->
    <h1 class="flex-1 text-3xl md:text-4xl font-bold text-gray-100 text-center">Titre</h1>

    <!-- Spacer pour équilibrer -->
    <div class="w-12 flex-shrink-0"></div>
  </div>
</header>
```

### Container principal avec header et footer fixe

```html
<div class="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
  <!-- Header fixe -->
  <div class="flex-1 max-w-2xl mx-auto px-4 py-8 space-y-8 w-full pt-24 pb-24">
    <!-- Contenu -->
  </div>
  <!-- Footer fixe -->
</div>
```

### Container principal avec footer fixe

```html
<div class="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
  <div class="flex-1 max-w-2xl mx-auto px-4 py-8 space-y-8 w
```
