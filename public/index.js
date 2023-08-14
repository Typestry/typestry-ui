const social = {
    spotify: { url: "https://open.spotify.com/album/5tGuHNvKJGT97QXkjDuHL8?si=AePd7DnBSX6L8hH4x8FRGw", image: "./assets/spotify.svg", alt: "listen to on spotify", title: "Spotify" },
    apple: { url: "http://itunes.apple.com/album/id/1702315264", image: "./assets/apple.svg", alt: "listen to on apple music", title: "Apple Music" },
    instagram: { url: "https://www.instagram.com/carriedbybees", image: "./assets/instagram.svg", alt: "vistit carried by bees profile on instagram", title: "Instagram" },
    bandcamp: { url: "https://carriedbybees.bandcamp.com/album/bliss", image: "./assets/bandcamp.svg", alt: "purchase on bandcamp", title: "Bandcamp" },
}

const tooltip = (title, element) => {
    const tooltip = document.createElement("div")

    tooltip.id = `tooltip-default-${title}`
    tooltip.role = "tooltip"
    tooltip.className = "absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    tooltip.textContent = title

    element.appendChild(tooltip)
}

window.onload = () => {
    const socialContainer = document.getElementById("#social")

    const elements = Object.values(social).map((item) => {
        const link = document.createElement("a");
        link.setAttribute("data-tooltip-target", `tooltip-default-${item.title}`);
        link.className = "h-full m-auto";
        link.href = item.url;
        link.setAttribute("aria-label", item.alt);

        const image = document.createElement("img");
        image.className = "h-10";
        image.src = item.image;
        link.appendChild(image);

        tooltip(item.title, link);

        return link
    })

    elements.forEach((el) => socialContainer.appendChild(el))
} 