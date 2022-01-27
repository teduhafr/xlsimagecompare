var XLSX = require('xlsx');
var Jimp = require('jimp');


var workbook = XLSX.readFile('Master.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
const a = [];
const b = [];
const c = [];
for (let i = 0; i < xlData.length; i++) {
        a.push(xlData[i].a);
        b.push(xlData[i].b);
        c.push(xlData[i].c);
};

for (let [index, val] of a.entries()) {
    compare(val, b[index], c[index]);

    async function compare(nip, img1, img2 )
    {
    const image1 = await Jimp.read(img1);
    const image2 = await Jimp.read(img2);
    console.log(nip +"--->" +`perbedaan ${Jimp.diff(image1, image2).percent}\n`);
    }
};


