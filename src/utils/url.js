export const getImageUrl = (url) => {
    return new URL('/images/' + url, import.meta.url).href
}