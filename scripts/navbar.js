const navlinks = [
  { name: "Home", href: "#" },
  { name: "Shop", href: "#" },
  { name: "Contact", href: "#" },
];

function renderNavLinks(targetId) {
  const target = document.getElementById(targetId);
  navlinks.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.name;
    li.appendChild(a);
    target.appendChild(li);
  });
}
