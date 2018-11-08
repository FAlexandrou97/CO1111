//Brands:
const SAMSUNG = "Samsung";
const APPLE = "Apple";
const LG = "LG";
const SONY = "Sony";
const HUAWEI = "Huawei";
const ALCATEL = "Alcatel";

class Device {
    constructor(brand, name) {
        this._brand = brand;
        this._name = name;
    }
    get brand() {
        return this._brand;
    }
    get name() {
        return this._name;
    }
    set brand(value) {
        this._brand = brand;
    }
    set name(value) {
        this._name = name;
    }
}

var ALL_BRANDS = [
    SAMSUNG,
    APPLE,
    LG,
    SONY,
    HUAWEI,
    ALCATEL
];

//Devices:
var ALL_DEVICES = [
    new Device(SAMSUNG, "Galaxy S8"),
    new Device(SAMSUNG, "Galaxy S8 Plus"),
    new Device(SAMSUNG, "Galaxy S9"),
    new Device(SAMSUNG, "Galaxy S9 Plus"),
    new Device(SAMSUNG, "Galaxy Note 8"),
    new Device(SAMSUNG, "Galaxy Note 9"),
    new Device(SAMSUNG, "Galaxy Tab S4"),
    new Device(APPLE, "iPhone X"),
    new Device(APPLE, "iPhone 8 Plus"),
    new Device(APPLE, "iPhone 8"),
    new Device(APPLE, "iPhone 7"),
    new Device(APPLE, "iPhone 7 Plus"),
    new Device(APPLE, "iPhone 6"),
    new Device(APPLE, "iPad 2017"),
    new Device(APPLE, "iPad 2018"),
    new Device(APPLE, "iPad Mini 4"),
    new Device(LG, "G7 ThinQ"),
    new Device(LG, "Q7"),
    new Device(LG, "Q6"),
    new Device(LG, "V30"),
    new Device(LG, "K9"),
    new Device(SONY, "Xperia XZ2"),
    new Device(SONY, "Xperia XA2"),
    new Device(SONY, "Xperia XA1"),
    new Device(SONY, "Xperia XA1 Ultra"),
    new Device(HUAWEI, "P20 Pro"),
    new Device(HUAWEI, "P20 Lite"),
    new Device(HUAWEI, "Y7 Prime 2018"),
    new Device(HUAWEI, "Y6 2018"),
    new Device(HUAWEI, "Mate 10 Lite"),
    new Device(ALCATEL, "U5 HD Premium"),
    new Device(ALCATEL, "U5"),
    new Device(ALCATEL, "A5"),
];

//My code
var listElements = document.getElementsByClassName("list");
var brandOptionList = document.getElementById("brandOption");
var deviceOptionList = document.getElementById("deviceOption");

for (let element of listElements){
    element.style.border="2px solid blue";
    element.style.fontSize = "20px";
}

//Filling the brand list.
for(let i = 0 ; i<ALL_BRANDS.length; i++){
    var newBrandOption =  document.createElement("option");
    newBrandOption.text = ALL_BRANDS[i];
    newBrandOption.value = ALL_BRANDS[i];
    brandOptionList.appendChild(newBrandOption);
}

//Filling the Device list.
for(let i = 0; i<ALL_DEVICES.length; i++) {
    var newDeviceOption = document.createElement("option");
    newDeviceOption.text = ALL_DEVICES[i].name;
    newDeviceOption.value = ALL_DEVICES[i].name;
    deviceOptionList.appendChild(newDeviceOption);
}

//Function is called when the brand list is changed (function call is in Devices.html).
function brandOptionChange() {
    let selectedBrand = ALL_BRANDS[brandOptionList.selectedIndex];
    deviceOptionList.innerHTML = "";        //Clears the Device list.
    for(let i = 0; i<ALL_DEVICES.length; i++){
        if(selectedBrand === ALL_DEVICES[i].brand){      //Checks if the brand list item is equal to the device brand.
            newDeviceOption = document.createElement("option");     //if it is then create the device option(model) with the selected brand.
            newDeviceOption.text = ALL_DEVICES[i].name;
            newDeviceOption.value = ALL_DEVICES[i].name;
            deviceOptionList.appendChild(newDeviceOption);
        }
    }

}



