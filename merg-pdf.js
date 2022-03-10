const { PDFNet } = require('@pdftron/pdfnet-node');

async function main() {
    for (let i = 1; i <= 2; ++i) {
        //const newDoc = await PDFNet.PDFDoc.create();
        const newDoc = await getDoc();
        await newDoc.save(
            'blank.pdf',
            PDFNet.SDFDoc.SaveOptions.e_remove_unused
        );
    }
}
PDFNet.runWithCleanup(
    main,
    'demo:1646902125694:7be688d0030000000086239167c48ec9cadacac11de3ea7042880bc07a'
).then(function () {
    PDFNet.shutdown();
});

async function getDoc() {
    const docUrl = await PDFNet.PDFDoc.createFromURL(
        'https://www.clickdimensions.com/links/TestPDFfile.pdf'
    );
    return docUrl;
}
