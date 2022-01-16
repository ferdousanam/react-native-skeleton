Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

String.prototype.numericOnly = function () {
    return this.replace(/[^0-9]/g, '');
};

String.prototype.toTitleCase = function () {
    return this.toLowerCase().replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
        return p1 + p2.toUpperCase();
    });
};
