var XLSX = require('xlsx');
var Jimp = require('jimp');


var workbook =   XLSX.readFile('Master.xlsx');
var sheet_name_list =  workbook.SheetNames;
var xlData =  XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

async function Tes() {
for (let i = 0; i < xlData.length; i++) {
    data1 = await xlData[i].a;
    data2 = await xlData[i].b;
    data3 = await xlData[i].c;
    compare(data1, data2, data3);
}

}

async function compare(nip, img1, img2 ){
try{
    const image1 = await Jimp.read(img1);
    const image2 = await Jimp.read(img2);
    console.log(nip +"--->" +`perbedaan ${Jimp.diff(image1, image2).percent}\n`);
}
catch (error){
 console.log(nip+'=> Data Tidak Ditemukan')
}
}


Tes();
