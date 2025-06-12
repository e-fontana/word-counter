import { countWords } from "./counter.js";
import { fileReaderAsync, fileReaderSync } from "./fileReader.js";

async function readFileAndCountWords(filePath) {
    const asyncReaderTestContent = await fileReaderAsync(filePath);
    const syncReaderTestContent = fileReaderSync(filePath);

    console.log(`Counting words in the file: ${countWords(syncReaderTestContent)}`);
    console.log(`Counting words in the async file: ${countWords(asyncReaderTestContent)}`);

    return {
        asyncContent: {
            content: asyncReaderTestContent,
            wordCount: countWords(asyncReaderTestContent)
        },
        syncContent: {
            content: syncReaderTestContent,
            wordCount: countWords(syncReaderTestContent)
        }
    };
}

const TEST_FILE_PATH = './test.txt';
const MAIN_FILE_PATH = './hinoTITAN.txt';

await readFileAndCountWords(MAIN_FILE_PATH);
await readFileAndCountWords(TEST_FILE_PATH);
