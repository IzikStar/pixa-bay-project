
class Image {
    constructor(name, src, width, downloads, views) {
        this.name = name;
        this.src = src;
        this.width = width;
        this.downloads = downloads;
        this.views = views;
    }

    render() {
        const allImages = document.querySelector("#allImages");
        const image = document.createElement("div");
        image.classList = "image col-3 m-2";
        image.innerHTML = `
            <img src="${this.src}" width="${this.width}" " class="card-img-top" alt="${this.name}">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">Downloads: ${this.downloads}</p>
                <p class="card-text">Views: ${this.views}</p>
                <button class="btn btn-primary">Download</button>
            </div>`;
        
        const btn = image.querySelector('button');
        btn.addEventListener('click', () => {
            alert(`Cannot download ${this.name}`);
        });
        
        allImages.append(image);
    }
}