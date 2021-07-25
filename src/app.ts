import { Loader } from "@googlemaps/js-api-loader";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;
const mapElement = document.getElementById("map")! as HTMLDivElement;

const GOOGLE_GEOCODING_API_KEY = process.env.GOOGLE_GEOCODING_API_KEY ?? "";

const loader = new Loader({
  apiKey: GOOGLE_GEOCODING_API_KEY,
});

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  loader
    .load()
    .then((google) => {
      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ address: enteredAddress }, (results, status) => {
        if (status === "OK" && results![0].geometry?.location !== undefined) {
          const location = results![0].geometry?.location;
          const position = { lat: location.lat(), lng: location.lng() };
          const map = new google.maps.Map(mapElement, {
            center: position,
            zoom: 16,
          });
          new google.maps.Marker({
            position: position,
            map,
          });
        } else {
          throw new Error("座標を取得できませんでした");
        }
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

form?.addEventListener("submit", searchAddressHandler);
