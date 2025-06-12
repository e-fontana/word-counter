# Word Counter

This is a simple command-line tool built with Node.js to count the number of words in a text file.

## Features

* Counts words in a given text file.
* Supports both synchronous and asynchronous file reading.
* Uses a regular expression to accurately identify words, including those with numbers, hyphens, and apostrophes.

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/e-fontana/word-counter
    ```

## Usage

1.  Make sure you have Node.js installed.
2.  Run the main script from your terminal:
    ```bash
    node index.js
    ```
    The script will read `hinoTITAN.txt` and `test.txt` and print the word count for each to the console.

## Files

* `index.js`: The main script that orchestrates the file reading and word counting.
* `counter.js`: Contains the core `countWords` function.
* `fileReader.js`: Provides functions for reading files.
* `hinoTITAN.txt`: Sample text file.
* `test.txt`: Another sample text file used for testing.