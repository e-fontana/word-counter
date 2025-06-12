export function countWords(fileContent) {
    if (!fileContent) {
        console.error("No content to count words.");
        return 0;
    }

    const words = [...fileContent.matchAll(/[\p{L}0-9]+(?:[_'-][\p{L}0-9]+)*/gu)];

    return words.length;
}
