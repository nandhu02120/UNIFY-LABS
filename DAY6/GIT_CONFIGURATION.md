# Git Configuration Guide - Day 6

## Step 1: Git Bash Installation

### What is Git Bash?
Git Bash is a command-line interface (CLI) that allows developers to interact with Git repositories using Unix-like commands on Windows.

### Installation Process
1. Download from: https://git-scm.com/download/win
2. Run the installer executable
3. Follow installation wizard with default settings
4. Launch Git Bash from Start menu or right-click context menu

### Verification Command
```bash
git --version
```
**Expected Output**: `git version 2.x.x.windows.1` (or similar)

---

## Step 2: Configure Global User Identity

### Why Configure Global User?
Every Git commit requires an author name and email. Global configuration means you don't have to set this for every repository.

### Configuration Commands

#### Set User Name (Global)
```bash
git config --global user.name "Your Full Name"
```
Example:
```bash
git config --global user.name "Nandh Developer"
```

#### Set User Email (Global)
```bash
git config --global user.email "your.email@gmail.com"
```
Example:
```bash
git config --global user.email "nandh@example.com"
```

### View Configuration
```bash
git config --global --list
```

This displays all your global Git configurations:
```
user.name=Nandh Developer
user.email=nandh@example.com
...
```

### Where Configuration is Stored
- **Windows Location**: `C:\Users\YourUsername\.gitconfig`
- **File Format**: Plain text, can be edited manually if needed

---

## Step 3: Avoiding Credential Storage Issues

### The Problem
If you store passwords in Git credentials, they become security vulnerabilities. Modern Git requires different authentication methods.

### Better Solution: Personal Access Token (PAT)
Instead of passwords, use GitHub Personal Access Tokens for HTTPS authentication.

### Key Concept
```
Username: your-github-username
Password: your-personal-access-token (NOT your GitHub password)
```

---

## Common Configuration Scenarios

### Scenario 1: Different Identity for Work vs. Personal
You can configure different identities per repository:
```bash
cd /path/to/work-project
git config user.name "Work Name"
git config user.email "work@company.com"
```

### Scenario 2: Reset to Default (Global)
```bash
git config --global --unset user.name
git config --global --unset user.email
```

### Scenario 3: View Just One Setting
```bash
git config --global user.name    # Shows just the name
git config --global user.email   # Shows just the email
```

---

## Configuration Verification Checklist

- [ ] Git Bash installed and accessible
- [ ] `git --version` returns version number
- [ ] Global user name configured
- [ ] Global user email configured
- [ ] `git config --global --list` shows your settings
- [ ] Ready to authenticate with GitHub

---

## Security Notes

⚠️ **Important Security Practices:**
1. Never commit credentials or passwords to Git
2. Use Personal Access Tokens instead of passwords
3. Keep your `.gitconfig` file private
4. Regularly review your GitHub security settings
5. Use SSH keys as an alternative to PAT for enhanced security

---

## Troubleshooting

### Issue: Git not recognized as command
**Solution**: Restart terminal or reinstall Git Bash

### Issue: Can't find .gitconfig file
**Solution**: Open Git Bash and run:
```bash
git config --global user.name "Test"
```
This creates the .gitconfig file if it doesn't exist.

### Issue: Want to change configured email
**Solution**: Run the `git config --global user.email` command with new email

---

**Next Phase**: → GitHub Personal Access Token Setup
