// Rod: This will optimize the image by reducing its image size

const getCroppedImageUrl = (url: string) => {

    // Sample how we normally get the url image with high definition
    // https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg

    // The idea is to add after the /media the crop size which it will end it up on something like this
    // https://media.rawg.io/media/crop/600/400/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg

    // The /media/crop/600/400 means 600 x 400 resolution 
    // So we need to add the /crop/600/400 after the media

    // This returns the position where it found the media/

    if (!url) return '';
    const target = 'media/'
    const index = url.indexOf(target) + target.length;
    const modifiedUrl = url.slice(0, index) + 'crop/600/400/' + url.slice(index);

    return modifiedUrl;
}

export default getCroppedImageUrl;