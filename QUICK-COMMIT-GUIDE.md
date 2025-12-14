# Quick Commit Guide - 50+ Logical Commits

## 🚀 Quick Start (Choose One Method)

### Method 1: Interactive Script (Recommended)
```powershell
cd C:\Users\Admin\Desktop\Intellisys\HRMS
.\interactive-commits.ps1
```
- Shows each commit before creating it
- Lets you skip or modify commits
- Best for first-time use

### Method 2: Automated Script
```powershell
cd C:\Users\Admin\Desktop\Intellisys\HRMS
.\create-commits.ps1
```
- Creates all commits automatically
- Faster but less control

### Method 3: Manual (Full Control)
Follow the plan in `commit-plan.md` and create commits one by one.

## 📋 Commit Categories

### Backend (4 commits)
- Notification model
- Leave notifications
- Resignation notifications  
- Attendance notifications

### Frontend Core (3 commits)
- Alert service/component
- App component layout
- Material Icons & global styles

### Navigation (4 commits)
- Admin navbar
- Sidebar theme
- Top-nav theme
- Clickable notifications

### Admin Components (6 commits)
- Admin dashboard
- Admin profile
- Employee profile list
- Employee registration
- Edit profile
- Payslip upload

### Employee Components (8 commits)
- Login page
- Schedule/Attendance
- Leave form
- Leaves list
- User payslip
- Profile
- Home (right)
- Resignation

### Approval Components (6 commits)
- Leaves approval
- Attendance approval
- Resignation approval
- Attendance application
- Holiday
- Reset password & Sign-up

## ✅ Verification Commands

```powershell
# Count total commits
git log --oneline | Measure-Object -Line

# See commit history
git log --oneline

# See detailed commit info
git log --stat

# See commits by author
git shortlog -sn
```

## 🎯 Commit Message Examples

```
feat(backend): add notification model with recipient, type, and actionRoute fields
feat(frontend): create custom alert service and component
feat(frontend): update sidebar with theme, icons, and responsive design
fix(frontend): fix notification badge count display
style(frontend): improve button hover effects
```

## ⚠️ Important Notes

1. **Test before committing**: Make sure code works
2. **One logical change per commit**: Don't mix unrelated changes
3. **Clear commit messages**: Use conventional commit format
4. **Review before pushing**: Check `git log` before pushing to remote

## 🔄 If You Need to Fix

```powershell
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Change last commit message
git commit --amend -m "new message"

# See what files changed
git status
```

## 📊 Expected Result

After running the scripts, you should have:
- **30+ commits** from the main script
- Each commit is logical and meaningful
- All commits follow conventional commit format
- Easy to review and understand

## 🎉 After Creating Commits

```powershell
# Push to remote (when ready)
git push origin main

# Or push in batches
git push origin main --force-with-lease
```

---

**Remember**: Quality over quantity. Each commit should represent a meaningful, logical change that can be reviewed independently.

