const titles = document.querySelectorAll(".titleline");

if (titles) {
  for (const title of titles) {
    const marquee = document.createElement("marquee");
    for (const child of title.children) {
      marquee.appendChild(child.cloneNode(true));
    }
    title.parentNode.replaceChildren(marquee);
  }
}
