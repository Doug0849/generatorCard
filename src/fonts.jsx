import { Global } from '@emotion/react';

const Fonts = () => (
	<Global
		styles={`
      /* latin */
      @font-face {
        font-family: "AS Circular";
        font-weight: 100;
        font-style: normal;
        font-display: fallback;
        src: url("https://resource.alaskaair.net/-/media/4E8D77C0D7A8411AB9C351C1EFF86681.woff2") format("woff2"), url("https://resource.alaskaair.net/-/media/CAAEEC88586944808EDE9B36A3460098.woff") format("woff");
      }
      @font-face {
        font-family: "AS Circular";
        font-weight: 300;
        font-style: normal;
        font-display: fallback;
        src: url("https://resource.alaskaair.net/-/media/A5558137DB0F4B818D85EBE44FDC542E.woff2") format("woff2"), url("https://resource.alaskaair.net/-/media/F4E82B6C6CBA46B4A322B4B99B2CBC63.woff") format("woff");
      }
      @font-face {
        font-family: "AS Circular";
        font-weight: 500;
        font-style: normal;
        font-display: fallback;
        src: url("https://resource.alaskaair.net/-/media/1DD02F55437F4346B7EF7D5A08326D71.woff2") format("woff2"), url("https://resource.alaskaair.net/-/media/2339807B68A344348447336D15035425.woff") format("woff");
      }

      @font-face {
        font-family: "Segoe UI";
        src: url("./fonts/SEGOEUI.ttf") format("TTF");
      }

      @font-face {
        font-family: "Roboto-Regular";", sans-serif;;
        src: url('./fonts/Roboto-Regular.ttf') format("TTF");
      }

      @font-face {
        font-family: "LufthansaHeadWeb-Thin";
        src: url('./fonts/LufthansaHeadWeb-Thin.woff2') format("woff2");
      }

      @font-face {
        font-family: "LufthansaHeadWeb-Light";
        src: url('./fonts/LufthansaHeadWeb-Light.woff2') format("woff2");
      }

      @font-face {
        font-family: "LufthansaHeadWeb-Bold";
        src: url('./fonts/LufthansaHeadWeb-Bold.woff2') format("woff2");
      }

      @font-face {
        font-family: "LufthansaTextWeb-Bold";
        src: url('./fonts/LufthansaTextWeb-Bold.woff2') format("woff2");
      }

      @font-face {
        font-family: "LUFTHANSATEXTWEB-REGULAR";
        src: url('./fonts/LUFTHANSATEXTWEB-REGULAR.TTF') format("TTF");
      }

      @font-face {
        font-family: "LufthansaTextWeb-Light";
        src: url('https://www.lufthansa.com/sk/en/homepage/etc/designs/dcep/clientlib-all/fonts/LufthansaTextWeb-Light.woff2') format("woff2");
      }
      `}
	/>
);

export default Fonts;
