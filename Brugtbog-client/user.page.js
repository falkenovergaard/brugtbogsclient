/**
 * Created by C.F. Overgaard on 21/11/2016.
 */
$(document).ready(function () {


    SDK.Ad.getAds(function(err, ads){
        if(err) throw(err);

            var $adsTableBody = $("#adsTableBody");
            ads.forEach(function (ad) {

                $adsTableBody.append(
                    "<tr>" +
                    "<td>" + ad.isbn + "</td>" +
                    "<td>" + ad.bookTitle + "</td>" +
                    "<td>" + ad.bookAuthor + "</td>" +
                    "<td>" + ad.bookEdition + "</td>" +
                    "<td>" + ad.price + "</td>" +
                    "<td>" + ad.comment + "</td>" +
                    "<td>" + ad.rating + "</td>" +
                    "</tr>");
            });

        });
});