window.Common = {
  // unregisted user can only access home and login page, but not issues page,have to login if wants to go issue page
  homeRoutes: [
    { keys: ["home"], path: "home.html" },
    { keys: ["issue", "issues"], path: "page3.html", requireSignIn: true },
    { keys: ["report", "report issue", "report an issue"], path: "login.html" },
    {
      keys: ["status", "check status", "report status", "track report"],
      path: "Maddy code/trackReport.html",
    },
    { keys: ["login", "sign in", "signin"], path: "page1.html" },
  ],
  // already signed in users can access all pages
  issueRoutes: [
    { keys: ["home"], path: "home.html" },
    { keys: ["issue", "issues"], path: "page3.html" },
    { keys: ["login", "sign in", "signin"], path: "page1.html" },
    { keys: ["report", "report issue", "report an issue"], path: "page4.html" },
    {
      keys: ["status", "check status", "report status"],
      path: "Maddy code/reportStatus.html",
    },
  ],
  // check if user is signed in by localStorage, if not, redirect to login page when trying to access issue page
  isSignedIn() {
    return localStorage.getItem("isSignedIn") === "true";
  },

  clearSignIn() {
    localStorage.removeItem("isSignedIn");
  },

  findRoute(query, context) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return null;
    const routes = context === "home" ? this.homeRoutes : this.issueRoutes;

    return routes.find((item) =>
      item.keys.some((key) => normalized.includes(key)),
    );
  },
};

// ── 汉堡burger menu ──
function toggleMenu() {
  const menu = document.getElementById("menu-dropdown");
  if (menu) {
    menu.classList.toggle("show");
  }
}

// click somewhere to close menu
document.addEventListener("click", function (event) {
  const menu = document.getElementById("menu-dropdown");
  const menuIcon = document.querySelector(".menu-icon");

  if (
    menu &&
    menuIcon &&
    !menu.contains(event.target) &&
    !menuIcon.contains(event.target)
  ) {
    menu.classList.remove("show");
  }
});
