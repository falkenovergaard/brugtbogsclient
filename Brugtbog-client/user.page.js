/**
 * Created by C.F. Overgaard on 21/11/2016.
 */
$(document).ready(function () {

    var $adsTableBody = $("#adsTableBody");
    data.forEach(function (book, i) {
    $adsTableBody.append(
        "<tr>" +
        "<td>" + ads.isbn + "</td>" +
        "<td>" + ads.bookTitle + "</td>" +
        "<td>" + ads.bookAuthor + "</td>" +
        "<td>" + ads.bookEdition + "</td>" +
        "<td>" + ads.rating + "</td>" +
        "</tr>");

});