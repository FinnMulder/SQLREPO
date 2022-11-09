import flowerImage from "../img/blauwebloem.jpg";
import pineappleImage from "../img/blauweananas.jpg";
import pepsiImage from "../img/Pepsi.jpg";
import luchtImage from "../img/lucht.jpg";
import schipImage from "../img/schip.jpg";

function chooseImage(inputFromPopup){
    let toBeAddedImage;
switch(inputFromPopup){
    case("Ananas"):
    toBeAddedImage = pineappleImage;
    break;
    case("Bloemen"):
    toBeAddedImage = flowerImage;
    break;
    case("Pepsi"):
    toBeAddedImage = pepsiImage;
    break;
    case("Schip"):
    toBeAddedImage = schipImage;
    break;
    default:
    toBeAddedImage = luchtImage;
    break;
}
return toBeAddedImage;

}

export default chooseImage;