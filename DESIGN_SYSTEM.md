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
- **Small**: `text-sm text-gray-400`
- **Label**: `text-sm font-medium text-gray-300`

## Composants

### Boutons

#### Bouton principal (Primary)

```html
<button
  class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
></button>
```

#### Bouton icône (Icon button)

```html
<button
  class="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-gray-100 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
>
  <span class="material-symbols-outlined">icon_name</span>
</button>
```

### Cartes

```html
<div class="bg-gray-800 rounded-xl p-6 border border-gray-700"></div>
```

### Listes

```html
<ul class="space-y-3">
  <li class="flex items-start gap-3">
    <span class="material-symbols-outlined text-emerald-500 text-xl mt-0.5">icon_name</span>
    <span class="text-gray-300">Text</span>
  </li>
</ul>
```

## Espacement

- **Container**: `max-w-2xl mx-auto px-4 py-8`
- **Section spacing**: `space-y-8`
- **Element spacing**: `space-y-4`
- **Small spacing**: `space-y-2`

## Icônes

- Utiliser Material Symbols Outlined
- Taille par défaut: `text-2xl`
- Couleur: hériter du parent ou `text-emerald-500` pour accent

### Icônes utilisées

- **Règles du jeu**:
  - `description` - Document/texte
  - `person_search` - Recherche de personne/undercover
  - `chat` - Discussion/communication
  - `how_to_vote` - Vote/élimination
  - `refresh` - Répétition/continuation
  - `emoji_events` - Trophée/victoire
- **Joueurs**: `group` - Groupe de personnes
- **Actions**:
  - `play_arrow` - Jouer/démarrer
  - `add` - Ajouter
  - `remove` - Supprimer

## Responsive

- Mobile first approach
- Breakpoints:
  - `md:` pour tablettes (768px+)
  - `lg:` pour desktop (1024px+)
