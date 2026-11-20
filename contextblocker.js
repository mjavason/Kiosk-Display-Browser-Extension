
(() => {
  // Prevent all mouse clicks and link activation.
  const blockClick = (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
  };

  document.addEventListener("click", blockClick, true);
  document.addEventListener("auxclick", blockClick, true);

  // Prevent right-click menus.
  document.addEventListener("contextmenu", blockClick, true);

  // Prevent text selection.
  document.addEventListener("selectstart", blockClick, true);

  // Prevent dragging images and other elements.
  document.addEventListener("dragstart", blockClick, true);

  // Disable text selection without interfering with scrolling.
  const style = document.createElement("style");

  style.textContent = `
    * {
      -webkit-user-select: none !important;
      user-select: none !important;
      -webkit-touch-callout: none !important;
    }
  `;

  (document.head || document.documentElement).appendChild(style);
})();
