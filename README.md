# Neon Tic-Tac-Toe ×O🎮

A modern, responsive Cyberpunk/Neon-themed Tic-Tac-Toe game built with **React**, **Vite**, and **CSS Grid**. Play locally against a friend or challenge an AI player!

------

## Features

- **Single Player vs AI:** Smart move selection with instant block and win logic.
- **Two Player Mode:** Pass-and-Play on the same device.
- **Responsive Layout:** Adaptive neon design that scales smoothly across mobile and desktop screens.
- **Winning Indicators:** Glowing highlights on winning cell combinations.
- **Game Status & Controls:** Dynamic game status display with one-click "Play Again" and mode-switching buttons.

------

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** CSS3 (CSS Grid, Flexbox, Custom Neon Glow Animations)
- **Linter:** [Oxlint](https://oxc.rs/)

## Live Demo
Coming soon!

-------

## 🛠 Getting Started Locally

### Prerequisites

Ensure you have **Node.js** (v20+ recommended) installed on your machine.

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/
    cd tic-tac-toe-react

2. **Install dependencies:**
    ```bash
    npm install

3. **Start the development server:**
    ```bash
    npm run dev

4. **Open in browser:**
    Navigate to http://localhost:5173 to see the app running live.

------

### Automated CI/CD Deployment

This project uses Github Actions to automatically build and deploy code directly to Github Pages whenever changes are pushed to the main branch.

The build process runs headlessly in the cloud - no need to manually commit or upload the compiled dist/ folder!

                |      | X
           _____|______|_____
              X |      | O
           _____|______|_____
                |      |
                |      | X
