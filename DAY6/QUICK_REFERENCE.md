# Git & GitHub Quick Reference - Day 6

## 📋 One-Page Command Cheat Sheet

### Initial Setup (One Time)

```bash
# Check Git is installed
git --version

# Configure your identity (global)
git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"

# View your configuration
git config --global --list
```

---

## 🔧 Create & Configure Repository

### Create Local Repository
```bash
# Navigate to your project folder
cd /path/to/your/project

# Initialize Git
git init

# Check status
git status
```

### Connect to GitHub
```bash
# Add remote (after creating repo on GitHub)
git remote add origin https://github.com/USERNAME/repo-name.git

# Verify remote is added
git remote -v

# Rename branch to main (if needed)
git branch -M main
```

---

## 📝 Daily Workflow

### Make Changes
```bash
# Check what changed
git status

# See specific changes
git diff
```

### Stage Changes
```bash
# Stage all changes
git add .

# Stage specific file
git add filename.html

# Stage all files in folder
git add folder/
```

### Commit Changes
```bash
# Create commit with message
git commit -m "Brief description of changes"

# Example commits:
git commit -m "Fix: correct login button color"
git commit -m "Feature: add user profile page"
git commit -m "Refactor: improve HTML structure"
```

### Push to GitHub
```bash
# First push (sets up tracking)
git push -u origin main

# Subsequent pushes
git push

# Push specific branch
git push origin branch-name
```

### Pull from GitHub
```bash
# Get latest from GitHub
git pull

# Equivalent to:
git fetch
git merge
```

---

## 📊 Inspect & Review

### View History
```bash
# See all commits
git log

# See commits in one line
git log --oneline

# See commits from last 5 days
git log --since="5 days ago"

# See specific author
git log --author="Name"

# See specific number of commits
git log -n 5
```

### View Specific Commit
```bash
# Show details of commit
git show COMMIT-HASH

# Show specific file in commit
git show COMMIT-HASH:filename.html
```

---

## 🌿 Branch Operations

### View Branches
```bash
# List local branches
git branch

# List remote branches
git branch -r

# List all branches
git branch -a
```

### Create Branch
```bash
# Create new branch
git branch branch-name

# Create and switch to branch
git checkout -b branch-name
```

### Switch Branches
```bash
# Switch to existing branch
git checkout branch-name

# Switch to previous branch
git checkout -
```

### Merge Branches
```bash
# Switch to main first
git checkout main

# Merge feature branch into main
git merge feature-branch
```

### Delete Branch
```bash
# Delete local branch
git branch -d branch-name

# Force delete
git branch -D branch-name

# Delete remote branch
git push origin --delete branch-name
```

---

## 🔄 GitHub Remote Operations

### Remote Management
```bash
# List remotes
git remote

# List remotes with URLs
git remote -v

# Show remote details
git remote show origin

# Add remote
git remote add name url

# Remove remote
git remote remove name

# Rename remote
git remote rename old-name new-name
```

### Sync with Remote
```bash
# Fetch changes (no merge)
git fetch

# Fetch specific remote
git fetch origin

# Pull changes (fetch + merge)
git pull

# Pull with rebase
git pull --rebase
```

---

## ⚠️ Undo & Fix

### Undo Working Changes
```bash
# Discard changes in file
git checkout filename

# Discard all changes
git reset --hard HEAD

# See what you're throwing away
git diff
```

### Undo Staging
```bash
# Unstage file
git reset HEAD filename

# Unstage everything
git reset HEAD .
```

### Undo Commits
```bash
# Undo last commit (keep changes)
git reset HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Undo specific commit (create new commit)
git revert COMMIT-HASH
```

### Fix Last Commit
```bash
# Add forgotten files to last commit
git add forgotten-file.html
git commit --amend --no-edit

# Change commit message
git commit --amend -m "New message"
```

---

## 🔐 Authentication

### First Time Pushing
```bash
git push -u origin main

# Git will prompt:
Username: your-github-username
Password: your-personal-access-token-here
# (NOT your GitHub password)

# Credentials are cached automatically
```

### Update Credentials (Windows)
```bash
# Remove old credentials from Credential Manager
# Control Panel → Credential Manager → Windows Credentials
# Find and delete "git..." entries
# Next push will prompt for new credentials
```

### Generate Personal Access Token
1. Go to GitHub.com → Settings
2. Developer settings → Personal access tokens → Tokens (classic)
3. Generate new token
4. Check "repo" scope
5. Copy and save securely
6. Use as password when pushing

---

## 🛠️ Configuration

### View Configuration
```bash
# View global config
git config --global --list

# View local config
git config --local --list

# View specific setting
git config --global user.name
```

### Change Configuration
```bash
# Change user name
git config --global user.name "New Name"

# Change user email
git config --global user.email "new@email.com"

# Change default editor
git config --global core.editor "code"

# Add config value
git config --global color.ui true
```

### Edit Configuration File Directly
```bash
# Open global config in editor
git config --global --edit

# Open local config in editor
git config --local --edit
```

---

## 📁 File Management

### Add Files
```bash
# Stage all changes
git add .

# Stage specific file
git add filename.html

# Stage all HTML files
git add "*.html"

# Stage multiple files
git add file1.html file2.html

# Stage interactive (choose which changes)
git add -p
```

### Remove Files
```bash
# Remove file from Git (keep local copy)
git rm --cached filename

# Remove from Git and delete locally
git rm filename

# Remove entire folder
git rm -r folder/
```

### Rename/Move Files
```bash
# Rename file (Git way)
git mv oldname.html newname.html

# Move file to folder
git mv filename.html folder/filename.html
```

---

## 🚀 Useful Shortcuts & Tips

### Aliases (Create Custom Commands)
```bash
# Create shorter commands
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit

# Usage:
git st        # Instead of git status
git co main   # Instead of git checkout main
```

### View All Aliases
```bash
git config --global --get-regexp alias
```

### Finding Things
```bash
# Search commit messages
git log --grep="keyword"

# Search code changes
git log -S "search term"

# Find when code was added
git blame filename.html

# Find commits touching file
git log filename.html
```

---

## 🐛 Troubleshooting

### "Permission denied (publickey)"
```bash
→ Using SSH incorrectly
→ Solution: Use HTTPS instead: https://github.com/user/repo.git
```

### "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin [correct-url]
```

### "Your branch is ahead by X commits"
```bash
→ You committed locally but haven't pushed
→ Solution: git push
```

### "nothing to commit, working tree clean"
```bash
→ No changes to commit
→ Either: make changes or check status with git status
```

### "fatal: not a git repository"
```bash
→ You're not in a Git project folder
→ Solution: cd to folder with .git directory
         or git init to create new repo
```

### "Permission denied (password)"
```bash
→ Using wrong credentials
→ Make sure you're using Personal Access Token, not password
→ Update credentials in Credential Manager (Windows)
```

---

## 📊 Useful Information Commands

### Repository Status
```bash
# See everything
git status

# See summary
git status --short

# See branch tracking
git status -sb
```

### Show Differences
```bash
# Unstaged changes
git diff

# Staged changes
git diff --staged

# Between branches
git diff main feature-branch

# Between commits
git diff HASH1 HASH2

# Summary of changes
git diff --stat
```

### File History
```bash
# Who changed each line
git blame filename.html

# All commits for file
git log filename.html

# Changes to specific file
git log -p filename.html

# Commits where file was added/deleted
git log --follow filename.html
```

---

## 💡 Best Practices Summary

✅ **DO:**
- Commit frequently (at least once per feature)
- Write clear commit messages
- Push regularly to GitHub
- Create branches for features
- Review changes before committing
- Keep commits small and focused

❌ **DON'T:**
- Commit large binary files
- Commit passwords or API keys
- Push directly to main branch
- Write vague commit messages
- Make massive commits mixing multiple changes
- Ignore conflicts

---

## 🎯 Your First 10 Commands

Learn these first:
```bash
1. git init                      # Start repo
2. git add .                     # Stage changes
3. git commit -m "msg"           # Save changes
4. git remote add origin url     # Connect to GitHub
5. git push -u origin main       # Upload to GitHub
6. git status                    # Check what changed
7. git log                       # View history
8. git pull                      # Download changes
9. git checkout -b branch        # Create branch
10. git merge branch             # Combine branches
```

---

## 📚 Reference Guide Versions

| Command | What It Does | When to Use |
|---------|-------------|-----------|
| `git init` | Start new repository | First time setup |
| `git add` | Stage changes | Before committing |
| `git commit` | Save snapshot | When changes are ready |
| `git push` | Upload to GitHub | Share with team |
| `git pull` | Download changes | Update local repo |
| `git branch` | Create/list branches | Organize work |
| `git merge` | Combine branches | Join feature to main |
| `git log` | View history | Understand changes |
| `git status` | Check current state | Before any action |
| `git diff` | See what changed | Review before commit |

---

## 🔗 Important Links

- **Git Docs**: https://git-scm.com/docs
- **GitHub Docs**: https://docs.github.com
- **GitHub**: https://github.com
- **Git Visualization**: https://learngitbranching.js.org

---

## 📝 Common Commit Message Patterns

```bash
# Feature
git commit -m "Feature: add dark mode toggle"

# Fix
git commit -m "Fix: correct button alignment on mobile"

# Refactor
git commit -m "Refactor: simplify authentication logic"

# Chore
git commit -m "Chore: update dependencies"

# Docs
git commit -m "Docs: update README with setup instructions"

# Test
git commit -m "Test: add unit tests for login"
```

---

**Created**: Day 6 Learning  
**Purpose**: Quick reference while working  
**Print & Laminate**: Recommended for desk reference!  
**Status**: Ready for daily use
