# Logical Commit Plan for HRMS Project

## Strategy: Break down changes into logical, meaningful commits

### Phase 1: Backend - Notification System (3-4 commits)
1. **feat(backend): add notification model with recipient and actionRoute fields**
   - Backend/models/Notification.js

2. **feat(backend): add notification creation for leave applications**
   - Backend/controllers/leaveController.js

3. **feat(backend): add notification creation for resignation requests**
   - Backend/controllers/resignationController.js

4. **feat(backend): add notification creation for attendance applications**
   - Backend/controllers/attendanceApplicationController.js

### Phase 2: Frontend - Core Infrastructure (5-6 commits)
5. **feat(frontend): add centralized API configuration**
   - Frontend/src/app/config/api.config.ts

6. **feat(frontend): create custom alert service and component**
   - Frontend/src/app/services/alert.service.ts
   - Frontend/src/app/components/alert/

7. **feat(frontend): update app component to support sidebar layout**
   - Frontend/src/app/app.component.ts
   - Frontend/src/app/app.component.html
   - Frontend/src/app/app.component.css

8. **feat(frontend): add Material Icons support**
   - Frontend/src/index.html
   - Frontend/src/styles.css (Material Icons styles)

### Phase 3: Frontend - Navigation Components (4-5 commits)
9. **feat(frontend): create admin navbar component**
   - Frontend/src/app/admin-navbar/ (all files)

10. **feat(frontend): update sidebar with theme and icons**
    - Frontend/src/app/sidebar/sidebar.component.css
    - Frontend/src/app/sidebar/sidebar.component.html
    - Frontend/src/app/sidebar/sidebar.component.ts

11. **feat(frontend): update top-nav with theme and responsive design**
    - Frontend/src/app/top-nav/top-nav.component.css
    - Frontend/src/app/top-nav/top-nav.component.html
    - Frontend/src/app/top-nav/top-nav.component.ts

12. **feat(frontend): add clickable notifications with navigation**
    - Frontend/src/app/admin-navbar/admin-navbar.component.ts (handleNotificationClick)
    - Frontend/src/app/admin-navbar/admin-navbar.component.html (clickable notifications)
    - Frontend/src/app/admin-navbar/admin-navbar.component.css (hover styles)

### Phase 4: Frontend - Admin Components (6-7 commits)
13. **feat(frontend): redesign admin dashboard with digital clock**
    - Frontend/src/app/admin-dashboard/admin-dashboard.component.ts
    - Frontend/src/app/admin-dashboard/admin-dashboard.component.html
    - Frontend/src/app/admin-dashboard/admin-dashboard.component.css

14. **feat(frontend): update admin profile component styling**
    - Frontend/src/app/admin-profile/admin-profile.component.css
    - Frontend/src/app/admin-profile/admin-profile.component.html
    - Frontend/src/app/admin-profile/admin-profile.component.ts

15. **feat(frontend): update employee profile list with theme**
    - Frontend/src/app/employee-profile/employee-profile.component.css
    - Frontend/src/app/employee-profile/employee-profile.component.html
    - Frontend/src/app/employee-profile/employee-profile.component.ts

16. **feat(frontend): redesign employee registration form**
    - Frontend/src/app/employee/employee.component.css
    - Frontend/src/app/employee/employee.component.html
    - Frontend/src/app/employee/employee.component.ts

17. **feat(frontend): update edit profile component layout**
    - Frontend/src/app/edit-profile/edit-profile.component.css
    - Frontend/src/app/edit-profile/edit-profile.component.html
    - Frontend/src/app/edit-profile/edit-profile.component.ts

18. **feat(frontend): update payslip upload page styling**
    - Frontend/src/app/payslip/payslip.component.css
    - Frontend/src/app/payslip/payslip.component.html
    - Frontend/src/app/payslip/payslip.component.ts

### Phase 5: Frontend - Employee Components (8-9 commits)
19. **feat(frontend): redesign login page**
    - Frontend/src/app/login-page/login-page.component.css
    - Frontend/src/app/login-page/login-page.component.html
    - Frontend/src/app/login-page/login-page.component.ts

20. **feat(frontend): update schedule component with theme**
    - Frontend/src/app/schedule/schedule.component.css
    - Frontend/src/app/schedule/schedule.component.html
    - Frontend/src/app/schedule/schedule.component.ts

21. **feat(frontend): redesign leave application form**
    - Frontend/src/app/leave/leave.component.css
    - Frontend/src/app/leave/leave.component.html
    - Frontend/src/app/leave/leave.component.ts

22. **feat(frontend): update leaves list component**
    - Frontend/src/app/leaves/leaves.component.css
    - Frontend/src/app/leaves/leaves.component.html

23. **feat(frontend): update user payslip component**
    - Frontend/src/app/user-payslip/user-payslip.component.css
    - Frontend/src/app/user-payslip/user-payslip.component.html
    - Frontend/src/app/user-payslip/user-payslip.component.ts

24. **feat(frontend): update profile component**
    - Frontend/src/app/profile/profile.component.css

25. **feat(frontend): update right component (home)**
    - Frontend/src/app/right/right.component.css
    - Frontend/src/app/right/right.component.html

26. **feat(frontend): update resignation component**
    - Frontend/src/app/resignation/resignation.component.css
    - Frontend/src/app/resignation/resignation.component.html
    - Frontend/src/app/resignation/resignation.component.ts

### Phase 6: Frontend - Approval Components (6-7 commits)
27. **feat(frontend): update leaves approval component**
    - Frontend/src/app/leaves-approval/leaves-approval.component.css
    - Frontend/src/app/leaves-approval/leaves-approval.component.html
    - Frontend/src/app/leaves-approval/leaves-approval.component.ts

28. **feat(frontend): update attendance approval component**
    - Frontend/src/app/attendance-approval/attendance-approval.component.css
    - Frontend/src/app/attendance-approval/attendance-approval.component.html
    - Frontend/src/app/attendance-approval/attendance-approval.component.ts

29. **feat(frontend): update resignation approval component**
    - Frontend/src/app/resignation-approval/resignation-approval.component.css
    - Frontend/src/app/resignation-approval/resignation-approval.component.html
    - Frontend/src/app/resignation-approval/resignation-approval.component.ts

30. **feat(frontend): update attendance application component**
    - Frontend/src/app/attendance-application/attendance-application.component.css

31. **feat(frontend): update holiday component**
    - Frontend/src/app/holiday/holiday.component.css
    - Frontend/src/app/holiday/holiday.component.html
    - Frontend/src/app/holiday/holiday.component.ts

32. **feat(frontend): update reset password component**
    - Frontend/src/app/reset-password/reset-password.component.css

33. **feat(frontend): update sign-up component**
    - Frontend/src/app/sign-up/sign-up.component.css

### Phase 7: Global Styles and Configuration (2-3 commits)
34. **style(frontend): update global styles with theme colors**
    - Frontend/src/styles.css

35. **config(frontend): add vercel deployment configuration**
    - Frontend/vercel.json

### Phase 8: Additional Features (5-6 commits)
36. **feat(frontend): add responsive design improvements**
    - Multiple component CSS files (responsive breakpoints)

37. **feat(frontend): replace text symbols with Material Icons**
    - Multiple component HTML files

38. **feat(frontend): improve form validation and error handling**
    - Multiple component TS files (using AlertService)

39. **feat(frontend): add cancel buttons to forms**
    - employee.component.ts
    - edit-profile.component.ts

40. **feat(frontend): improve mobile responsiveness**
    - Multiple component CSS files

### Phase 9: Bug Fixes and Improvements (5-6 commits)
41. **fix(frontend): fix notification badge count display**
    - Frontend/src/app/admin-navbar/admin-navbar.component.ts

42. **fix(frontend): fix sidebar dropdown visibility**
    - Frontend/src/app/sidebar/sidebar.component.css

43. **fix(frontend): fix overflow issues on mobile**
    - Multiple component CSS files

44. **fix(frontend): fix calendar icon alignment**
    - Frontend/src/app/user-payslip/user-payslip.component.css

45. **fix(frontend): fix notification popup positioning on mobile**
    - Frontend/src/app/admin-navbar/admin-navbar.component.css

46. **fix(frontend): fix active route highlighting**
    - Frontend/src/app/sidebar/sidebar.component.css

### Phase 10: Polish and Refinement (4-5 commits)
47. **style(frontend): improve button hover effects**
    - Multiple component CSS files

48. **style(frontend): improve card shadows and borders**
    - Multiple component CSS files

49. **style(frontend): improve form field styling**
    - Multiple component CSS files

50. **style(frontend): final theme consistency pass**
    - Multiple component CSS files

## Total: 50+ Logical Commits

Each commit represents a single, cohesive change that:
- Has a clear purpose
- Can be reviewed independently
- Follows conventional commit format
- Is meaningful and not artificial

