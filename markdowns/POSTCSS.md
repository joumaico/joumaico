# Tailwind CSS

This guide will walk you through the steps to set up Tailwind CSS in your project using npm.

## Prerequisites

- Node.js and npm installed on your machine.

## Installation

1.  **Initialize a new npm project (if not already initialized):**

    ```bash
    npm init -y
    ```

    This command creates a `package.json` file with default values.

2.  **Install Tailwind CSS, PostCSS, and Autoprefixer:**

    ```bash
    npm install -D tailwindcss@3 postcss autoprefixer
    ```

3.  **Generate Tailwind CSS configuration files:**

    ```bash
    npx tailwindcss init -p
    ```

    This command creates two files:

    - `tailwind.config.js`: Configuration file for Tailwind CSS.

    - `postcss.config.js`: Configuration file for PostCSS.

    The `-p` flag ensures that the `postcss.config.js` file is also generated.

## Configuration

1. **Configure your `tailwind.config.js`:**

   Open the `tailwind.config.js` file and customize it according to your project's needs.

2. **Include Tailwind in your CSS:**

   Create a CSS file (e.g., `static/css/input.css`) and include the following Tailwind directives:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. **Building CSS with Tailwind:**

   To compile and watch for changes in your Tailwind CSS, run the following command:

   ```bash
   npx tailwindcss -i ./static/css/input.css -o ./static/css/output.css --watch --minify
   ```

   This command:

   - Takes the input CSS file from `./static/css/input.css`.
   - Generates the output file at `./static/css/output.css`.
   - Enables CSS minification, removing unnecessary spaces, comments, and reducing file size.
   - Watches for changes and rebuilds automatically.

4. **Link the generated CSS file in your HTML:**

   ```html
   <link rel="stylesheet" href="/static/css/output.css" />
   ```
