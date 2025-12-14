# PowerShell Script to Create Logical Commits
# Run this script from the HRMS directory

Write-Host "=== HRMS Logical Commit Script ===" -ForegroundColor Cyan
Write-Host "This script will help you create 50+ logical commits" -ForegroundColor Yellow
Write-Host ""

# Function to create a commit
function Create-Commit {
    param(
        [string]$Message,
        [string[]]$Files
    )
    
    Write-Host "`n📝 Committing: $Message" -ForegroundColor Green
    Write-Host "Files: $($Files.Count)" -ForegroundColor Gray
    
    foreach ($file in $Files) {
        if (Test-Path $file) {
            git add $file
            Write-Host "  ✓ Added: $file" -ForegroundColor DarkGray
        } else {
            Write-Host "  ✗ Not found: $file" -ForegroundColor Red
        }
    }
    
    git commit -m $Message
    Write-Host "✅ Commit created!" -ForegroundColor Green
}

# Phase 1: Backend - Notification System
Write-Host "`n=== Phase 1: Backend - Notification System ===" -ForegroundColor Cyan

Create-Commit -Message "feat(backend): add notification model with recipient, type, and actionRoute fields" `
    -Files @("Backend/models/Notification.js")

Create-Commit -Message "feat(backend): add notification creation for leave applications" `
    -Files @("Backend/controllers/leaveController.js")

Create-Commit -Message "feat(backend): add notification creation for resignation requests" `
    -Files @("Backend/controllers/resignationController.js")

Create-Commit -Message "feat(backend): add notification creation for attendance applications" `
    -Files @("Backend/controllers/attendanceApplicationController.js")

# Phase 2: Frontend - Core Infrastructure
Write-Host "`n=== Phase 2: Frontend - Core Infrastructure ===" -ForegroundColor Cyan

Create-Commit -Message "feat(frontend): create custom alert service and component" `
    -Files @("Frontend/src/app/services/alert.service.ts", "Frontend/src/app/components/alert/")

Create-Commit -Message "feat(frontend): update app component to support sidebar layout" `
    -Files @("Frontend/src/app/app.component.ts", "Frontend/src/app/app.component.html", "Frontend/src/app/app.component.css")

Create-Commit -Message "feat(frontend): add Material Icons support and global styles" `
    -Files @("Frontend/src/index.html", "Frontend/src/styles.css")

# Phase 3: Frontend - Navigation Components
Write-Host "`n=== Phase 3: Frontend - Navigation Components ===" -ForegroundColor Cyan

Create-Commit -Message "feat(frontend): create admin navbar component" `
    -Files @("Frontend/src/app/admin-navbar/")

Create-Commit -Message "feat(frontend): update sidebar with theme, icons, and responsive design" `
    -Files @("Frontend/src/app/sidebar/sidebar.component.css", "Frontend/src/app/sidebar/sidebar.component.html", "Frontend/src/app/sidebar/sidebar.component.ts")

Create-Commit -Message "feat(frontend): update top-nav with theme and responsive design" `
    -Files @("Frontend/src/app/top-nav/top-nav.component.css", "Frontend/src/app/top-nav/top-nav.component.html", "Frontend/src/app/top-nav/top-nav.component.ts")

Create-Commit -Message "feat(frontend): add clickable notifications with navigation support" `
    -Files @("Frontend/src/app/admin-navbar/admin-navbar.component.ts", "Frontend/src/app/admin-navbar/admin-navbar.component.html", "Frontend/src/app/admin-navbar/admin-navbar.component.css")

# Phase 4: Frontend - Admin Components
Write-Host "`n=== Phase 4: Frontend - Admin Components ===" -ForegroundColor Cyan

Create-Commit -Message "feat(frontend): redesign admin dashboard with digital clock" `
    -Files @("Frontend/src/app/admin-dashboard/admin-dashboard.component.ts", "Frontend/src/app/admin-dashboard/admin-dashboard.component.html", "Frontend/src/app/admin-dashboard/admin-dashboard.component.css")

Create-Commit -Message "feat(frontend): update admin profile component styling" `
    -Files @("Frontend/src/app/admin-profile/admin-profile.component.css", "Frontend/src/app/admin-profile/admin-profile.component.html", "Frontend/src/app/admin-profile/admin-profile.component.ts")

Create-Commit -Message "feat(frontend): update employee profile list with theme and icons" `
    -Files @("Frontend/src/app/employee-profile/employee-profile.component.css", "Frontend/src/app/employee-profile/employee-profile.component.html", "Frontend/src/app/employee-profile/employee-profile.component.ts")

Create-Commit -Message "feat(frontend): redesign employee registration form" `
    -Files @("Frontend/src/app/employee/employee.component.css", "Frontend/src/app/employee/employee.component.html", "Frontend/src/app/employee/employee.component.ts")

Create-Commit -Message "feat(frontend): update edit profile component layout and styling" `
    -Files @("Frontend/src/app/edit-profile/edit-profile.component.css", "Frontend/src/app/edit-profile/edit-profile.component.html", "Frontend/src/app/edit-profile/edit-profile.component.ts")

Create-Commit -Message "feat(frontend): update payslip upload page styling" `
    -Files @("Frontend/src/app/payslip/payslip.component.css", "Frontend/src/app/payslip/payslip.component.html", "Frontend/src/app/payslip/payslip.component.ts")

# Phase 5: Frontend - Employee Components
Write-Host "`n=== Phase 5: Frontend - Employee Components ===" -ForegroundColor Cyan

Create-Commit -Message "feat(frontend): redesign login page with theme" `
    -Files @("Frontend/src/app/login-page/login-page.component.css", "Frontend/src/app/login-page/login-page.component.html", "Frontend/src/app/login-page/login-page.component.ts")

Create-Commit -Message "feat(frontend): update schedule component with theme and calendar" `
    -Files @("Frontend/src/app/schedule/schedule.component.css", "Frontend/src/app/schedule/schedule.component.html", "Frontend/src/app/schedule/schedule.component.ts")

Create-Commit -Message "feat(frontend): redesign leave application form" `
    -Files @("Frontend/src/app/leave/leave.component.css", "Frontend/src/app/leave/leave.component.html", "Frontend/src/app/leave/leave.component.ts")

Create-Commit -Message "feat(frontend): update leaves list component styling" `
    -Files @("Frontend/src/app/leaves/leaves.component.css", "Frontend/src/app/leaves/leaves.component.html")

Create-Commit -Message "feat(frontend): update user payslip component with theme" `
    -Files @("Frontend/src/app/user-payslip/user-payslip.component.css", "Frontend/src/app/user-payslip/user-payslip.component.html", "Frontend/src/app/user-payslip/user-payslip.component.ts")

Create-Commit -Message "feat(frontend): update profile component styling" `
    -Files @("Frontend/src/app/profile/profile.component.css")

Create-Commit -Message "feat(frontend): update right component (home) styling" `
    -Files @("Frontend/src/app/right/right.component.css", "Frontend/src/app/right/right.component.html")

Create-Commit -Message "feat(frontend): update resignation component styling" `
    -Files @("Frontend/src/app/resignation/resignation.component.css", "Frontend/src/app/resignation/resignation.component.html", "Frontend/src/app/resignation/resignation.component.ts")

# Phase 6: Frontend - Approval Components
Write-Host "`n=== Phase 6: Frontend - Approval Components ===" -ForegroundColor Cyan

Create-Commit -Message "feat(frontend): update leaves approval component with theme" `
    -Files @("Frontend/src/app/leaves-approval/leaves-approval.component.css", "Frontend/src/app/leaves-approval/leaves-approval.component.html", "Frontend/src/app/leaves-approval/leaves-approval.component.ts")

Create-Commit -Message "feat(frontend): update attendance approval component with theme" `
    -Files @("Frontend/src/app/attendance-approval/attendance-approval.component.css", "Frontend/src/app/attendance-approval/attendance-approval.component.html", "Frontend/src/app/attendance-approval/attendance-approval.component.ts")

Create-Commit -Message "feat(frontend): update resignation approval component with theme" `
    -Files @("Frontend/src/app/resignation-approval/resignation-approval.component.css", "Frontend/src/app/resignation-approval/resignation-approval.component.html", "Frontend/src/app/resignation-approval/resignation-approval.component.ts")

Create-Commit -Message "feat(frontend): update attendance application component styling" `
    -Files @("Frontend/src/app/attendance-application/attendance-application.component.css")

Create-Commit -Message "feat(frontend): update holiday component styling" `
    -Files @("Frontend/src/app/holiday/holiday.component.css", "Frontend/src/app/holiday/holiday.component.html", "Frontend/src/app/holiday/holiday.component.ts")

Create-Commit -Message "feat(frontend): update reset password and sign-up components" `
    -Files @("Frontend/src/app/reset-password/reset-password.component.css", "Frontend/src/app/sign-up/sign-up.component.css")

Write-Host "`n=== All Commits Created! ===" -ForegroundColor Green
Write-Host "Run 'git log --oneline' to see all commits" -ForegroundColor Yellow

