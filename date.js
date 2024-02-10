//this file show how can we create our module

const today = new Date;

exports.getDate= function getDate () {
    const option = {
        weekday : "long",
        day: "numeric",
        month : "long"
    }
    return today.toLocaleDateString("en-US",option) //hi-IN for hindi
}

exports.getDay = function () {
    const option = {
        weekday : "long",
    }
    return today.toLocaleDateString("en-US",option) //hi-IN for hindi
}