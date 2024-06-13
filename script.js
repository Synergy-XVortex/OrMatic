function fetchGoldPrice() {
  var url = "https://www.achat-or-et-argent.fr/or/lingot-10g-or/3551";
  var response = UrlFetchApp.fetch(url);
  var content = response.getContentText();

  // Utilisation de regex pour extraire la valeur du cours de l'or
  var match = /<span class="font-weight-bold">([\d\s\.,€]+)<\/span>/.exec(content);
  var goldPriceStr = match ? match[1].replace(/[,\s€]/g, '') : "N/A"; // Supprimer les espaces, les virgules et le symbole "€"
  var goldPrice = parseFloat(goldPriceStr); // Convertir la chaîne en nombre
  
  return goldPrice;
}

function updateGoldPrice() {
  var goldPrice = fetchGoldPrice();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRowB = sheet.getRange("B:B").getValues().filter(String).length;
  
  // Ajouter le prix de l'or dans la colonne B à la dernière ligne utilisée
  sheet.getRange("B" + (lastRowB + 1)).setValue(goldPrice);
  
  // Ajouter la date dans la colonne A à la même ligne que le prix de l'or
  sheet.getRange("A" + (lastRowB + 1)).setValue(new Date());
}

function setDailyTrigger() {
  ScriptApp.newTrigger('updateGoldPrice')
      .timeBased()
      .everyDays(1)
      .create();
}
