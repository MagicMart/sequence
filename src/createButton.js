const button = function(color) {
    let node = document.querySelector(`.${color}`);
    const obj = Object.create(button.prototype);
    obj.color = color;
    obj.node = node;
    return obj;
};

//button.prototype.clickable = false;

const buttons = {
    blue: button("blue"),
    green: button("green"),
    gold: button("gold"),
    red: button("red")
};

export default {
    button,
    buttons
};
