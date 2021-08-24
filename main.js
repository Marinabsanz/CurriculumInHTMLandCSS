const doc = new jsPDF();
let elementHTML = $('#content').html();
const specialElementHandlers = {
    '#elementH': function (element, renderer) {
        return true;
    }
};
doc.fromHTML(elementHTML, 15, 15, {
    'width': 170,
    'elementHandlers': specialElementHandlers
});

// Save the PDF
doc.save('sample-document.pdf');