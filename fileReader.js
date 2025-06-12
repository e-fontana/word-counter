import fs, { promises as fsPromises } from 'fs';

export async function fileReaderAsync(path, encoding = 'utf-8') {
    try {
        return fsPromises.readFile(path, encoding);
    } catch (error) {
        console.error(`Error reading file at ${path}:`, error);
        return null;
    }
}

export function fileReaderSync(path, encoding = 'utf-8') {
    const file = fs.readFileSync(path, encoding);


    if (!file) {
        console.error(`Error reading file at ${path}`);
        return;
    }

    return file;
}