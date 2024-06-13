# Automatisation-de-la-r-cup-ration-du-prix-de-l-or

Résumé:
OrMatic est un script automatisé conçu pour récupérer quotidiennement le prix du lingot d'or de 10 grammes à partir du site web "Achat Or et Argent" et mettre à jour automatiquement une feuille de calcul Google avec le prix actuel et la date de récupération. Cet outil est idéal pour les investisseurs, analystes financiers et éducateurs souhaitant suivre facilement les fluctuations du prix de l'or.

Fonctionnalités Principales:

  1. Récupération Automatique du Prix de l'Or:
      - Utilisation de requêtes HTTP pour accéder au contenu de la page web et extraction du prix de l'or avec des expressions régulières.
  
  2. Mise à Jour Automatique de la Feuille de Calcul:
      - Ajout du prix de l'or dans la colonne B de la feuille de calcul Google et de la date correspondante dans la colonne A.
      - Les nouvelles entrées sont ajoutées à la dernière ligne disponible.
  
  3. Déclencheur Quotidien Automatique:
      - Mise en place d'un déclencheur quotidien qui exécute automatiquement la récupération et la mise à jour des données une fois par jour.
  
Fonctions Détaillées:

  1. fetchGoldPrice:
      - Description: Accède à la page web spécifiée, récupère son contenu, et utilise une expression régulière pour extraire le prix de l'or affiché.
      - Processus:
          - Envoie une requête HTTP à l'URL de la page.
          - Analyse le contenu de la page pour trouver le prix de l'or en utilisant une expression régulière.
          - Nettoie la chaîne extraite pour enlever les espaces, les virgules et le symbole "€".
          - Convertit la chaîne nettoyée en un nombre flottant représentant le prix de l'or.

  2. updateGoldPrice:
      - Description: Récupère le prix de l'or via fetchGoldPrice et met à jour la feuille de calcul Google avec le prix et la date actuelle.
      - Processus:
          - Appelle la fonction fetchGoldPrice pour obtenir le prix actuel de l'or.
          - Trouve la dernière ligne utilisée dans la colonne B de la feuille de calcul.
          - Ajoute le prix de l'or à la colonne B de la prochaine ligne disponible.
          - Ajoute la date actuelle à la colonne A de la même ligne.

  3. setDailyTrigger:
      - Description: Crée un déclencheur quotidien qui exécute updateGoldPrice une fois par jour.
      - Processus:
          - Utilise l'API de Google Apps Script pour créer un nouveau déclencheur basé sur le temps.
          - Configure le déclencheur pour s'exécuter tous les jours.


Avantages:
  - Automatisation Complète: Plus besoin d'intervention manuelle pour obtenir ou enregistrer les prix de l'or.
  - Fiabilité: Mise à jour quotidienne à la même heure, garantissant des enregistrements précis et réguliers.
  - Suivi Simplifié: Suivi des tendances du prix de l'or en consultant simplement une feuille de calcul Google.
  - Gain de Temps: Élimine la nécessité de rechercher manuellement les prix et de les saisir dans une feuille de calcul.

Applications Potentielles:
  - Investisseurs en Or: Surveiller les fluctuations quotidiennes du prix de l'or et prendre des décisions éclairées.
  - Analystes Financiers: Intégrer ces données dans leurs analyses pour étudier les tendances du marché de l'or.
  - Enseignement: Utilisation par les enseignants et les étudiants en finance pour des études de cas et des analyses de marché en temps réel.
  
Installation et Utilisation:

1. Configuration Initiale:
    - Ouvrez Google Sheets et créez une nouvelle feuille de calcul.
    - Accédez à Extensions > Apps Script

2. Ajout du Script:
    - Copiez le script dans l'éditeur Apps Script

3. Déclenchement Automatique:
    - Sauvegardez le script.
    - Exécutez la fonction setDailyTrigger une fois pour configurer le déclencheur quotidien.

Conclusion:
OrMatic est un outil puissant pour le suivi automatisé du prix de l'or, offrant une solution pratique et fiable pour surveiller les fluctuations quotidiennes du marché de l'or.
