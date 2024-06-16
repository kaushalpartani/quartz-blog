# Setting Up the Project with Separate Notes Repository

## Overview

To streamline the development and use of my notes across different devices, I decided to create a separate repository for storing all my notes. This decision wasn't driven by privacy concerns but by the practical need to use Obsidian-Git on my phone. Loading an entire Quartz directory, which can be quite large, would be too cumbersome, so separating out the vault itself was the best solution.

## Steps to Set Up

### 1. Create a Separate Notes Repository

1. Create a new repository for storing your notes. This will serve as the vault for your Obsidian notes.
2. Ensure that this repository is dedicated solely to your notes to keep it lightweight and focused.

### 2. Integrate the Vault Repository with Local Development

For local development, you need to add the vault repository as a submodule in your main project. Follow these steps:

1. Navigate to your main project directory in your terminal.
2. Add the vault repository as a submodule:
   ```bash
   git submodule add [URL_of_your_notes_repo] path/to/submodule
