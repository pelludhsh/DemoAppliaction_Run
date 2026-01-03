/*
const xlsx = require("xlsx");

function readExcelData(filePath, sheetName = "Sheet1") {
  const workbook = xlsx.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(worksheet);
  return jsonData;
}
  module.exports = { readExcelData };

*/
const XLSX = require("xlsx");

function getTestData(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets["TestData"];
  return XLSX.utils.sheet_to_json(sheet);
}

module.exports = { getTestData };



