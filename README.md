# Projects By AI (PBAI)

Projects By AI (PBAI) is a web application that allows users to break down their project ideas into actionable steps. Simply input the project idea and the app will turn it into tasks and provide technology recommendations. It also allows exporting the project breakdown to PDF. Whether you're building a website, app, or a custom tool, this tool gives you a basic roadmap to get started. 

## Table of Contents

 * [Live Demo](#live-demo)
 * [Features](#features)
 * [Technologies Used](#technologies-used)
 * [How To Use](#how-to-use)
 * [How To Run The Project Locally](#how-to-run-the-project-locally)
 * [Future Improvements](#future-improvements)
 * [Project Structure](#project-structure)
 * [Contribution](#contribution)
 * [License](#license)
 * [Authors](#authors)

## Live Demo

You can check out the live version of the app here: [PBAI](https://pbai-xi.vercel.app/)

## Features

 * **Natural Language Understanding:** Just type in a short description of your project idea, and our app will automatically interpret and break it down.
 * **Tech Stack Suggestions:** Get quick recommendations on the technologies to use for your project.
 * **Downloadable PDF:** Save the project steps as a downloadable PDF for future use.
 * **Interactive UI:** Smooth animations and intuitive navigation for a pleasant user experience.
 * **Responsive Design:** The app works smoothly across different screen sizes and devices, including mobile and desktop.

## Technologies Used

 * **Frontend:**

    * **HTML5**, **CSS3**
    * **JavaScript** (ES6+)
    * [**Google Fonts**](https://fonts.google.com/) for fonts

 * **Backend API:**

     * [**AI21 Studio API**](https://www.ai21.com/) for text generation and project breakdowns

 * **Deployment:**
     * [**Vercel**](https://vercel.com/) for hosting

## How to Use

1. Open the app in your browser or visit the [live demo](https://pbai-xi.vercel.app/).
2. Enter your idea in the text area field: Input a brief description of your project (e.g., "I want to create an e-commerce website" or "I need a simple to-do app.").
3. Click the **"Convert Idea"** button or press Enter.
4. Idea breakdown: The app processes your input using **AI21 Studio** to extract key information and categorize your project.
5. Project Steps: The app suggests steps to build the project and the technologies you can use.
6. Download: Click the **"Download as PDF"** button to save the project plan to your device as PDF file.

## How to Run Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/omar-m2/PBAI
    ```
2. Open index.html in your browser.

## Future Improvements

 * **Advanced AI Integrations:** Improve the AI’s text generation with more contextual understanding, offering personalized project breakdowns for users.
 * **User Authentication:** Add user accounts so users can save project ideas, previous breakdowns, or favorite templates.
 * **Customizable Project Templates:** Allow users to select or customize project templates for specific types of projects (e.g., web apps, e-commerce, SaaS).
 * **Enhanced PDF Export:** Improve PDF export functionality, allowing users to choose specific sections, adjust formatting, or export to other file types like Word.
 * **Multi-Language Support:** Enable language selection for non-English users, allowing the app to generate project breakdowns in various languages.

## Project Structure

    PBAI/
    ├── api/
    |   └── ai21.js 
    ├── index.html
    ├── style.css
    ├── script.js
    ├── LICENSE.md
    └── README.md

## Contribution

Feel free to fork the repository and submit pull requests. All contributions are welcome! If you'd like to contribute:

**1. Visit the Repository:**
 * Navigate to the [GitHub repository](https://github.com/omar-m2/PBAI) to fork.

**2. Click on the Fork Button:**
 * In the top right corner of the page, click the Fork button. This will create a copy of the repository in your GitHub account.

**3. Clone Your Forked Repository:**
 * Open your terminal (or Git Bash) and run the following command, replacing YOUR_USERNAME with your GitHub username (and REPO_NAME with PBAI):
    ```bash
    git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
    ```
 * This will create a local copy of the repository on your machine.

**4. Create a New Branch:**
 * Navigate into the cloned directory, (replacing REPO_NAME with PBAI):
    ```bash
    cd REPO_NAME
    ```
 * Create a new branch for your changes:
    ```bash
    git checkout -b my-feature-branch
    ```
**5. Make Your Changes:**
 * Edit the files you want to modify using your preferred text editor or IDE.

**6. Add and Commit Your Changes:**
 * Once you've made your changes, add them to the staging area:
    ```bash
    git add .
    ```
 * Commit your changes with a descriptive message:
    ```bash
    git commit -m "Description of changes made"
    ```
**7. Push Your Changes to GitHub:**
 * Push your changes to your forked repository:
    ```bash
    git push origin my-feature-branch
    ```
**8. Create a Pull Request:**
 * Go back to the original repository on GitHub. You should see a prompt to create a pull request for your recently pushed branch. Click on Compare & pull request.
 * Provide a description of your changes and click Create pull request.

**9. Review and Discuss:**
 * Collaborate with the maintainers and other contributors by discussing your pull request. Make any necessary changes if requested.

**10. Merge Your Pull Request:**
 * Once your pull request is approved, it can be merged into the main branch of the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Authors

Omar Mostafa <omar.m.abdelhakim@gmail.com>
