export const radio = [
    {
      name: 'Evropa 2',
      frequency: '88.6 FM',
      description:
        'Evropa 2 je nejposlouchanější česká komerční rádio mezi mladými posluchači. Vysílá hudbu z žebříčků, kterou si sami vybírají posluchači a nejnovější hity.',
      link: '/evropa2.html',
    },
    {
      name: 'Frekvence 1',
      frequency: '102.1 FM',
      description:
        'Frekvence 1 je česká soukromá rozhlasová stanice, která vysílá od roku 1991. Vysílá hudbu z žebříčků, kterou si sami vybírají posluchači a nejnovější hity.',
      link: '/frekvence1.html',
    },
    {
      name: 'Radiožurnál',
      frequency: '92.6 FM',
      description:
        'Radiožurnál je česká rozhlasová stanice Českého rozhlasu. Vysílá hudbu z žebříčků, kterou si sami vybírají posluchači a nejnovější hity.',
      link: '/radiozurnal.html',
    },
  ];

  //const polozka = radio[2];
export const renderStation = (indexStanice) =>  {
      const staniceElm = document.querySelector(".stanice");
      const frekvenceElm = document.querySelector(".frekvence");
      const popisElm = document.querySelector(".popis");

      staniceElm.textContent += radio[indexStanice].name;
      frekvenceElm.textContent += radio[indexStanice].frequency;
      popisElm.textContent += radio[indexStanice].description;
  }

export  const renderNavigation = () => {
    const seznamElm = document.querySelector(".seznam-linku");

    radio.forEach((prvek) => {
        const linkElm = document.createElement("li");
        const aElm = document.createElement("a");
        aElm.textContent = prvek.name;
        aElm.href = prvek.link;
        linkElm.appendChild(aElm)
        seznamElm.appendChild(linkElm)
})
}