const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/attendance",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "chek-in-and-check-out",
        component: () => import("pages/attendance/AttendanceTime.vue"),
        name: "attendance.checkInOut",
      },
      {
        path: "view-holidays",
        component: () => import("pages/attendance/HolidaysView.vue"),
        name: "attendance.holidaysView",
      },
      {
        path: "apply-leave",
        component: () => import("pages/attendance/LeaveApply.vue"),
        name: "attendance.applyLeave",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
