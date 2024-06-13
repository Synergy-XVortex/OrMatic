# OrMatic

Ce projet, nommé OrMatic, est conçu pour suivre et enregistrer automatiquement le cours de l'or à partir d'un site web spécifique dans une feuille de calcul Google Sheets. Voici une description détaillée des fichiers et de leur fonctionnement :

# Fichier CoursOr
Ce fichier contient les fonctions nécessaires pour récupérer et mettre à jour automatiquement le prix de l'or dans une feuille de calcul Google Sheets.

1. fetchGoldPrice() :
    - Description : Fonction qui récupère le prix de l'or à partir d'une URL spécifique en utilisant UrlFetchApp et des expressions régulières pour extraire le prix du contenu de la page web.
    - Fonctionnalités :
        - Utilisation de UrlFetchApp.fetch() pour récupérer le contenu de l'URL.
        - Utilisation d'une regex pour extraire le prix de l'or du contenu HTML récupéré.
        - Conversion de la chaîne extraite en nombre pour obtenir le prix réel de l'or.

2. updateGoldPrice() :
    - Description : Fonction qui met à jour le prix de l'or dans une feuille de calcul Google Sheets et enregistre la date de cette mise à jour.
    - Fonctionnalités :
        - Appel à fetchGoldPrice() pour obtenir le prix actuel de l'or.
        - Récupération de la feuille active dans la feuille de calcul Google Sheets en cours.
        - Ajout du prix de l'or à la dernière ligne utilisée dans la colonne B.
        - Enregistrement de la date correspondante dans la colonne A.

3. setDailyTrigger() :
    - Description : Fonction qui crée un déclencheur quotidien pour mettre à jour automatiquement le prix de l'or tous les jours.
    - Fonctionnalités :
      - Utilisation de ScriptApp.newTrigger() pour créer un déclencheur qui appelle la fonction updateGoldPrice() tous les jours.
      - Configuration du déclencheur pour qu'il s'exécute tous les jours à la même heure.

# Initialisation du projet :
Pour utiliser le projet OrMatic, suivez ces étapes d'initialisation :

1. Configuration de Google Sheets :
    - Créez une nouvelle feuille de calcul Google Sheets ou utilisez une existante où vous souhaitez enregistrer le prix de l'or.

2. Configuration du script Google Apps Script :
    - Copiez le contenu du fichier coursOr dans le script Google Apps Script associé à votre feuille de calcul Google Sheets.
    - Sauvegardez le script et autorisez l'accès aux services Google nécessaires.

3. Configuration du déclencheur quotidien :
    - Appelez setDailyTrigger() une fois pour créer un déclencheur quotidien qui mettra à jour automatiquement le prix de l'or dans votre feuille de calcul tous les jours.

Avantages:
  - Automatisation Complète: Plus besoin d'intervention manuelle pour obtenir ou enregistrer les prix de l'or.
  - Fiabilité: Mise à jour quotidienne à la même heure, garantissant des enregistrements précis et réguliers.
  - Suivi Simplifié: Suivi des tendances du prix de l'or en consultant simplement une feuille de calcul Google.
  - Gain de Temps: Élimine la nécessité de rechercher manuellement les prix et de les saisir dans une feuille de calcul.

Applications Potentielles:
  - Investisseurs en Or: Surveiller les fluctuations quotidiennes du prix de l'or et prendre des décisions éclairées.
  - Analystes Financiers: Intégrer ces données dans leurs analyses pour étudier les tendances du marché de l'or.
  - Enseignement: Utilisation par les enseignants et les étudiants en finance pour des études de cas et des analyses de marché en temps réel.

# Auteur
Ce projet a été développé par Clément Vongsanga. Pour toute question, suggestion ou contribution, n'hésitez pas à ouvrir une issue ou à proposer une pull request sur GitHub.
