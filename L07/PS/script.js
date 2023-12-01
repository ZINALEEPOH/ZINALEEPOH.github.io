$(document).ready(function () {
    // Initialize tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Autocomplete for the search box
    var availableTags = ["HTML", "CSS", "PHP", "JavaScript", "Python", "Java", "iOS", "React"];
    $("#searchBox").autocomplete({
        source: availableTags
    });

    // Add click event for the avatar toggle
    $("#avatar").click(function () {
        toggleAvatarStatus();
    });

    // Add click event for the bookmark icon
    $(".card-footer").click(function () {
        addToBookmarks($(this).closest(".card"));
    });
});

function toggleAvatarStatus() {
    // Toggle the avatar status (online/offline)
    var avatarIcon = $("#avatar i.bi-person");
    avatarIcon.toggleClass("avatar-offline");
}

function addToBookmarks(card) {
    // Add logic to add the card to bookmarks
    // You can append the card to the Offcanvas body at the bottom of the page
    $("#bookmarksList").append(card.clone());
}
