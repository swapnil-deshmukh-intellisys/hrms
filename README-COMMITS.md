# How to Create 50+ Logical Commits

## Quick Start

1. **Review the commit plan**: Check `commit-plan.md` to see all planned commits

2. **Run the automated script** (recommended):
   ```powershell
   cd C:\Users\Admin\Desktop\Intellisys\HRMS
   .\create-commits.ps1
   ```

3. **Or create commits manually** following the plan below

## Manual Commit Process

### Step 1: Check Current Status
```powershell
git status
```

### Step 2: Create Commits One by One

#### Example Commit 1: Backend Notification Model
```powershell
git add Backend/models/Notification.js
git commit -m "feat(backend): add notification model with recipient, type, and actionRoute fields"
```

#### Example Commit 2: Leave Notifications
```powershell
git add Backend/controllers/leaveController.js
git commit -m "feat(backend): add notification creation for leave applications"
```

Continue following the plan in `commit-plan.md`

## Commit Message Format

Follow this format:
```
<type>(<scope>): <subject>

<body> (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `docs`: Documentation changes
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(frontend): add clickable notifications with navigation
fix(frontend): fix notification badge count display
style(frontend): improve button hover effects
feat(backend): add notification creation for leave applications
```

## Verification

After creating commits, verify:
```powershell
# See all commits
git log --oneline

# Count commits
git log --oneline | Measure-Object -Line

# See commit statistics
git log --stat
```

## Tips

1. **One logical change per commit**: Each commit should represent a single, cohesive change
2. **Test before committing**: Make sure the code works
3. **Write clear messages**: Future you (and others) will thank you
4. **Group related files**: If files are tightly coupled, commit them together
5. **Don't force it**: If a commit doesn't make sense, don't create it

## If You Make a Mistake

```powershell
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Amend last commit message
git commit --amend -m "new message"
```

## Pushing to Remote

After creating all commits:
```powershell
git push origin main
```

Or push in batches:
```powershell
git push origin main --force-with-lease  # Only if you're sure
```

