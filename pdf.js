/*
Reference https://www.pdftron.com/documentation/samples/node/js/PDFPageTest/
*/
const { PDFNet } = require('@pdftron/pdfnet-node');

async function main() {
    const newDoc = await PDFNet.PDFDoc.create();
    for (let i = 1; i <= 2; ++i) {
        const fname = 'blank' + i + '.pdf';
        console.log('Opening ' + fname);
        const currDoc = await PDFNet.PDFDoc.createFromURL(
            'https://www.clickdimensions.com/links/TestPDFfile.pdf'
        );
        const currDocPageCount = await currDoc.getPageCount();
        newDoc.insertPages(
            i,
            currDoc,
            1,
            currDocPageCount,
            PDFNet.PDFDoc.InsertFlag.e_none
        );
    }
    await newDoc.save('output.pdf', PDFNet.SDFDoc.SaveOptions.e_remove_unused);
}
PDFNet.runWithCleanup(
    main,
    'demo:1646902125694:7be688d0030000000086239167c48ec9cadacac11de3ea7042880bc07a'
).then(function () {
    PDFNet.shutdown();
});
