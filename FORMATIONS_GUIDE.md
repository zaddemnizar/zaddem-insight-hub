# Guide de gestion des formations - Zaddem Consulting

## 📋 Comment ajouter ou modifier une formation

Les formations sont gérées via le fichier **`src/data/formations.json`**. Ce fichier contient toutes les informations sur vos formations et se met à jour automatiquement sur le site.

### Ajouter une nouvelle formation

1. Ouvrez le fichier `src/data/formations.json`
2. Copiez un bloc de formation existant (tout ce qui est entre `{` et `}`)
3. Collez-le à la fin de la liste (avant le dernier `]`)
4. N'oubliez pas d'ajouter une virgule `,` après le bloc précédent
5. Modifiez les informations selon votre nouvelle formation

### Structure d'une formation

```json
{
  "id": "identifiant-unique",
  "slug": "url-de-la-formation",
  "title": "Titre de la formation",
  "category": "Excel",
  "shortDescription": "Description courte (2-3 lignes)",
  "image": "URL de l'image",
  "description": "Description complète",
  "objectives": [
    "Premier objectif",
    "Deuxième objectif"
  ],
  "program": [
    "Module 1",
    "Module 2"
  ],
  "prerequisites": "Prérequis nécessaires",
  "targetAudience": "Public cible",
  "duration": "3 jours (21 heures)",
  "price": "1200",
  "currency": "TND",
  "location": "Mahdia, Tunisie",
  "mode": "Présentiel",
  "date": "Novembre 2025",
  "trainer": "Nizar Zaddem"
}
```

### Modifier une formation existante

1. Ouvrez `src/data/formations.json`
2. Recherchez la formation à modifier (par son titre ou son id)
3. Modifiez les champs souhaités
4. Sauvegardez le fichier

Le site se mettra à jour automatiquement !

### Supprimer une formation

1. Ouvrez `src/data/formations.json`
2. Supprimez tout le bloc de la formation (de `{` à `}`)
3. Vérifiez que les virgules sont correctes (pas de virgule après la dernière formation)
4. Sauvegardez

## 🖼️ Images pour les formations

Vous pouvez utiliser :
- **Des images de Unsplash** : https://unsplash.com (gratuit)
- **Vos propres images** : placez-les dans `public/images/formations/` et utilisez `/images/formations/nom-image.jpg`

### Exemples d'URLs Unsplash par thème :

- **Excel/Tableurs** : `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80`
- **Power BI/Analytics** : `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80`
- **ERP/Technology** : `https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80`
- **Textile/Industry** : `https://images.unsplash.com/photo-1558769132-cb1aea3d8c7d?w=800&q=80`

## 📝 Exemple complet

Voici un exemple pour ajouter une formation "Python pour débutants" :

```json
{
  "id": "python-debutants",
  "slug": "python-debutants",
  "title": "Python pour Débutants",
  "category": "Programmation",
  "shortDescription": "Apprenez les bases de Python et créez vos premiers programmes.",
  "image": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80",
  "description": "Découvrez le langage Python, l'un des langages de programmation les plus populaires au monde.",
  "objectives": [
    "Comprendre les fondamentaux de la programmation",
    "Écrire et exécuter des scripts Python",
    "Manipuler des données avec Python",
    "Créer des programmes simples"
  ],
  "program": [
    "Introduction à Python et installation",
    "Variables, types de données et opérateurs",
    "Structures conditionnelles et boucles",
    "Fonctions et modules",
    "Manipulation de fichiers",
    "Projet final"
  ],
  "prerequisites": "Aucun prérequis en programmation nécessaire",
  "targetAudience": "Débutants, professionnels souhaitant s'initier à la programmation, étudiants",
  "duration": "5 jours (35 heures)",
  "price": "2000",
  "currency": "TND",
  "location": "Mahdia, Tunisie",
  "mode": "Présentiel ou en ligne",
  "date": "Mars 2026",
  "trainer": "Nizar Zaddem"
}
```

## ⚠️ Points d'attention

- **Ne modifiez pas** l'`id` ni le `slug` d'une formation déjà publiée (cela casserait les liens)
- Vérifiez que votre JSON est valide (pas de virgules en trop, guillemets corrects)
- Utilisez des images en format paysage (ratio 16:9 recommandé)
- Les prix sont en chiffres uniquement, sans espaces ni symboles

## 🚀 Alternative : Gestion via Notion ou Airtable

Pour une gestion encore plus simple sans toucher au code, nous pouvons connecter votre site à :
- **Notion** : créez une base de données Notion avec vos formations
- **Airtable** : gérez vos formations dans un tableur visuel
- **Google Sheets** : utilisez un tableau Google Sheet

Ces solutions permettent de gérer vos formations sans jamais ouvrir le code.

📧 Contactez **contact@zaddem-consulting.com** pour mettre en place cette solution.

---

**Zaddem Consulting** - www.zaddem-consulting.com
