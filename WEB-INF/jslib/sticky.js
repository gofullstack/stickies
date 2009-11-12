var update = function () {
    // Find the domain for this request
    var d = load("Domain/[?domain='" + this.domain + "']");

    // Don't update if none were returned
    if (typeof d !== "object" || !("length" in d) || d.length < 1) {
        throw new AccessError("The domain on which you are using Stickies! (" +
            this.domain + ") is not registered. Please go to " +
            "http:\/\/websticki.es\/ and sign up. The sticky was not saved.");
    }
};

Class({
    id : "Sticky",
    properties : {},
    "extends" : Object,
    prototype : {
        post : update,
        put : update,
        "delete" : update
    }
});

