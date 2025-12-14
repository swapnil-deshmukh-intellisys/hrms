# Interactive Commit Script
# This script will guide you through creating logical commits one by one

$commits = @(
    @{
        Message = "feat(backend): add notification model with recipient, type, and actionRoute fields"
        Files = @("Backend/models/Notification.js")
    },
    @{
        Message = "feat(backend): add notification creation for leave applications"
        Files = @("Backend/controllers/leaveController.js")
    },
    @{
        Message = "feat(backend): add notification creation for resignation requests"
        Files = @("Backend/controllers/resignationController.js")
    },
    @{
        Message = "feat(backend): add notification creation for attendance applications"
        Files = @("Backend/controllers/attendanceApplicationController.js")
    },
    @{
        Message = "feat(frontend): create custom alert service and component"
        Files = @("Frontend/src/app/services/alert.service.ts", "Frontend/src/app/components/alert/")
    },
    @{
        Message = "feat(frontend): update app component to support sidebar layout"
        Files = @("Frontend/src/app/app.component.ts", "Frontend/src/app/app.component.html", "Frontend/src/app/app.component.css")
    },
    @{
        Message = "feat(frontend): add Material Icons support and global styles"
        Files = @("Frontend/src/index.html", "Frontend/src/styles.css")
    },
    @{
        Message = "feat(frontend): create admin navbar component"
        Files = @("Frontend/src/app/admin-navbar/")
    },
    @{
        Message = "feat(frontend): update sidebar with theme, icons, and responsive design"
        Files = @("Frontend/src/app/sidebar/sidebar.component.css", "Frontend/src/app/sidebar/sidebar.component.html", "Frontend/src/app/sidebar/sidebar.component.ts")
    },
    @{
        Message = "feat(frontend): update top-nav with theme and responsive design"
        Files = @("Frontend/src/app/top-nav/top-nav.component.css", "Frontend/src/app/top-nav/top-nav.component.html", "Frontend/src/app/top-nav/top-nav.component.ts")
    },
    @{
        Message = "feat(frontend): add clickable notifications with navigation support"
        Files = @("Frontend/src/app/admin-navbar/admin-navbar.component.ts", "Frontend/src/app/admin-navbar/admin-navbar.component.html", "Frontend/src/app/admin-navbar/admin-navbar.component.css")
    },
    @{
        Message = "feat(frontend): redesign admin dashboard with digital clock"
        Files = @("Frontend/src/app/admin-dashboard/admin-dashboard.component.ts", "Frontend/src/app/admin-dashboard/admin-dashboard.component.html", "Frontend/src/app/admin-dashboard/admin-dashboard.component.css")
    },
    @{
        Message = "feat(frontend): update admin profile component styling"
        Files = @("Frontend/src/app/admin-profile/admin-profile.component.css", "Frontend/src/app/admin-profile/admin-profile.component.html", "Frontend/src/app/admin-profile/admin-profile.component.ts")
    },
    @{
        Message = "feat(frontend): update employee profile list with theme and icons"
        Files = @("Frontend/src/app/employee-profile/employee-profile.component.css", "Frontend/src/app/employee-profile/employee-profile.component.html", "Frontend/src/app/employee-profile/employee-profile.component.ts")
    },
    @{
        Message = "feat(frontend): redesign employee registration form"
        Files = @("Frontend/src/app/employee/employee.component.css", "Frontend/src/app/employee/employee.component.html", "Frontend/src/app/employee/employee.component.ts")
    },
    @{
        Message = "feat(frontend): update edit profile component layout and styling"
        Files = @("Frontend/src/app/edit-profile/edit-profile.component.css", "Frontend/src/app/edit-profile/edit-profile.component.html", "Frontend/src/app/edit-profile/edit-profile.component.ts")
    },
    @{
        Message = "feat(frontend): update payslip upload page styling"
        Files = @("Frontend/src/app/payslip/payslip.component.css", "Frontend/src/app/payslip/payslip.component.html", "Frontend/src/app/payslip/payslip.component.ts")
    },
    @{
        Message = "feat(frontend): redesign login page with theme"
        Files = @("Frontend/src/app/login-page/login-page.component.css", "Frontend/src/app/login-page/login-page.component.html", "Frontend/src/app/login-page/login-page.component.ts")
    },
    @{
        Message = "feat(frontend): update schedule component with theme and calendar"
        Files = @("Frontend/src/app/schedule/schedule.component.css", "Frontend/src/app/schedule/schedule.component.html", "Frontend/src/app/schedule/schedule.component.ts")
    },
    @{
        Message = "feat(frontend): redesign leave application form"
        Files = @("Frontend/src/app/leave/leave.component.css", "Frontend/src/app/leave/leave.component.html", "Frontend/src/app/leave/leave.component.ts")
    },
    @{
        Message = "feat(frontend): update leaves list component styling"
        Files = @("Frontend/src/app/leaves/leaves.component.css", "Frontend/src/app/leaves/leaves.component.html")
    },
    @{
        Message = "feat(frontend): update user payslip component with theme"
        Files = @("Frontend/src/app/user-payslip/user-payslip.component.css", "Frontend/src/app/user-payslip/user-payslip.component.html", "Frontend/src/app/user-payslip/user-payslip.component.ts")
    },
    @{
        Message = "feat(frontend): update profile component styling"
        Files = @("Frontend/src/app/profile/profile.component.css")
    },
    @{
        Message = "feat(frontend): update right component (home) styling"
        Files = @("Frontend/src/app/right/right.component.css", "Frontend/src/app/right/right.component.html")
    },
    @{
        Message = "feat(frontend): update resignation component styling"
        Files = @("Frontend/src/app/resignation/resignation.component.css", "Frontend/src/app/resignation/resignation.component.html", "Frontend/src/app/resignation/resignation.component.ts")
    },
    @{
        Message = "feat(frontend): update leaves approval component with theme"
        Files = @("Frontend/src/app/leaves-approval/leaves-approval.component.css", "Frontend/src/app/leaves-approval/leaves-approval.component.html", "Frontend/src/app/leaves-approval/leaves-approval.component.ts")
    },
    @{
        Message = "feat(frontend): update attendance approval component with theme"
        Files = @("Frontend/src/app/attendance-approval/attendance-approval.component.css", "Frontend/src/app/attendance-approval/attendance-approval.component.html", "Frontend/src/app/attendance-approval/attendance-approval.component.ts")
    },
    @{
        Message = "feat(frontend): update resignation approval component with theme"
        Files = @("Frontend/src/app/resignation-approval/resignation-approval.component.css", "Frontend/src/app/resignation-approval/resignation-approval.component.html", "Frontend/src/app/resignation-approval/resignation-approval.component.ts")
    },
    @{
        Message = "feat(frontend): update attendance application component styling"
        Files = @("Frontend/src/app/attendance-application/attendance-application.component.css")
    },
    @{
        Message = "feat(frontend): update holiday component styling"
        Files = @("Frontend/src/app/holiday/holiday.component.css", "Frontend/src/app/holiday/holiday.component.html", "Frontend/src/app/holiday/holiday.component.ts")
    },
    @{
        Message = "feat(frontend): update reset password and sign-up components"
        Files = @("Frontend/src/app/reset-password/reset-password.component.css", "Frontend/src/app/sign-up/sign-up.component.css")
    }
)

Write-Host "=== Interactive Commit Creator ===" -ForegroundColor Cyan
Write-Host "Total commits to create: $($commits.Count)" -ForegroundColor Yellow
Write-Host ""

$currentCommit = 0
foreach ($commit in $commits) {
    $currentCommit++
    Write-Host "`n[$currentCommit/$($commits.Count)]" -ForegroundColor Cyan
    Write-Host "Message: $($commit.Message)" -ForegroundColor Green
    Write-Host "Files:" -ForegroundColor Yellow
    foreach ($file in $commit.Files) {
        if (Test-Path $file) {
            Write-Host "  ✓ $file" -ForegroundColor DarkGray
        } else {
            Write-Host "  ✗ $file (not found)" -ForegroundColor Red
        }
    }
    
    $response = Read-Host "`nCreate this commit? (Y/n/s=skip)"
    
    if ($response -eq 'n' -or $response -eq 'N') {
        Write-Host "Skipping..." -ForegroundColor Yellow
        continue
    }
    
    if ($response -eq 's' -or $response -eq 'S') {
        Write-Host "Skipping..." -ForegroundColor Yellow
        continue
    }
    
    # Add files
    $filesAdded = 0
    foreach ($file in $commit.Files) {
        if (Test-Path $file) {
            git add $file
            $filesAdded++
        }
    }
    
    if ($filesAdded -gt 0) {
        git commit -m $commit.Message
        Write-Host "✅ Commit created!" -ForegroundColor Green
    } else {
        Write-Host "⚠️  No files found to commit" -ForegroundColor Yellow
    }
}

Write-Host "`n=== Done! ===" -ForegroundColor Green
Write-Host "Run 'git log --oneline' to see all commits" -ForegroundColor Yellow

