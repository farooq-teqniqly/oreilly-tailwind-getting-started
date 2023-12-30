import React from "react";

function Article() {
  return (
    <div className={`m-6 md:mx-auto p-9 space-y-6 md:w-1/2 xl:w-1/3 bg-sky-50`}>
      <p
        className={`first-letter:-mt-2 first-letter:mr-3 first-letter:float-left first-letter:text-7xl first-letter:font-bold first-letter:text-cyan-400 first-line:uppercase first-line:tracking-widest first-line:text-cyan-600`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius vitae ipsum et
        commodo. In scelerisque est magna, ut fringilla purus congue eu. Mauris id metus ac metus
        porta aliquet. Aliquam quam ipsum, consequat malesuada lectus nec, blandit condimentum enim.
        Donec varius mattis facilisis. Morbi rhoncus erat vel erat pellentesque suscipit. Nunc
        dictum euismod libero sed tristique.
      </p>
      <blockquote
        className={`px-4 py-2 block border-l-4 border-cyan-400 italic font-light bg-gradient-to-r from-teal-100 to-cyan-300`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius vitae ipsum et
        commodo. In scelerisque est magna, ut fringilla purus congue eu. Mauris id metus ac metus
        porta aliquet.
      </blockquote>
      <p className={`indent-6`}>
        Aliquam id nulla dignissim felis bibendum aliquam. Cras vulputate blandit semper. Nam quam
        dolor, tincidunt non odio ac, condimentum molestie justo. In ornare maximus tortor, aliquam
        consequat arcu sagittis id. Vivamus condimentum varius ante, pulvinar laoreet tortor
        dignissim ac. Curabitur egestas in arcu sit amet feugiat. Aenean interdum, purus eget
        sodales tincidunt, magna sem lobortis nunc, at porttitor arcu velit sed augue. Praesent
        porttitor nisl enim, eget sollicitudin ipsum porta a. Integer tincidunt, lorem sit amet
        gravida hendrerit, arcu felis convallis metus, vitae vehicula diam dolor vulputate sapien.
        Nulla finibus lectus nec porta faucibus. Praesent in massa sollicitudin, dignissim quam at,
        volutpat mauris. Morbi in turpis sapien. Morbi ante est, gravida vitae ipsum quis, pretium
        scelerisque massa.
      </p>
      <img
        className={`mr-3 w-1/2 float-left rounded`}
        src="https://source.unsplash.com/ZEfzyduAyJU"
        alt=""
      />
      <p className={`indent-6`}>
        Vestibulum congue felis at posuere commodo. Praesent sapien magna, aliquet ut efficitur et,
        luctus at neque. Donec vitae nunc convallis, maximus ex sit amet, consequat tellus. Aenean
        eleifend cursus urna, sed fermentum felis cursus eget. Sed accumsan hendrerit turpis at
        ullamcorper. Integer quam sapien, rutrum ac pharetra eget, maximus id lacus. Vivamus
        sollicitudin molestie hendrerit. Proin sem quam, tempus in felis et, elementum dignissim
        felis. Integer odio tellus, semper at commodo at, euismod id magna. Aenean nisl metus,
        maximus a eros sit amet, facilisis malesuada lorem. Mauris est tortor, accumsan ac aliquet
        et, sagittis vitae velit. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos.
      </p>
      <p className={`indent-6`}>
        Aenean scelerisque urna id dictum tempor. Pellentesque ipsum orci, convallis eget purus nec,
        placerat laoreet nulla. Nullam vitae lectus porta, lacinia neque at, rutrum felis. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, magna eget gravida
        lobortis, elit elit rutrum urna, at volutpat ex orci accumsan urna. Sed et ligula magna. Ut
        dignissim semper ligula, at lacinia mi dignissim non. In eleifend ultricies viverra. Nunc
        euismod ac lacus ac molestie. Nam sem lectus, malesuada a ipsum vitae, viverra condimentum
        elit. Ut at vulputate tortor, nec suscipit leo. In non dolor nec purus semper tempus:
      </p>
      <ul className={`ml-6 pl-6 space-y-3 list-disc marker:text-cyan-400 text-gray-600`}>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ul>
      <p>
        Pellentesque tincidunt non orci id congue. Donec blandit pulvinar leo et tincidunt. Sed
        venenatis venenatis justo, ut congue neque lobortis sit amet. Nam tempus vehicula nisi,
        vitae commodo magna condimentum id. In quis vehicula massa. Fusce id congue lorem. Duis
        imperdiet placerat metus, vitae hendrerit lorem sollicitudin sit amet. Integer varius justo
        non velit semper elementum. Donec scelerisque magna nibh, at efficitur elit hendrerit id.
        Aenean sagittis lectus odio, eu varius lectus vestibulum eget. Sed gravida mattis auctor.
      </p>
      <hr className={`border-cyan-600`}></hr>
      <div className={`flex pt-6`}>
        <img
          className={`mr-6 mb-6 w-24 h-24 rounded border-4 border-b-[16px] border-red-600`}
          src="https://source.unsplash.com/ZEfzyduAyJU"
          alt=""
        />
        <div>
          <p className={`-mt-3 font-semibold text-amber-900`}>David Smith</p>
          <p className={`mt-2 text-sm`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas{" "}
            <a
              className={`underline underline-offset-1 decoration-1 decoration-wavy decoration-cyan-600 hover:text-cyan-600`}
              href="https://xrolcddbqn.cx"
            >
              varius vitae
            </a>{" "}
            ipsum et commodo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Article;
